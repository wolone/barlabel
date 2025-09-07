import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { invoke } from '@tauri-apps/api/core'
import { open } from '@tauri-apps/plugin-dialog'

interface Product {
  id: number
  Article?: string
  Description?: string
  UPC?: string
  MerchID?: string
  StyleID?: string
  Style_Desc?: string
  Brand?: string
  Color?: string
  Size?: string
  Material?: string
  CN_MSRP?: string
  HK_MSRP?: string
  createdAt: string
  updatedAt: string
}

interface SearchQuery {
  article?: string
  description?: string
  upc?: string
  brand?: string
  color?: string
  style_id?: string
  category?: string
}

export default function ProductManager() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(false)
  const [importDialogOpen, setImportDialogOpen] = useState(false)
  const [importResult, setImportResult] = useState('')
  const [searchQuery, setSearchQuery] = useState<SearchQuery>({})
  const [selectedFile, setSelectedFile] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)
  const [info, setInfo] = useState<string | null>(null)

  // 获取商品列表
  const fetchProducts = async () => {
    setLoading(true)
    clearMessages()
    try {
      const response = await fetch('/api/products')
      if (response.ok) {
        const data = await response.json()
        setProducts(data)
        if (data.length === 0) {
          setInfo('数据库中没有商品数据，请先导入CSV文件')
        }
      } else {
        setError('获取商品列表失败')
      }
    } catch (error) {
      console.error('获取商品列表失败:', error)
      setError('网络错误，请检查连接')
    } finally {
      setLoading(false)
    }
  }

  // 搜索商品
  const searchProducts = async () => {
    setLoading(true)
    clearMessages()
    try {
      const result = await invoke<Product[]>('search_products', { query: searchQuery })
      setProducts(result)
      
      if (result.length === 0) {
        setInfo('没有找到匹配的商品')
      } else {
        setSuccess(`搜索完成，找到 ${result.length} 件商品`)
      }
    } catch (error) {
      console.error('搜索商品失败:', error)
      setError('搜索失败，请重试')
    } finally {
      setLoading(false)
    }
  }

  // 更新搜索查询
  const updateSearchQuery = (field: keyof SearchQuery, value: string) => {
    setSearchQuery(prev => ({
      ...prev,
      [field]: value || undefined
    }))
  }

  // 清空搜索
  const clearSearch = () => {
    setSearchQuery({})
    clearMessages()
    fetchProducts()
  }

  // 清空消息
  const clearMessages = () => {
    setError(null)
    setSuccess(null)
    setInfo(null)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  // 处理文件选择
  const handleFileSelect = async () => {
    clearMessages()
    try {
      // 使用Tauri的文件选择对话框
      const filePath = await open({
        multiple: false,
        filters: [
          {
            name: 'CSV文件',
            extensions: ['csv']
          }
        ]
      })
      
      if (filePath) {
        setSelectedFile(filePath as string)
        setSuccess('文件选择成功')
      } else {
        setInfo('未选择文件')
      }
    } catch (error) {
      console.error('选择文件失败:', error)
      setError('选择文件失败，请重试')
    }
  }

  // 导入CSV文件
  const handleImport = async () => {
    if (!selectedFile) {
      setError('请先选择CSV文件')
      return
    }

    setLoading(true)
    clearMessages()
    try {
      const result = await invoke<string>('import_csv', { filePath: selectedFile })
      setImportResult(result)
      setSuccess('CSV文件导入成功')
      await fetchProducts() // 重新加载商品列表
    } catch (error) {
      console.error('导入失败:', error)
      setError(`导入失败: ${error}`)
    } finally {
      setLoading(false)
    }
  }

  // 导出Bartender CSV
  const handleExport = async () => {
    try {
      if (filteredProducts.length === 0) {
        setError('没有可导出的商品数据')
        return
      }

      setLoading(true)
      clearMessages()

      // 构建Bartender CSV格式的数据
      const csvData = filteredProducts.map(product => ({
        'Article': product.Article || '',
        'Description': product.Description || '',
        'UPC': product.UPC || '',
        'Brand': product.Brand || '',
        'Color': product.Color || '',
        'Size': product.Size || '',
        'Material': product.Material || '',
        'CN_MSRP': product.CN_MSRP || '',
        'HK_MSRP': product.HK_MSRP || ''
      }))

      // 调用后端导出功能
      const result = await invoke<string>('export_bartender_csv', { data: csvData })
      setSuccess(result)
    } catch (error) {
      console.error('导出失败:', error)
      setError(`导出失败: ${error}`)
    } finally {
      setLoading(false)
    }
  }

  // 筛选商品（前端二次筛选）
  const filteredProducts = products.filter(product => {
    if (Object.keys(searchQuery).length === 0) return true
    
    return Object.entries(searchQuery).every(([key, value]) => {
      if (!value) return true
      
      const productValue = product[key as keyof Product]
      return productValue?.toString().toLowerCase().includes(value.toLowerCase())
    })
  })

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">商品吊牌打印系统</h1>
          <p className="text-muted-foreground">管理商品信息并导出Bartender格式</p>
        </div>
      </div>

      {/* 消息显示区域 */}
      {error && (
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      {success && (
        <Alert>
          <AlertDescription>{success}</AlertDescription>
        </Alert>
      )}
      {info && (
        <Alert variant="default">
          <AlertDescription>{info}</AlertDescription>
        </Alert>
      )}

      {/* 操作区域 */}
      <Card>
        <CardHeader>
          <CardTitle>数据操作</CardTitle>
          <CardDescription>导入CSV文件或导出Bartender格式</CardDescription>
        </CardHeader>
        <CardContent className="flex gap-4">
          <Dialog open={importDialogOpen} onOpenChange={setImportDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="outline">导入CSV</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>导入CSV文件</DialogTitle>
                <DialogDescription>
                  选择item.csv文件导入到数据库
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Button onClick={handleFileSelect} variant="outline" className="w-full">
                    选择文件
                  </Button>
                  {selectedFile && (
                    <p className="text-sm text-muted-foreground mt-2">
                      已选择: {selectedFile}
                    </p>
                  )}
                </div>
                <Button 
                  onClick={handleImport} 
                  disabled={loading || !selectedFile}
                  className="w-full"
                >
                  {loading ? '导入中...' : '开始导入'}
                </Button>
                {importResult && (
                  <Alert>
                    <AlertDescription className="whitespace-pre-wrap">
                      {importResult}
                    </AlertDescription>
                  </Alert>
                )}
              </div>
            </DialogContent>
          </Dialog>
          
          <Button onClick={handleExport}>导出Bartender CSV</Button>
        </CardContent>
      </Card>

      {/* 搜索和筛选 */}
      <Card>
        <CardHeader>
          <CardTitle>商品搜索</CardTitle>
          <CardDescription>按商品编号、品牌、颜色等字段搜索</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="text-sm font-medium">商品编号</label>
              <Input
                placeholder="输入商品编号..."
                value={searchQuery.article || ''}
                onChange={(e) => updateSearchQuery('article', e.target.value)}
              />
            </div>
            <div>
              <label className="text-sm font-medium">商品描述</label>
              <Input
                placeholder="输入商品描述..."
                value={searchQuery.description || ''}
                onChange={(e) => updateSearchQuery('description', e.target.value)}
              />
            </div>
            <div>
              <label className="text-sm font-medium">UPC</label>
              <Input
                placeholder="输入UPC..."
                value={searchQuery.upc || ''}
                onChange={(e) => updateSearchQuery('upc', e.target.value)}
              />
            </div>
            <div>
              <label className="text-sm font-medium">品牌</label>
              <Input
                placeholder="输入品牌..."
                value={searchQuery.brand || ''}
                onChange={(e) => updateSearchQuery('brand', e.target.value)}
              />
            </div>
            <div>
              <label className="text-sm font-medium">颜色</label>
              <Input
                placeholder="输入颜色..."
                value={searchQuery.color || ''}
                onChange={(e) => updateSearchQuery('color', e.target.value)}
              />
            </div>
            <div>
              <label className="text-sm font-medium">款式ID</label>
              <Input
                placeholder="输入款式ID..."
                value={searchQuery.style_id || ''}
                onChange={(e) => updateSearchQuery('style_id', e.target.value)}
              />
            </div>
          </div>
          <div className="flex gap-2">
            <Button onClick={searchProducts} disabled={loading}>
              {loading ? '搜索中...' : '搜索'}
            </Button>
            <Button variant="outline" onClick={clearSearch}>
              清空
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* 商品列表 */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>商品列表</CardTitle>
              <CardDescription>显示所有商品信息</CardDescription>
            </div>
            <Badge variant="secondary">
              共 {filteredProducts.length} 件商品
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          {filteredProducts.length === 0 ? (
            <Alert>
              <AlertDescription>
                没有找到匹配的商品数据，请调整搜索条件或导入商品数据。
              </AlertDescription>
            </Alert>
          ) : (
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>商品编号</TableHead>
                    <TableHead>描述</TableHead>
                    <TableHead>品牌</TableHead>
                    <TableHead>颜色</TableHead>
                    <TableHead>尺寸</TableHead>
                    <TableHead>材质</TableHead>
                    <TableHead>中国价格</TableHead>
                    <TableHead>香港价格</TableHead>
                    <TableHead>操作</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredProducts.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell className="font-medium">
                        {product.Article || '-'}
                      </TableCell>
                      <TableCell className="max-w-xs truncate">
                        {product.Description || '-'}
                      </TableCell>
                      <TableCell>
                        {product.Brand && (
                          <Badge variant="outline">{product.Brand}</Badge>
                        )}
                      </TableCell>
                      <TableCell>
                        {product.Color && (
                          <Badge variant="secondary">{product.Color}</Badge>
                        )}
                      </TableCell>
                      <TableCell>{product.Size || '-'}</TableCell>
                      <TableCell>{product.Material || '-'}</TableCell>
                      <TableCell className="font-medium text-green-600">
                        {product.CN_MSRP || '-'}
                      </TableCell>
                      <TableCell className="font-medium text-blue-600">
                        {product.HK_MSRP || '-'}
                      </TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">
                          选择
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}