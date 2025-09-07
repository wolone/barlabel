// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
use std::fs::File;
use std::path::Path;
use std::io::Read;
use csv::{ReaderBuilder, StringRecord, Writer};
use serde::{Deserialize, Serialize};
use sqlx::SqlitePool;

#[derive(Debug, Serialize, Deserialize)]
struct ProductData {
    article: Option<String>,
    description: Option<String>,
    upc: Option<String>,
    merch_id: Option<String>,
    style_id: Option<String>,
    style_desc: Option<String>,
    root_style: Option<String>,
    brand: Option<String>,
    sector: Option<String>,
    category: Option<String>,
    sub_brand: Option<String>,
    mp_a_sub_brand: Option<String>,
    collection: Option<String>,
    class: Option<String>,
    sub_class: Option<String>,
    master_style_id: Option<String>,
    master_style_desc: Option<String>,
    choice_code: Option<String>,
    choice_desc: Option<String>,
    color: Option<String>,
    ec_color: Option<String>,
    u_choice_desc: Option<String>,
    u_form: Option<String>,
    size: Option<String>,
    size_1: Option<String>,
    size_2: Option<String>,
    material: Option<String>,
    case: Option<String>,
    lifecycle: Option<String>,
    key_item: Option<String>,
    gs_contents: Option<String>,
    fst_glb: Option<String>,
    fst_cn: Option<String>,
    fst_hk: Option<String>,
    fst_alt: Option<String>,
    set_cn: Option<String>,
    set_glb: Option<String>,
    set_hk: Option<String>,
    push_cn: Option<String>,
    push_hk: Option<String>,
    mkd_glb: Option<String>,
    mkd_cn: Option<String>,
    mkd_hk: Option<String>,
    sas_glb: Option<String>,
    sas_cn: Option<String>,
    #[serde(rename = "SAS_HK")]
    sas_hk: Option<String>,
    #[serde(rename = "CNTier_LM")]
    cn_tier_lm: Option<String>,
    #[serde(rename = "CNTier_TR")]
    cn_tier_tr: Option<String>,
    #[serde(rename = "CNTier_FA")]
    cn_tier_fa: Option<String>,
    #[serde(rename = "CNTier_OT")]
    cn_tier_ot: Option<String>,
    #[serde(rename = "CNTier_EC")]
    cn_tier_ec: Option<String>,
    #[serde(rename = "HKTier_BA")]
    hk_tier_ba: Option<String>,
    #[serde(rename = "HKTier_FA")]
    hk_tier_fa: Option<String>,
    #[serde(rename = "UPAS_Global")]
    upas_global: Option<String>,
    #[serde(rename = "UPAS_CNBuy")]
    upas_cn_buy: Option<String>,
    #[serde(rename = "UPAS_HKBuy")]
    upas_hk_buy: Option<String>,
    #[serde(rename = "UPAS_CN")]
    upas_cn: Option<String>,
    #[serde(rename = "UPAS_HK")]
    upas_hk: Option<String>,
    #[serde(rename = "UPAS_CNFA")]
    upas_cn_fa: Option<String>,
    #[serde(rename = "UPAS_CNBA")]
    upas_cn_ba: Option<String>,
    #[serde(rename = "UPAS_CNEC")]
    upas_cn_ec: Option<String>,
    #[serde(rename = "UPAS_HKFA")]
    upas_hk_fa: Option<String>,
    #[serde(rename = "UPAS_HKBA")]
    upas_hk_ba: Option<String>,
    #[serde(rename = "BuyPath")]
    buy_path: Option<String>,
    #[serde(rename = "US_MSRP")]
    us_msrp: Option<String>,
    #[serde(rename = "CN_MSRP")]
    cn_msrp: Option<String>,
    #[serde(rename = "CN_Ticket")]
    cn_ticket: Option<String>,
    #[serde(rename = "CN_StoreCost")]
    cn_store_cost: Option<String>,
    #[serde(rename = "HK_MSRP")]
    hk_msrp: Option<String>,
    #[serde(rename = "HK_Ticket")]
    hk_ticket: Option<String>,
    #[serde(rename = "HK_StoreCost")]
    hk_store_cost: Option<String>,
    #[serde(rename = "FA_Bundle")]
    fa_bundle: Option<String>,
    #[serde(rename = "BA_Bundle")]
    ba_bundle: Option<String>,
    #[serde(rename = "RegStatus")]
    reg_status: Option<String>,
    #[serde(rename = "Unblocked")]
    unblocked: Option<String>,
    #[serde(rename = "PDP")]
    pdp: Option<String>,
    #[serde(rename = "Comment")]
    comment: Option<String>,
    #[serde(rename = "DmdUnit")]
    dmd_unit: Option<String>,
    #[serde(rename = "Matchback_CN")]
    matchback_cn: Option<String>,
}

struct AppState {
    db_pool: SqlitePool,
}

#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[tauri::command]
async fn import_csv(file_path: String, state: tauri::State<'_, AppState>) -> Result<String, String> {
    let path = Path::new(&file_path);
    
    if !path.exists() {
        return Err("文件不存在".to_string());
    }

    let mut file = match File::open(path) {
        Ok(file) => file,
        Err(e) => return Err(format!("无法打开文件: {}", e)),
    };

    let mut contents = String::new();
    if let Err(e) = file.read_to_string(&mut contents) {
        return Err(format!("读取文件失败: {}", e));
    }

    let mut rdr = ReaderBuilder::new().from_reader(contents.as_bytes());
    
    let mut imported_count = 0;
    let mut error_count = 0;
    let mut errors = Vec::new();

    for (index, result) in rdr.records().enumerate() {
        match result {
            Ok(record) => {
                if let Err(e) = process_csv_record(&record, index + 1, &state.db_pool).await {
                    error_count += 1;
                    errors.push(format!("第{}行: {}", index + 1, e));
                } else {
                    imported_count += 1;
                }
            }
            Err(e) => {
                error_count += 1;
                errors.push(format!("第{}行: {}", index + 1, e));
            }
        }
    }

    let result = format!(
        "导入完成！成功: {}, 失败: {}",
        imported_count, error_count
    );

    if !errors.is_empty() {
        return Ok(format!("{}\n错误详情:\n{}", result, errors.join("\n")));
    }

    Ok(result)
}

#[derive(Debug, Serialize, Deserialize)]
struct SearchQuery {
    #[serde(rename = "Article")]
    article: Option<String>,
    #[serde(rename = "Description")]
    description: Option<String>,
    #[serde(rename = "UPC")]
    upc: Option<String>,
    #[serde(rename = "Brand")]
    brand: Option<String>,
    #[serde(rename = "Color")]
    color: Option<String>,
    #[serde(rename = "StyleID")]
    style_id: Option<String>,
    #[serde(rename = "Category")]
    category: Option<String>,
}

#[derive(Debug, Serialize, Deserialize, sqlx::FromRow)]
struct ProductResponse {
    id: i32,
    #[serde(rename = "Article")]
    article: Option<String>,
    #[serde(rename = "Description")]
    description: Option<String>,
    #[serde(rename = "UPC")]
    upc: Option<String>,
    #[serde(rename = "Brand")]
    brand: Option<String>,
    #[serde(rename = "Color")]
    color: Option<String>,
    #[serde(rename = "StyleID")]
    style_id: Option<String>,
    #[serde(rename = "Category")]
    category: Option<String>,
    #[serde(rename = "CN_MSRP")]
    cn_msrp: Option<String>,
    #[serde(rename = "HK_MSRP")]
    hk_msrp: Option<String>,
}

#[derive(Debug, Serialize, Deserialize)]
struct BartenderExportData {
    #[serde(rename = "Article")]
    article: String,
    #[serde(rename = "Description")]
    description: String,
    #[serde(rename = "UPC")]
    upc: String,
    #[serde(rename = "Brand")]
    brand: String,
    #[serde(rename = "Color")]
    color: String,
    #[serde(rename = "Size")]
    size: String,
    #[serde(rename = "Material")]
    material: String,
    #[serde(rename = "CN_MSRP")]
    cn_msrp: String,
    #[serde(rename = "HK_MSRP")]
    hk_msrp: String,
}

#[tauri::command]
async fn search_products(query: SearchQuery, state: tauri::State<'_, AppState>) -> Result<Vec<ProductResponse>, String> {
    let mut sql = "SELECT id, Article, Description, UPC, Brand, Color, StyleID, Category, CN_MSRP, HK_MSRP FROM Product WHERE 1=1".to_string();
    let mut conditions = Vec::new();
    
    if let Some(article) = &query.article {
        conditions.push(format!("Article LIKE '%{}%'", article.replace("'", "''")));
    }
    
    if let Some(description) = &query.description {
        conditions.push(format!("Description LIKE '%{}%'", description.replace("'", "''")));
    }
    
    if let Some(upc) = &query.upc {
        conditions.push(format!("UPC LIKE '%{}%'", upc.replace("'", "''")));
    }
    
    if let Some(brand) = &query.brand {
        conditions.push(format!("Brand LIKE '%{}%'", brand.replace("'", "''")));
    }
    
    if let Some(color) = &query.color {
        conditions.push(format!("Color LIKE '%{}%'", color.replace("'", "''")));
    }
    
    if let Some(style_id) = &query.style_id {
        conditions.push(format!("StyleID LIKE '%{}%'", style_id.replace("'", "''")));
    }
    
    if let Some(category) = &query.category {
        conditions.push(format!("Category LIKE '%{}%'", category.replace("'", "''")));
    }
    
    if !conditions.is_empty() {
        sql.push_str(" AND ");
        sql.push_str(&conditions.join(" AND "));
    }
    
    sql.push_str(" LIMIT 1000");
    
    let products = sqlx::query_as::<_, ProductResponse>(&sql)
        .fetch_all(&state.db_pool)
        .await
        .map_err(|e| format!("查询失败: {}", e))?;
    
    Ok(products)
}

#[tauri::command]
async fn export_bartender_csv(data: Vec<BartenderExportData>) -> Result<String, String> {
    let timestamp = chrono::Utc::now().format("%Y%m%d_%H%M%S");
    let file_name = format!("bartender_export_{}.csv", timestamp);
    let file_path = Path::new(&file_name);
    
    let file = match File::create(file_path) {
        Ok(file) => file,
        Err(e) => return Err(format!("无法创建文件: {}", e)),
    };
    
    let mut wtr = Writer::from_writer(file);
    
    // 写入CSV头
    if let Err(e) = wtr.write_record(&["Article", "Description", "UPC", "Brand", "Color", "Size", "Material", "CN_MSRP", "HK_MSRP"]) {
        return Err(format!("写入CSV头失败: {}", e));
    }
    
    // 写入数据
    for record in data {
        if let Err(e) = wtr.write_record(&[
            &record.article,
            &record.description,
            &record.upc,
            &record.brand,
            &record.color,
            &record.size,
            &record.material,
            &record.cn_msrp,
            &record.hk_msrp,
        ]) {
            return Err(format!("写入数据失败: {}", e));
        }
    }
    
    if let Err(e) = wtr.flush() {
        return Err(format!("刷新CSV文件失败: {}", e));
    }
    
    Ok(format!("Bartender CSV导出成功！文件已保存为: {}", file_name))
}

async fn process_csv_record(record: &StringRecord, line_number: usize, pool: &SqlitePool) -> Result<(), String> {
    // 解析CSV记录
    let product_data = parse_csv_record(record, line_number)?;
    
    // 插入数据库
    let query = r#"
        INSERT INTO Product (
            Article, Description, UPC, MerchID, StyleID, Style_Desc, RootStyle, Brand, Sector, Category,
            SubBrand, MP_A_SubBrand, Collection, Class, SubClass, MasterStyleID, MasterStyle_Desc, Choice_Code,
            Choice_Desc, Color, EC_Color, U_ChoiceDesc, U_Form, Size, Size_1, Size_2, Material, Case, Lifecycle,
            KeyItem, GS_Contents, FST_GLB, FST_CN, FST_HK, FST_Alt, Set_CN, Set_GLB, Set_HK, Push_CN, Push_HK,
            MKD_GLB, MKD_CN, MKD_HK, SAS_GLB, SAS_CN, SAS_HK, CNTier_LM, CNTier_TR, CNTier_FA, CNTier_OT,
            CNTier_EC, HKTier_BA, HKTier_FA, UPAS_Global, UPAS_CNBuy, UPAS_HKBuy, UPAS_CN, UPAS_HK, UPAS_CNFA,
            UPAS_CNBA, UPAS_CNEC, UPAS_HKFA, UPAS_HKBA, BuyPath, US_MSRP, CN_MSRP, CN_Ticket, CN_StoreCost,
            HK_MSRP, HK_Ticket, HK_StoreCost, FA_Bundle, BA_Bundle, RegStatus, Unblocked, PDP, Comment, DmdUnit,
            Matchback_CN
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    "#;
    
    sqlx::query(query)
        .bind(&product_data.article)
        .bind(&product_data.description)
        .bind(&product_data.upc)
        .bind(&product_data.merch_id)
        .bind(&product_data.style_id)
        .bind(&product_data.style_desc)
        .bind(&product_data.root_style)
        .bind(&product_data.brand)
        .bind(&product_data.sector)
        .bind(&product_data.category)
        .bind(&product_data.sub_brand)
        .bind(&product_data.mp_a_sub_brand)
        .bind(&product_data.collection)
        .bind(&product_data.class)
        .bind(&product_data.sub_class)
        .bind(&product_data.master_style_id)
        .bind(&product_data.master_style_desc)
        .bind(&product_data.choice_code)
        .bind(&product_data.choice_desc)
        .bind(&product_data.color)
        .bind(&product_data.ec_color)
        .bind(&product_data.u_choice_desc)
        .bind(&product_data.u_form)
        .bind(&product_data.size)
        .bind(&product_data.size_1)
        .bind(&product_data.size_2)
        .bind(&product_data.material)
        .bind(&product_data.case)
        .bind(&product_data.lifecycle)
        .bind(&product_data.key_item)
        .bind(&product_data.gs_contents)
        .bind(&product_data.fst_glb)
        .bind(&product_data.fst_cn)
        .bind(&product_data.fst_hk)
        .bind(&product_data.fst_alt)
        .bind(&product_data.set_cn)
        .bind(&product_data.set_glb)
        .bind(&product_data.set_hk)
        .bind(&product_data.push_cn)
        .bind(&product_data.push_hk)
        .bind(&product_data.mkd_glb)
        .bind(&product_data.mkd_cn)
        .bind(&product_data.mkd_hk)
        .bind(&product_data.sas_glb)
        .bind(&product_data.sas_cn)
        .bind(&product_data.sas_hk)
        .bind(&product_data.cn_tier_lm)
        .bind(&product_data.cn_tier_tr)
        .bind(&product_data.cn_tier_fa)
        .bind(&product_data.cn_tier_ot)
        .bind(&product_data.cn_tier_ec)
        .bind(&product_data.hk_tier_ba)
        .bind(&product_data.hk_tier_fa)
        .bind(&product_data.upas_global)
        .bind(&product_data.upas_cn_buy)
        .bind(&product_data.upas_hk_buy)
        .bind(&product_data.upas_cn)
        .bind(&product_data.upas_hk)
        .bind(&product_data.upas_cn_fa)
        .bind(&product_data.upas_cn_ba)
        .bind(&product_data.upas_cn_ec)
        .bind(&product_data.upas_hk_fa)
        .bind(&product_data.upas_hk_ba)
        .bind(&product_data.buy_path)
        .bind(&product_data.us_msrp)
        .bind(&product_data.cn_msrp)
        .bind(&product_data.cn_ticket)
        .bind(&product_data.cn_store_cost)
        .bind(&product_data.hk_msrp)
        .bind(&product_data.hk_ticket)
        .bind(&product_data.hk_store_cost)
        .bind(&product_data.fa_bundle)
        .bind(&product_data.ba_bundle)
        .bind(&product_data.reg_status)
        .bind(&product_data.unblocked)
        .bind(&product_data.pdp)
        .bind(&product_data.comment)
        .bind(&product_data.dmd_unit)
        .bind(&product_data.matchback_cn)
        .execute(pool)
        .await
        .map_err(|e| format!("数据库插入失败: {}", e))?;
    
    Ok(())
}

fn parse_csv_record(record: &StringRecord, _line_number: usize) -> Result<ProductData, String> {
    let get_field = |index: usize, _field_name: &str| -> Result<Option<String>, String> {
        if index < record.len() {
            let value = record.get(index).unwrap_or("");
            Ok(if value.is_empty() { None } else { Some(value.to_string()) })
        } else {
            Ok(None)
        }
    };
    
    Ok(ProductData {
        article: get_field(0, "Article")?,
        description: get_field(1, "Description")?,
        upc: get_field(2, "UPC")?,
        merch_id: get_field(3, "MerchID")?,
        style_id: get_field(4, "StyleID")?,
        style_desc: get_field(5, "Style_Desc")?,
        root_style: get_field(6, "RootStyle")?,
        brand: get_field(7, "Brand")?,
        sector: get_field(8, "Sector")?,
        category: get_field(9, "Category")?,
        sub_brand: get_field(10, "SubBrand")?,
        mp_a_sub_brand: get_field(11, "MP_A_SubBrand")?,
        collection: get_field(12, "Collection")?,
        class: get_field(13, "Class")?,
        sub_class: get_field(14, "SubClass")?,
        master_style_id: get_field(15, "MasterStyleID")?,
        master_style_desc: get_field(16, "MasterStyle_Desc")?,
        choice_code: get_field(17, "Choice_Code")?,
        choice_desc: get_field(18, "Choice_Desc")?,
        color: get_field(19, "Color")?,
        ec_color: get_field(20, "EC_Color")?,
        u_choice_desc: get_field(21, "U_ChoiceDesc")?,
        u_form: get_field(22, "U_Form")?,
        size: get_field(23, "Size")?,
        size_1: get_field(24, "Size_1")?,
        size_2: get_field(25, "Size_2")?,
        material: get_field(26, "Material")?,
        case: get_field(27, "Case")?,
        lifecycle: get_field(28, "Lifecycle")?,
        key_item: get_field(29, "KeyItem")?,
        gs_contents: get_field(30, "GS_Contents")?,
        fst_glb: get_field(31, "FST_GLB")?,
        fst_cn: get_field(32, "FST_CN")?,
        fst_hk: get_field(33, "FST_HK")?,
        fst_alt: get_field(34, "FST_Alt")?,
        set_cn: get_field(35, "Set_CN")?,
        set_glb: get_field(36, "Set_GLB")?,
        set_hk: get_field(37, "Set_HK")?,
        push_cn: get_field(38, "Push_CN")?,
        push_hk: get_field(39, "Push_HK")?,
        mkd_glb: get_field(40, "MKD_GLB")?,
        mkd_cn: get_field(41, "MKD_CN")?,
        mkd_hk: get_field(42, "MKD_HK")?,
        sas_glb: get_field(43, "SAS_GLB")?,
        sas_cn: get_field(44, "SAS_CN")?,
        sas_hk: get_field(45, "SAS_HK")?,
        cn_tier_lm: get_field(46, "CNTier_LM")?,
        cn_tier_tr: get_field(47, "CNTier_TR")?,
        cn_tier_fa: get_field(48, "CNTier_FA")?,
        cn_tier_ot: get_field(49, "CNTier_OT")?,
        cn_tier_ec: get_field(50, "CNTier_EC")?,
        hk_tier_ba: get_field(51, "HKTier_BA")?,
        hk_tier_fa: get_field(52, "HKTier_FA")?,
        upas_global: get_field(53, "UPAS_Global")?,
        upas_cn_buy: get_field(54, "UPAS_CNBuy")?,
        upas_hk_buy: get_field(55, "UPAS_HKBuy")?,
        upas_cn: get_field(56, "UPAS_CN")?,
        upas_hk: get_field(57, "UPAS_HK")?,
        upas_cn_fa: get_field(58, "UPAS_CNFA")?,
        upas_cn_ba: get_field(59, "UPAS_CNBA")?,
        upas_cn_ec: get_field(60, "UPAS_CNEC")?,
        upas_hk_fa: get_field(61, "UPAS_HKFA")?,
        upas_hk_ba: get_field(62, "UPAS_HKBA")?,
        buy_path: get_field(63, "BuyPath")?,
        us_msrp: get_field(64, "US_MSRP")?,
        cn_msrp: get_field(65, "CN_MSRP")?,
        cn_ticket: get_field(66, "CN_Ticket")?,
        cn_store_cost: get_field(67, "CN_StoreCost")?,
        hk_msrp: get_field(68, "HK_MSRP")?,
        hk_ticket: get_field(69, "HK_Ticket")?,
        hk_store_cost: get_field(70, "HK_StoreCost")?,
        fa_bundle: get_field(71, "FA_Bundle")?,
        ba_bundle: get_field(72, "BA_Bundle")?,
        reg_status: get_field(73, "RegStatus")?,
        unblocked: get_field(74, "Unblocked")?,
        pdp: get_field(75, "PDP")?,
        comment: get_field(76, "Comment")?,
        dmd_unit: get_field(77, "DmdUnit")?,
        matchback_cn: get_field(78, "Matchback_CN")?,
    })
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub async fn run() {
    // 初始化数据库连接池
    let db_pool = match SqlitePool::connect("sqlite:../prisma/dev.db").await {
        Ok(pool) => {
            println!("数据库连接成功");
            pool
        }
        Err(e) => {
            eprintln!("数据库连接失败: {}", e);
            return;
        }
    };
    
    let app_state = AppState { db_pool };
    
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .plugin(tauri_plugin_dialog::init())
        .plugin(tauri_plugin_fs::init())
        .manage(app_state)
        .invoke_handler(tauri::generate_handler![greet, import_csv, search_products, export_bartender_csv])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
