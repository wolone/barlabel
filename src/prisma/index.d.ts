
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Products
 * const products = await prisma.product.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Products
   * const products = await prisma.product.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.15.0
   * Query Engine version: 85179d7826409ee107a6ba334b5e305ae3fba9fb
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Product: 'Product'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "product"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    product?: ProductOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    id: number | null
  }

  export type ProductSumAggregateOutputType = {
    id: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: number | null
    Article: string | null
    Description: string | null
    UPC: string | null
    MerchID: string | null
    StyleID: string | null
    Style_Desc: string | null
    RootStyle: string | null
    Brand: string | null
    Sector: string | null
    Category: string | null
    SubBrand: string | null
    MP_A_SubBrand: string | null
    Collection: string | null
    Class: string | null
    SubClass: string | null
    MasterStyleID: string | null
    MasterStyle_Desc: string | null
    Choice_Code: string | null
    Choice_Desc: string | null
    Color: string | null
    EC_Color: string | null
    U_ChoiceDesc: string | null
    U_Form: string | null
    Size: string | null
    Size_1: string | null
    Size_2: string | null
    Material: string | null
    Case: string | null
    Lifecycle: string | null
    KeyItem: string | null
    GS_Contents: string | null
    FST_GLB: string | null
    FST_CN: string | null
    FST_HK: string | null
    FST_Alt: string | null
    Set_CN: string | null
    Set_GLB: string | null
    Set_HK: string | null
    Push_CN: string | null
    Push_HK: string | null
    MKD_GLB: string | null
    MKD_CN: string | null
    MKD_HK: string | null
    SAS_GLB: string | null
    SAS_CN: string | null
    SAS_HK: string | null
    CNTier_LM: string | null
    CNTier_TR: string | null
    CNTier_FA: string | null
    CNTier_OT: string | null
    CNTier_EC: string | null
    HKTier_BA: string | null
    HKTier_FA: string | null
    UPAS_Global: string | null
    UPAS_CNBuy: string | null
    UPAS_HKBuy: string | null
    UPAS_CN: string | null
    UPAS_HK: string | null
    UPAS_CNFA: string | null
    UPAS_CNBA: string | null
    UPAS_CNEC: string | null
    UPAS_HKFA: string | null
    UPAS_HKBA: string | null
    BuyPath: string | null
    US_MSRP: string | null
    CN_MSRP: string | null
    CN_Ticket: string | null
    CN_StoreCost: string | null
    HK_MSRP: string | null
    HK_Ticket: string | null
    HK_StoreCost: string | null
    FA_Bundle: string | null
    BA_Bundle: string | null
    RegStatus: string | null
    Unblocked: string | null
    PDP: string | null
    Comment: string | null
    DmdUnit: string | null
    Matchback_CN: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: number | null
    Article: string | null
    Description: string | null
    UPC: string | null
    MerchID: string | null
    StyleID: string | null
    Style_Desc: string | null
    RootStyle: string | null
    Brand: string | null
    Sector: string | null
    Category: string | null
    SubBrand: string | null
    MP_A_SubBrand: string | null
    Collection: string | null
    Class: string | null
    SubClass: string | null
    MasterStyleID: string | null
    MasterStyle_Desc: string | null
    Choice_Code: string | null
    Choice_Desc: string | null
    Color: string | null
    EC_Color: string | null
    U_ChoiceDesc: string | null
    U_Form: string | null
    Size: string | null
    Size_1: string | null
    Size_2: string | null
    Material: string | null
    Case: string | null
    Lifecycle: string | null
    KeyItem: string | null
    GS_Contents: string | null
    FST_GLB: string | null
    FST_CN: string | null
    FST_HK: string | null
    FST_Alt: string | null
    Set_CN: string | null
    Set_GLB: string | null
    Set_HK: string | null
    Push_CN: string | null
    Push_HK: string | null
    MKD_GLB: string | null
    MKD_CN: string | null
    MKD_HK: string | null
    SAS_GLB: string | null
    SAS_CN: string | null
    SAS_HK: string | null
    CNTier_LM: string | null
    CNTier_TR: string | null
    CNTier_FA: string | null
    CNTier_OT: string | null
    CNTier_EC: string | null
    HKTier_BA: string | null
    HKTier_FA: string | null
    UPAS_Global: string | null
    UPAS_CNBuy: string | null
    UPAS_HKBuy: string | null
    UPAS_CN: string | null
    UPAS_HK: string | null
    UPAS_CNFA: string | null
    UPAS_CNBA: string | null
    UPAS_CNEC: string | null
    UPAS_HKFA: string | null
    UPAS_HKBA: string | null
    BuyPath: string | null
    US_MSRP: string | null
    CN_MSRP: string | null
    CN_Ticket: string | null
    CN_StoreCost: string | null
    HK_MSRP: string | null
    HK_Ticket: string | null
    HK_StoreCost: string | null
    FA_Bundle: string | null
    BA_Bundle: string | null
    RegStatus: string | null
    Unblocked: string | null
    PDP: string | null
    Comment: string | null
    DmdUnit: string | null
    Matchback_CN: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    Article: number
    Description: number
    UPC: number
    MerchID: number
    StyleID: number
    Style_Desc: number
    RootStyle: number
    Brand: number
    Sector: number
    Category: number
    SubBrand: number
    MP_A_SubBrand: number
    Collection: number
    Class: number
    SubClass: number
    MasterStyleID: number
    MasterStyle_Desc: number
    Choice_Code: number
    Choice_Desc: number
    Color: number
    EC_Color: number
    U_ChoiceDesc: number
    U_Form: number
    Size: number
    Size_1: number
    Size_2: number
    Material: number
    Case: number
    Lifecycle: number
    KeyItem: number
    GS_Contents: number
    FST_GLB: number
    FST_CN: number
    FST_HK: number
    FST_Alt: number
    Set_CN: number
    Set_GLB: number
    Set_HK: number
    Push_CN: number
    Push_HK: number
    MKD_GLB: number
    MKD_CN: number
    MKD_HK: number
    SAS_GLB: number
    SAS_CN: number
    SAS_HK: number
    CNTier_LM: number
    CNTier_TR: number
    CNTier_FA: number
    CNTier_OT: number
    CNTier_EC: number
    HKTier_BA: number
    HKTier_FA: number
    UPAS_Global: number
    UPAS_CNBuy: number
    UPAS_HKBuy: number
    UPAS_CN: number
    UPAS_HK: number
    UPAS_CNFA: number
    UPAS_CNBA: number
    UPAS_CNEC: number
    UPAS_HKFA: number
    UPAS_HKBA: number
    BuyPath: number
    US_MSRP: number
    CN_MSRP: number
    CN_Ticket: number
    CN_StoreCost: number
    HK_MSRP: number
    HK_Ticket: number
    HK_StoreCost: number
    FA_Bundle: number
    BA_Bundle: number
    RegStatus: number
    Unblocked: number
    PDP: number
    Comment: number
    DmdUnit: number
    Matchback_CN: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    id?: true
  }

  export type ProductSumAggregateInputType = {
    id?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    Article?: true
    Description?: true
    UPC?: true
    MerchID?: true
    StyleID?: true
    Style_Desc?: true
    RootStyle?: true
    Brand?: true
    Sector?: true
    Category?: true
    SubBrand?: true
    MP_A_SubBrand?: true
    Collection?: true
    Class?: true
    SubClass?: true
    MasterStyleID?: true
    MasterStyle_Desc?: true
    Choice_Code?: true
    Choice_Desc?: true
    Color?: true
    EC_Color?: true
    U_ChoiceDesc?: true
    U_Form?: true
    Size?: true
    Size_1?: true
    Size_2?: true
    Material?: true
    Case?: true
    Lifecycle?: true
    KeyItem?: true
    GS_Contents?: true
    FST_GLB?: true
    FST_CN?: true
    FST_HK?: true
    FST_Alt?: true
    Set_CN?: true
    Set_GLB?: true
    Set_HK?: true
    Push_CN?: true
    Push_HK?: true
    MKD_GLB?: true
    MKD_CN?: true
    MKD_HK?: true
    SAS_GLB?: true
    SAS_CN?: true
    SAS_HK?: true
    CNTier_LM?: true
    CNTier_TR?: true
    CNTier_FA?: true
    CNTier_OT?: true
    CNTier_EC?: true
    HKTier_BA?: true
    HKTier_FA?: true
    UPAS_Global?: true
    UPAS_CNBuy?: true
    UPAS_HKBuy?: true
    UPAS_CN?: true
    UPAS_HK?: true
    UPAS_CNFA?: true
    UPAS_CNBA?: true
    UPAS_CNEC?: true
    UPAS_HKFA?: true
    UPAS_HKBA?: true
    BuyPath?: true
    US_MSRP?: true
    CN_MSRP?: true
    CN_Ticket?: true
    CN_StoreCost?: true
    HK_MSRP?: true
    HK_Ticket?: true
    HK_StoreCost?: true
    FA_Bundle?: true
    BA_Bundle?: true
    RegStatus?: true
    Unblocked?: true
    PDP?: true
    Comment?: true
    DmdUnit?: true
    Matchback_CN?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    Article?: true
    Description?: true
    UPC?: true
    MerchID?: true
    StyleID?: true
    Style_Desc?: true
    RootStyle?: true
    Brand?: true
    Sector?: true
    Category?: true
    SubBrand?: true
    MP_A_SubBrand?: true
    Collection?: true
    Class?: true
    SubClass?: true
    MasterStyleID?: true
    MasterStyle_Desc?: true
    Choice_Code?: true
    Choice_Desc?: true
    Color?: true
    EC_Color?: true
    U_ChoiceDesc?: true
    U_Form?: true
    Size?: true
    Size_1?: true
    Size_2?: true
    Material?: true
    Case?: true
    Lifecycle?: true
    KeyItem?: true
    GS_Contents?: true
    FST_GLB?: true
    FST_CN?: true
    FST_HK?: true
    FST_Alt?: true
    Set_CN?: true
    Set_GLB?: true
    Set_HK?: true
    Push_CN?: true
    Push_HK?: true
    MKD_GLB?: true
    MKD_CN?: true
    MKD_HK?: true
    SAS_GLB?: true
    SAS_CN?: true
    SAS_HK?: true
    CNTier_LM?: true
    CNTier_TR?: true
    CNTier_FA?: true
    CNTier_OT?: true
    CNTier_EC?: true
    HKTier_BA?: true
    HKTier_FA?: true
    UPAS_Global?: true
    UPAS_CNBuy?: true
    UPAS_HKBuy?: true
    UPAS_CN?: true
    UPAS_HK?: true
    UPAS_CNFA?: true
    UPAS_CNBA?: true
    UPAS_CNEC?: true
    UPAS_HKFA?: true
    UPAS_HKBA?: true
    BuyPath?: true
    US_MSRP?: true
    CN_MSRP?: true
    CN_Ticket?: true
    CN_StoreCost?: true
    HK_MSRP?: true
    HK_Ticket?: true
    HK_StoreCost?: true
    FA_Bundle?: true
    BA_Bundle?: true
    RegStatus?: true
    Unblocked?: true
    PDP?: true
    Comment?: true
    DmdUnit?: true
    Matchback_CN?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    Article?: true
    Description?: true
    UPC?: true
    MerchID?: true
    StyleID?: true
    Style_Desc?: true
    RootStyle?: true
    Brand?: true
    Sector?: true
    Category?: true
    SubBrand?: true
    MP_A_SubBrand?: true
    Collection?: true
    Class?: true
    SubClass?: true
    MasterStyleID?: true
    MasterStyle_Desc?: true
    Choice_Code?: true
    Choice_Desc?: true
    Color?: true
    EC_Color?: true
    U_ChoiceDesc?: true
    U_Form?: true
    Size?: true
    Size_1?: true
    Size_2?: true
    Material?: true
    Case?: true
    Lifecycle?: true
    KeyItem?: true
    GS_Contents?: true
    FST_GLB?: true
    FST_CN?: true
    FST_HK?: true
    FST_Alt?: true
    Set_CN?: true
    Set_GLB?: true
    Set_HK?: true
    Push_CN?: true
    Push_HK?: true
    MKD_GLB?: true
    MKD_CN?: true
    MKD_HK?: true
    SAS_GLB?: true
    SAS_CN?: true
    SAS_HK?: true
    CNTier_LM?: true
    CNTier_TR?: true
    CNTier_FA?: true
    CNTier_OT?: true
    CNTier_EC?: true
    HKTier_BA?: true
    HKTier_FA?: true
    UPAS_Global?: true
    UPAS_CNBuy?: true
    UPAS_HKBuy?: true
    UPAS_CN?: true
    UPAS_HK?: true
    UPAS_CNFA?: true
    UPAS_CNBA?: true
    UPAS_CNEC?: true
    UPAS_HKFA?: true
    UPAS_HKBA?: true
    BuyPath?: true
    US_MSRP?: true
    CN_MSRP?: true
    CN_Ticket?: true
    CN_StoreCost?: true
    HK_MSRP?: true
    HK_Ticket?: true
    HK_StoreCost?: true
    FA_Bundle?: true
    BA_Bundle?: true
    RegStatus?: true
    Unblocked?: true
    PDP?: true
    Comment?: true
    DmdUnit?: true
    Matchback_CN?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: number
    Article: string | null
    Description: string | null
    UPC: string | null
    MerchID: string | null
    StyleID: string | null
    Style_Desc: string | null
    RootStyle: string | null
    Brand: string | null
    Sector: string | null
    Category: string | null
    SubBrand: string | null
    MP_A_SubBrand: string | null
    Collection: string | null
    Class: string | null
    SubClass: string | null
    MasterStyleID: string | null
    MasterStyle_Desc: string | null
    Choice_Code: string | null
    Choice_Desc: string | null
    Color: string | null
    EC_Color: string | null
    U_ChoiceDesc: string | null
    U_Form: string | null
    Size: string | null
    Size_1: string | null
    Size_2: string | null
    Material: string | null
    Case: string | null
    Lifecycle: string | null
    KeyItem: string | null
    GS_Contents: string | null
    FST_GLB: string | null
    FST_CN: string | null
    FST_HK: string | null
    FST_Alt: string | null
    Set_CN: string | null
    Set_GLB: string | null
    Set_HK: string | null
    Push_CN: string | null
    Push_HK: string | null
    MKD_GLB: string | null
    MKD_CN: string | null
    MKD_HK: string | null
    SAS_GLB: string | null
    SAS_CN: string | null
    SAS_HK: string | null
    CNTier_LM: string | null
    CNTier_TR: string | null
    CNTier_FA: string | null
    CNTier_OT: string | null
    CNTier_EC: string | null
    HKTier_BA: string | null
    HKTier_FA: string | null
    UPAS_Global: string | null
    UPAS_CNBuy: string | null
    UPAS_HKBuy: string | null
    UPAS_CN: string | null
    UPAS_HK: string | null
    UPAS_CNFA: string | null
    UPAS_CNBA: string | null
    UPAS_CNEC: string | null
    UPAS_HKFA: string | null
    UPAS_HKBA: string | null
    BuyPath: string | null
    US_MSRP: string | null
    CN_MSRP: string | null
    CN_Ticket: string | null
    CN_StoreCost: string | null
    HK_MSRP: string | null
    HK_Ticket: string | null
    HK_StoreCost: string | null
    FA_Bundle: string | null
    BA_Bundle: string | null
    RegStatus: string | null
    Unblocked: string | null
    PDP: string | null
    Comment: string | null
    DmdUnit: string | null
    Matchback_CN: string | null
    createdAt: Date
    updatedAt: Date
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Article?: boolean
    Description?: boolean
    UPC?: boolean
    MerchID?: boolean
    StyleID?: boolean
    Style_Desc?: boolean
    RootStyle?: boolean
    Brand?: boolean
    Sector?: boolean
    Category?: boolean
    SubBrand?: boolean
    MP_A_SubBrand?: boolean
    Collection?: boolean
    Class?: boolean
    SubClass?: boolean
    MasterStyleID?: boolean
    MasterStyle_Desc?: boolean
    Choice_Code?: boolean
    Choice_Desc?: boolean
    Color?: boolean
    EC_Color?: boolean
    U_ChoiceDesc?: boolean
    U_Form?: boolean
    Size?: boolean
    Size_1?: boolean
    Size_2?: boolean
    Material?: boolean
    Case?: boolean
    Lifecycle?: boolean
    KeyItem?: boolean
    GS_Contents?: boolean
    FST_GLB?: boolean
    FST_CN?: boolean
    FST_HK?: boolean
    FST_Alt?: boolean
    Set_CN?: boolean
    Set_GLB?: boolean
    Set_HK?: boolean
    Push_CN?: boolean
    Push_HK?: boolean
    MKD_GLB?: boolean
    MKD_CN?: boolean
    MKD_HK?: boolean
    SAS_GLB?: boolean
    SAS_CN?: boolean
    SAS_HK?: boolean
    CNTier_LM?: boolean
    CNTier_TR?: boolean
    CNTier_FA?: boolean
    CNTier_OT?: boolean
    CNTier_EC?: boolean
    HKTier_BA?: boolean
    HKTier_FA?: boolean
    UPAS_Global?: boolean
    UPAS_CNBuy?: boolean
    UPAS_HKBuy?: boolean
    UPAS_CN?: boolean
    UPAS_HK?: boolean
    UPAS_CNFA?: boolean
    UPAS_CNBA?: boolean
    UPAS_CNEC?: boolean
    UPAS_HKFA?: boolean
    UPAS_HKBA?: boolean
    BuyPath?: boolean
    US_MSRP?: boolean
    CN_MSRP?: boolean
    CN_Ticket?: boolean
    CN_StoreCost?: boolean
    HK_MSRP?: boolean
    HK_Ticket?: boolean
    HK_StoreCost?: boolean
    FA_Bundle?: boolean
    BA_Bundle?: boolean
    RegStatus?: boolean
    Unblocked?: boolean
    PDP?: boolean
    Comment?: boolean
    DmdUnit?: boolean
    Matchback_CN?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Article?: boolean
    Description?: boolean
    UPC?: boolean
    MerchID?: boolean
    StyleID?: boolean
    Style_Desc?: boolean
    RootStyle?: boolean
    Brand?: boolean
    Sector?: boolean
    Category?: boolean
    SubBrand?: boolean
    MP_A_SubBrand?: boolean
    Collection?: boolean
    Class?: boolean
    SubClass?: boolean
    MasterStyleID?: boolean
    MasterStyle_Desc?: boolean
    Choice_Code?: boolean
    Choice_Desc?: boolean
    Color?: boolean
    EC_Color?: boolean
    U_ChoiceDesc?: boolean
    U_Form?: boolean
    Size?: boolean
    Size_1?: boolean
    Size_2?: boolean
    Material?: boolean
    Case?: boolean
    Lifecycle?: boolean
    KeyItem?: boolean
    GS_Contents?: boolean
    FST_GLB?: boolean
    FST_CN?: boolean
    FST_HK?: boolean
    FST_Alt?: boolean
    Set_CN?: boolean
    Set_GLB?: boolean
    Set_HK?: boolean
    Push_CN?: boolean
    Push_HK?: boolean
    MKD_GLB?: boolean
    MKD_CN?: boolean
    MKD_HK?: boolean
    SAS_GLB?: boolean
    SAS_CN?: boolean
    SAS_HK?: boolean
    CNTier_LM?: boolean
    CNTier_TR?: boolean
    CNTier_FA?: boolean
    CNTier_OT?: boolean
    CNTier_EC?: boolean
    HKTier_BA?: boolean
    HKTier_FA?: boolean
    UPAS_Global?: boolean
    UPAS_CNBuy?: boolean
    UPAS_HKBuy?: boolean
    UPAS_CN?: boolean
    UPAS_HK?: boolean
    UPAS_CNFA?: boolean
    UPAS_CNBA?: boolean
    UPAS_CNEC?: boolean
    UPAS_HKFA?: boolean
    UPAS_HKBA?: boolean
    BuyPath?: boolean
    US_MSRP?: boolean
    CN_MSRP?: boolean
    CN_Ticket?: boolean
    CN_StoreCost?: boolean
    HK_MSRP?: boolean
    HK_Ticket?: boolean
    HK_StoreCost?: boolean
    FA_Bundle?: boolean
    BA_Bundle?: boolean
    RegStatus?: boolean
    Unblocked?: boolean
    PDP?: boolean
    Comment?: boolean
    DmdUnit?: boolean
    Matchback_CN?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Article?: boolean
    Description?: boolean
    UPC?: boolean
    MerchID?: boolean
    StyleID?: boolean
    Style_Desc?: boolean
    RootStyle?: boolean
    Brand?: boolean
    Sector?: boolean
    Category?: boolean
    SubBrand?: boolean
    MP_A_SubBrand?: boolean
    Collection?: boolean
    Class?: boolean
    SubClass?: boolean
    MasterStyleID?: boolean
    MasterStyle_Desc?: boolean
    Choice_Code?: boolean
    Choice_Desc?: boolean
    Color?: boolean
    EC_Color?: boolean
    U_ChoiceDesc?: boolean
    U_Form?: boolean
    Size?: boolean
    Size_1?: boolean
    Size_2?: boolean
    Material?: boolean
    Case?: boolean
    Lifecycle?: boolean
    KeyItem?: boolean
    GS_Contents?: boolean
    FST_GLB?: boolean
    FST_CN?: boolean
    FST_HK?: boolean
    FST_Alt?: boolean
    Set_CN?: boolean
    Set_GLB?: boolean
    Set_HK?: boolean
    Push_CN?: boolean
    Push_HK?: boolean
    MKD_GLB?: boolean
    MKD_CN?: boolean
    MKD_HK?: boolean
    SAS_GLB?: boolean
    SAS_CN?: boolean
    SAS_HK?: boolean
    CNTier_LM?: boolean
    CNTier_TR?: boolean
    CNTier_FA?: boolean
    CNTier_OT?: boolean
    CNTier_EC?: boolean
    HKTier_BA?: boolean
    HKTier_FA?: boolean
    UPAS_Global?: boolean
    UPAS_CNBuy?: boolean
    UPAS_HKBuy?: boolean
    UPAS_CN?: boolean
    UPAS_HK?: boolean
    UPAS_CNFA?: boolean
    UPAS_CNBA?: boolean
    UPAS_CNEC?: boolean
    UPAS_HKFA?: boolean
    UPAS_HKBA?: boolean
    BuyPath?: boolean
    US_MSRP?: boolean
    CN_MSRP?: boolean
    CN_Ticket?: boolean
    CN_StoreCost?: boolean
    HK_MSRP?: boolean
    HK_Ticket?: boolean
    HK_StoreCost?: boolean
    FA_Bundle?: boolean
    BA_Bundle?: boolean
    RegStatus?: boolean
    Unblocked?: boolean
    PDP?: boolean
    Comment?: boolean
    DmdUnit?: boolean
    Matchback_CN?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    Article?: boolean
    Description?: boolean
    UPC?: boolean
    MerchID?: boolean
    StyleID?: boolean
    Style_Desc?: boolean
    RootStyle?: boolean
    Brand?: boolean
    Sector?: boolean
    Category?: boolean
    SubBrand?: boolean
    MP_A_SubBrand?: boolean
    Collection?: boolean
    Class?: boolean
    SubClass?: boolean
    MasterStyleID?: boolean
    MasterStyle_Desc?: boolean
    Choice_Code?: boolean
    Choice_Desc?: boolean
    Color?: boolean
    EC_Color?: boolean
    U_ChoiceDesc?: boolean
    U_Form?: boolean
    Size?: boolean
    Size_1?: boolean
    Size_2?: boolean
    Material?: boolean
    Case?: boolean
    Lifecycle?: boolean
    KeyItem?: boolean
    GS_Contents?: boolean
    FST_GLB?: boolean
    FST_CN?: boolean
    FST_HK?: boolean
    FST_Alt?: boolean
    Set_CN?: boolean
    Set_GLB?: boolean
    Set_HK?: boolean
    Push_CN?: boolean
    Push_HK?: boolean
    MKD_GLB?: boolean
    MKD_CN?: boolean
    MKD_HK?: boolean
    SAS_GLB?: boolean
    SAS_CN?: boolean
    SAS_HK?: boolean
    CNTier_LM?: boolean
    CNTier_TR?: boolean
    CNTier_FA?: boolean
    CNTier_OT?: boolean
    CNTier_EC?: boolean
    HKTier_BA?: boolean
    HKTier_FA?: boolean
    UPAS_Global?: boolean
    UPAS_CNBuy?: boolean
    UPAS_HKBuy?: boolean
    UPAS_CN?: boolean
    UPAS_HK?: boolean
    UPAS_CNFA?: boolean
    UPAS_CNBA?: boolean
    UPAS_CNEC?: boolean
    UPAS_HKFA?: boolean
    UPAS_HKBA?: boolean
    BuyPath?: boolean
    US_MSRP?: boolean
    CN_MSRP?: boolean
    CN_Ticket?: boolean
    CN_StoreCost?: boolean
    HK_MSRP?: boolean
    HK_Ticket?: boolean
    HK_StoreCost?: boolean
    FA_Bundle?: boolean
    BA_Bundle?: boolean
    RegStatus?: boolean
    Unblocked?: boolean
    PDP?: boolean
    Comment?: boolean
    DmdUnit?: boolean
    Matchback_CN?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "Article" | "Description" | "UPC" | "MerchID" | "StyleID" | "Style_Desc" | "RootStyle" | "Brand" | "Sector" | "Category" | "SubBrand" | "MP_A_SubBrand" | "Collection" | "Class" | "SubClass" | "MasterStyleID" | "MasterStyle_Desc" | "Choice_Code" | "Choice_Desc" | "Color" | "EC_Color" | "U_ChoiceDesc" | "U_Form" | "Size" | "Size_1" | "Size_2" | "Material" | "Case" | "Lifecycle" | "KeyItem" | "GS_Contents" | "FST_GLB" | "FST_CN" | "FST_HK" | "FST_Alt" | "Set_CN" | "Set_GLB" | "Set_HK" | "Push_CN" | "Push_HK" | "MKD_GLB" | "MKD_CN" | "MKD_HK" | "SAS_GLB" | "SAS_CN" | "SAS_HK" | "CNTier_LM" | "CNTier_TR" | "CNTier_FA" | "CNTier_OT" | "CNTier_EC" | "HKTier_BA" | "HKTier_FA" | "UPAS_Global" | "UPAS_CNBuy" | "UPAS_HKBuy" | "UPAS_CN" | "UPAS_HK" | "UPAS_CNFA" | "UPAS_CNBA" | "UPAS_CNEC" | "UPAS_HKFA" | "UPAS_HKBA" | "BuyPath" | "US_MSRP" | "CN_MSRP" | "CN_Ticket" | "CN_StoreCost" | "HK_MSRP" | "HK_Ticket" | "HK_StoreCost" | "FA_Bundle" | "BA_Bundle" | "RegStatus" | "Unblocked" | "PDP" | "Comment" | "DmdUnit" | "Matchback_CN" | "createdAt" | "updatedAt", ExtArgs["result"]["product"]>

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      Article: string | null
      Description: string | null
      UPC: string | null
      MerchID: string | null
      StyleID: string | null
      Style_Desc: string | null
      RootStyle: string | null
      Brand: string | null
      Sector: string | null
      Category: string | null
      SubBrand: string | null
      MP_A_SubBrand: string | null
      Collection: string | null
      Class: string | null
      SubClass: string | null
      MasterStyleID: string | null
      MasterStyle_Desc: string | null
      Choice_Code: string | null
      Choice_Desc: string | null
      Color: string | null
      EC_Color: string | null
      U_ChoiceDesc: string | null
      U_Form: string | null
      Size: string | null
      Size_1: string | null
      Size_2: string | null
      Material: string | null
      Case: string | null
      Lifecycle: string | null
      KeyItem: string | null
      GS_Contents: string | null
      FST_GLB: string | null
      FST_CN: string | null
      FST_HK: string | null
      FST_Alt: string | null
      Set_CN: string | null
      Set_GLB: string | null
      Set_HK: string | null
      Push_CN: string | null
      Push_HK: string | null
      MKD_GLB: string | null
      MKD_CN: string | null
      MKD_HK: string | null
      SAS_GLB: string | null
      SAS_CN: string | null
      SAS_HK: string | null
      CNTier_LM: string | null
      CNTier_TR: string | null
      CNTier_FA: string | null
      CNTier_OT: string | null
      CNTier_EC: string | null
      HKTier_BA: string | null
      HKTier_FA: string | null
      UPAS_Global: string | null
      UPAS_CNBuy: string | null
      UPAS_HKBuy: string | null
      UPAS_CN: string | null
      UPAS_HK: string | null
      UPAS_CNFA: string | null
      UPAS_CNBA: string | null
      UPAS_CNEC: string | null
      UPAS_HKFA: string | null
      UPAS_HKBA: string | null
      BuyPath: string | null
      US_MSRP: string | null
      CN_MSRP: string | null
      CN_Ticket: string | null
      CN_StoreCost: string | null
      HK_MSRP: string | null
      HK_Ticket: string | null
      HK_StoreCost: string | null
      FA_Bundle: string | null
      BA_Bundle: string | null
      RegStatus: string | null
      Unblocked: string | null
      PDP: string | null
      Comment: string | null
      DmdUnit: string | null
      Matchback_CN: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'Int'>
    readonly Article: FieldRef<"Product", 'String'>
    readonly Description: FieldRef<"Product", 'String'>
    readonly UPC: FieldRef<"Product", 'String'>
    readonly MerchID: FieldRef<"Product", 'String'>
    readonly StyleID: FieldRef<"Product", 'String'>
    readonly Style_Desc: FieldRef<"Product", 'String'>
    readonly RootStyle: FieldRef<"Product", 'String'>
    readonly Brand: FieldRef<"Product", 'String'>
    readonly Sector: FieldRef<"Product", 'String'>
    readonly Category: FieldRef<"Product", 'String'>
    readonly SubBrand: FieldRef<"Product", 'String'>
    readonly MP_A_SubBrand: FieldRef<"Product", 'String'>
    readonly Collection: FieldRef<"Product", 'String'>
    readonly Class: FieldRef<"Product", 'String'>
    readonly SubClass: FieldRef<"Product", 'String'>
    readonly MasterStyleID: FieldRef<"Product", 'String'>
    readonly MasterStyle_Desc: FieldRef<"Product", 'String'>
    readonly Choice_Code: FieldRef<"Product", 'String'>
    readonly Choice_Desc: FieldRef<"Product", 'String'>
    readonly Color: FieldRef<"Product", 'String'>
    readonly EC_Color: FieldRef<"Product", 'String'>
    readonly U_ChoiceDesc: FieldRef<"Product", 'String'>
    readonly U_Form: FieldRef<"Product", 'String'>
    readonly Size: FieldRef<"Product", 'String'>
    readonly Size_1: FieldRef<"Product", 'String'>
    readonly Size_2: FieldRef<"Product", 'String'>
    readonly Material: FieldRef<"Product", 'String'>
    readonly Case: FieldRef<"Product", 'String'>
    readonly Lifecycle: FieldRef<"Product", 'String'>
    readonly KeyItem: FieldRef<"Product", 'String'>
    readonly GS_Contents: FieldRef<"Product", 'String'>
    readonly FST_GLB: FieldRef<"Product", 'String'>
    readonly FST_CN: FieldRef<"Product", 'String'>
    readonly FST_HK: FieldRef<"Product", 'String'>
    readonly FST_Alt: FieldRef<"Product", 'String'>
    readonly Set_CN: FieldRef<"Product", 'String'>
    readonly Set_GLB: FieldRef<"Product", 'String'>
    readonly Set_HK: FieldRef<"Product", 'String'>
    readonly Push_CN: FieldRef<"Product", 'String'>
    readonly Push_HK: FieldRef<"Product", 'String'>
    readonly MKD_GLB: FieldRef<"Product", 'String'>
    readonly MKD_CN: FieldRef<"Product", 'String'>
    readonly MKD_HK: FieldRef<"Product", 'String'>
    readonly SAS_GLB: FieldRef<"Product", 'String'>
    readonly SAS_CN: FieldRef<"Product", 'String'>
    readonly SAS_HK: FieldRef<"Product", 'String'>
    readonly CNTier_LM: FieldRef<"Product", 'String'>
    readonly CNTier_TR: FieldRef<"Product", 'String'>
    readonly CNTier_FA: FieldRef<"Product", 'String'>
    readonly CNTier_OT: FieldRef<"Product", 'String'>
    readonly CNTier_EC: FieldRef<"Product", 'String'>
    readonly HKTier_BA: FieldRef<"Product", 'String'>
    readonly HKTier_FA: FieldRef<"Product", 'String'>
    readonly UPAS_Global: FieldRef<"Product", 'String'>
    readonly UPAS_CNBuy: FieldRef<"Product", 'String'>
    readonly UPAS_HKBuy: FieldRef<"Product", 'String'>
    readonly UPAS_CN: FieldRef<"Product", 'String'>
    readonly UPAS_HK: FieldRef<"Product", 'String'>
    readonly UPAS_CNFA: FieldRef<"Product", 'String'>
    readonly UPAS_CNBA: FieldRef<"Product", 'String'>
    readonly UPAS_CNEC: FieldRef<"Product", 'String'>
    readonly UPAS_HKFA: FieldRef<"Product", 'String'>
    readonly UPAS_HKBA: FieldRef<"Product", 'String'>
    readonly BuyPath: FieldRef<"Product", 'String'>
    readonly US_MSRP: FieldRef<"Product", 'String'>
    readonly CN_MSRP: FieldRef<"Product", 'String'>
    readonly CN_Ticket: FieldRef<"Product", 'String'>
    readonly CN_StoreCost: FieldRef<"Product", 'String'>
    readonly HK_MSRP: FieldRef<"Product", 'String'>
    readonly HK_Ticket: FieldRef<"Product", 'String'>
    readonly HK_StoreCost: FieldRef<"Product", 'String'>
    readonly FA_Bundle: FieldRef<"Product", 'String'>
    readonly BA_Bundle: FieldRef<"Product", 'String'>
    readonly RegStatus: FieldRef<"Product", 'String'>
    readonly Unblocked: FieldRef<"Product", 'String'>
    readonly PDP: FieldRef<"Product", 'String'>
    readonly Comment: FieldRef<"Product", 'String'>
    readonly DmdUnit: FieldRef<"Product", 'String'>
    readonly Matchback_CN: FieldRef<"Product", 'String'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly updatedAt: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ProductScalarFieldEnum: {
    id: 'id',
    Article: 'Article',
    Description: 'Description',
    UPC: 'UPC',
    MerchID: 'MerchID',
    StyleID: 'StyleID',
    Style_Desc: 'Style_Desc',
    RootStyle: 'RootStyle',
    Brand: 'Brand',
    Sector: 'Sector',
    Category: 'Category',
    SubBrand: 'SubBrand',
    MP_A_SubBrand: 'MP_A_SubBrand',
    Collection: 'Collection',
    Class: 'Class',
    SubClass: 'SubClass',
    MasterStyleID: 'MasterStyleID',
    MasterStyle_Desc: 'MasterStyle_Desc',
    Choice_Code: 'Choice_Code',
    Choice_Desc: 'Choice_Desc',
    Color: 'Color',
    EC_Color: 'EC_Color',
    U_ChoiceDesc: 'U_ChoiceDesc',
    U_Form: 'U_Form',
    Size: 'Size',
    Size_1: 'Size_1',
    Size_2: 'Size_2',
    Material: 'Material',
    Case: 'Case',
    Lifecycle: 'Lifecycle',
    KeyItem: 'KeyItem',
    GS_Contents: 'GS_Contents',
    FST_GLB: 'FST_GLB',
    FST_CN: 'FST_CN',
    FST_HK: 'FST_HK',
    FST_Alt: 'FST_Alt',
    Set_CN: 'Set_CN',
    Set_GLB: 'Set_GLB',
    Set_HK: 'Set_HK',
    Push_CN: 'Push_CN',
    Push_HK: 'Push_HK',
    MKD_GLB: 'MKD_GLB',
    MKD_CN: 'MKD_CN',
    MKD_HK: 'MKD_HK',
    SAS_GLB: 'SAS_GLB',
    SAS_CN: 'SAS_CN',
    SAS_HK: 'SAS_HK',
    CNTier_LM: 'CNTier_LM',
    CNTier_TR: 'CNTier_TR',
    CNTier_FA: 'CNTier_FA',
    CNTier_OT: 'CNTier_OT',
    CNTier_EC: 'CNTier_EC',
    HKTier_BA: 'HKTier_BA',
    HKTier_FA: 'HKTier_FA',
    UPAS_Global: 'UPAS_Global',
    UPAS_CNBuy: 'UPAS_CNBuy',
    UPAS_HKBuy: 'UPAS_HKBuy',
    UPAS_CN: 'UPAS_CN',
    UPAS_HK: 'UPAS_HK',
    UPAS_CNFA: 'UPAS_CNFA',
    UPAS_CNBA: 'UPAS_CNBA',
    UPAS_CNEC: 'UPAS_CNEC',
    UPAS_HKFA: 'UPAS_HKFA',
    UPAS_HKBA: 'UPAS_HKBA',
    BuyPath: 'BuyPath',
    US_MSRP: 'US_MSRP',
    CN_MSRP: 'CN_MSRP',
    CN_Ticket: 'CN_Ticket',
    CN_StoreCost: 'CN_StoreCost',
    HK_MSRP: 'HK_MSRP',
    HK_Ticket: 'HK_Ticket',
    HK_StoreCost: 'HK_StoreCost',
    FA_Bundle: 'FA_Bundle',
    BA_Bundle: 'BA_Bundle',
    RegStatus: 'RegStatus',
    Unblocked: 'Unblocked',
    PDP: 'PDP',
    Comment: 'Comment',
    DmdUnit: 'DmdUnit',
    Matchback_CN: 'Matchback_CN',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: IntFilter<"Product"> | number
    Article?: StringNullableFilter<"Product"> | string | null
    Description?: StringNullableFilter<"Product"> | string | null
    UPC?: StringNullableFilter<"Product"> | string | null
    MerchID?: StringNullableFilter<"Product"> | string | null
    StyleID?: StringNullableFilter<"Product"> | string | null
    Style_Desc?: StringNullableFilter<"Product"> | string | null
    RootStyle?: StringNullableFilter<"Product"> | string | null
    Brand?: StringNullableFilter<"Product"> | string | null
    Sector?: StringNullableFilter<"Product"> | string | null
    Category?: StringNullableFilter<"Product"> | string | null
    SubBrand?: StringNullableFilter<"Product"> | string | null
    MP_A_SubBrand?: StringNullableFilter<"Product"> | string | null
    Collection?: StringNullableFilter<"Product"> | string | null
    Class?: StringNullableFilter<"Product"> | string | null
    SubClass?: StringNullableFilter<"Product"> | string | null
    MasterStyleID?: StringNullableFilter<"Product"> | string | null
    MasterStyle_Desc?: StringNullableFilter<"Product"> | string | null
    Choice_Code?: StringNullableFilter<"Product"> | string | null
    Choice_Desc?: StringNullableFilter<"Product"> | string | null
    Color?: StringNullableFilter<"Product"> | string | null
    EC_Color?: StringNullableFilter<"Product"> | string | null
    U_ChoiceDesc?: StringNullableFilter<"Product"> | string | null
    U_Form?: StringNullableFilter<"Product"> | string | null
    Size?: StringNullableFilter<"Product"> | string | null
    Size_1?: StringNullableFilter<"Product"> | string | null
    Size_2?: StringNullableFilter<"Product"> | string | null
    Material?: StringNullableFilter<"Product"> | string | null
    Case?: StringNullableFilter<"Product"> | string | null
    Lifecycle?: StringNullableFilter<"Product"> | string | null
    KeyItem?: StringNullableFilter<"Product"> | string | null
    GS_Contents?: StringNullableFilter<"Product"> | string | null
    FST_GLB?: StringNullableFilter<"Product"> | string | null
    FST_CN?: StringNullableFilter<"Product"> | string | null
    FST_HK?: StringNullableFilter<"Product"> | string | null
    FST_Alt?: StringNullableFilter<"Product"> | string | null
    Set_CN?: StringNullableFilter<"Product"> | string | null
    Set_GLB?: StringNullableFilter<"Product"> | string | null
    Set_HK?: StringNullableFilter<"Product"> | string | null
    Push_CN?: StringNullableFilter<"Product"> | string | null
    Push_HK?: StringNullableFilter<"Product"> | string | null
    MKD_GLB?: StringNullableFilter<"Product"> | string | null
    MKD_CN?: StringNullableFilter<"Product"> | string | null
    MKD_HK?: StringNullableFilter<"Product"> | string | null
    SAS_GLB?: StringNullableFilter<"Product"> | string | null
    SAS_CN?: StringNullableFilter<"Product"> | string | null
    SAS_HK?: StringNullableFilter<"Product"> | string | null
    CNTier_LM?: StringNullableFilter<"Product"> | string | null
    CNTier_TR?: StringNullableFilter<"Product"> | string | null
    CNTier_FA?: StringNullableFilter<"Product"> | string | null
    CNTier_OT?: StringNullableFilter<"Product"> | string | null
    CNTier_EC?: StringNullableFilter<"Product"> | string | null
    HKTier_BA?: StringNullableFilter<"Product"> | string | null
    HKTier_FA?: StringNullableFilter<"Product"> | string | null
    UPAS_Global?: StringNullableFilter<"Product"> | string | null
    UPAS_CNBuy?: StringNullableFilter<"Product"> | string | null
    UPAS_HKBuy?: StringNullableFilter<"Product"> | string | null
    UPAS_CN?: StringNullableFilter<"Product"> | string | null
    UPAS_HK?: StringNullableFilter<"Product"> | string | null
    UPAS_CNFA?: StringNullableFilter<"Product"> | string | null
    UPAS_CNBA?: StringNullableFilter<"Product"> | string | null
    UPAS_CNEC?: StringNullableFilter<"Product"> | string | null
    UPAS_HKFA?: StringNullableFilter<"Product"> | string | null
    UPAS_HKBA?: StringNullableFilter<"Product"> | string | null
    BuyPath?: StringNullableFilter<"Product"> | string | null
    US_MSRP?: StringNullableFilter<"Product"> | string | null
    CN_MSRP?: StringNullableFilter<"Product"> | string | null
    CN_Ticket?: StringNullableFilter<"Product"> | string | null
    CN_StoreCost?: StringNullableFilter<"Product"> | string | null
    HK_MSRP?: StringNullableFilter<"Product"> | string | null
    HK_Ticket?: StringNullableFilter<"Product"> | string | null
    HK_StoreCost?: StringNullableFilter<"Product"> | string | null
    FA_Bundle?: StringNullableFilter<"Product"> | string | null
    BA_Bundle?: StringNullableFilter<"Product"> | string | null
    RegStatus?: StringNullableFilter<"Product"> | string | null
    Unblocked?: StringNullableFilter<"Product"> | string | null
    PDP?: StringNullableFilter<"Product"> | string | null
    Comment?: StringNullableFilter<"Product"> | string | null
    DmdUnit?: StringNullableFilter<"Product"> | string | null
    Matchback_CN?: StringNullableFilter<"Product"> | string | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    Article?: SortOrderInput | SortOrder
    Description?: SortOrderInput | SortOrder
    UPC?: SortOrderInput | SortOrder
    MerchID?: SortOrderInput | SortOrder
    StyleID?: SortOrderInput | SortOrder
    Style_Desc?: SortOrderInput | SortOrder
    RootStyle?: SortOrderInput | SortOrder
    Brand?: SortOrderInput | SortOrder
    Sector?: SortOrderInput | SortOrder
    Category?: SortOrderInput | SortOrder
    SubBrand?: SortOrderInput | SortOrder
    MP_A_SubBrand?: SortOrderInput | SortOrder
    Collection?: SortOrderInput | SortOrder
    Class?: SortOrderInput | SortOrder
    SubClass?: SortOrderInput | SortOrder
    MasterStyleID?: SortOrderInput | SortOrder
    MasterStyle_Desc?: SortOrderInput | SortOrder
    Choice_Code?: SortOrderInput | SortOrder
    Choice_Desc?: SortOrderInput | SortOrder
    Color?: SortOrderInput | SortOrder
    EC_Color?: SortOrderInput | SortOrder
    U_ChoiceDesc?: SortOrderInput | SortOrder
    U_Form?: SortOrderInput | SortOrder
    Size?: SortOrderInput | SortOrder
    Size_1?: SortOrderInput | SortOrder
    Size_2?: SortOrderInput | SortOrder
    Material?: SortOrderInput | SortOrder
    Case?: SortOrderInput | SortOrder
    Lifecycle?: SortOrderInput | SortOrder
    KeyItem?: SortOrderInput | SortOrder
    GS_Contents?: SortOrderInput | SortOrder
    FST_GLB?: SortOrderInput | SortOrder
    FST_CN?: SortOrderInput | SortOrder
    FST_HK?: SortOrderInput | SortOrder
    FST_Alt?: SortOrderInput | SortOrder
    Set_CN?: SortOrderInput | SortOrder
    Set_GLB?: SortOrderInput | SortOrder
    Set_HK?: SortOrderInput | SortOrder
    Push_CN?: SortOrderInput | SortOrder
    Push_HK?: SortOrderInput | SortOrder
    MKD_GLB?: SortOrderInput | SortOrder
    MKD_CN?: SortOrderInput | SortOrder
    MKD_HK?: SortOrderInput | SortOrder
    SAS_GLB?: SortOrderInput | SortOrder
    SAS_CN?: SortOrderInput | SortOrder
    SAS_HK?: SortOrderInput | SortOrder
    CNTier_LM?: SortOrderInput | SortOrder
    CNTier_TR?: SortOrderInput | SortOrder
    CNTier_FA?: SortOrderInput | SortOrder
    CNTier_OT?: SortOrderInput | SortOrder
    CNTier_EC?: SortOrderInput | SortOrder
    HKTier_BA?: SortOrderInput | SortOrder
    HKTier_FA?: SortOrderInput | SortOrder
    UPAS_Global?: SortOrderInput | SortOrder
    UPAS_CNBuy?: SortOrderInput | SortOrder
    UPAS_HKBuy?: SortOrderInput | SortOrder
    UPAS_CN?: SortOrderInput | SortOrder
    UPAS_HK?: SortOrderInput | SortOrder
    UPAS_CNFA?: SortOrderInput | SortOrder
    UPAS_CNBA?: SortOrderInput | SortOrder
    UPAS_CNEC?: SortOrderInput | SortOrder
    UPAS_HKFA?: SortOrderInput | SortOrder
    UPAS_HKBA?: SortOrderInput | SortOrder
    BuyPath?: SortOrderInput | SortOrder
    US_MSRP?: SortOrderInput | SortOrder
    CN_MSRP?: SortOrderInput | SortOrder
    CN_Ticket?: SortOrderInput | SortOrder
    CN_StoreCost?: SortOrderInput | SortOrder
    HK_MSRP?: SortOrderInput | SortOrder
    HK_Ticket?: SortOrderInput | SortOrder
    HK_StoreCost?: SortOrderInput | SortOrder
    FA_Bundle?: SortOrderInput | SortOrder
    BA_Bundle?: SortOrderInput | SortOrder
    RegStatus?: SortOrderInput | SortOrder
    Unblocked?: SortOrderInput | SortOrder
    PDP?: SortOrderInput | SortOrder
    Comment?: SortOrderInput | SortOrder
    DmdUnit?: SortOrderInput | SortOrder
    Matchback_CN?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    Article?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    Description?: StringNullableFilter<"Product"> | string | null
    UPC?: StringNullableFilter<"Product"> | string | null
    MerchID?: StringNullableFilter<"Product"> | string | null
    StyleID?: StringNullableFilter<"Product"> | string | null
    Style_Desc?: StringNullableFilter<"Product"> | string | null
    RootStyle?: StringNullableFilter<"Product"> | string | null
    Brand?: StringNullableFilter<"Product"> | string | null
    Sector?: StringNullableFilter<"Product"> | string | null
    Category?: StringNullableFilter<"Product"> | string | null
    SubBrand?: StringNullableFilter<"Product"> | string | null
    MP_A_SubBrand?: StringNullableFilter<"Product"> | string | null
    Collection?: StringNullableFilter<"Product"> | string | null
    Class?: StringNullableFilter<"Product"> | string | null
    SubClass?: StringNullableFilter<"Product"> | string | null
    MasterStyleID?: StringNullableFilter<"Product"> | string | null
    MasterStyle_Desc?: StringNullableFilter<"Product"> | string | null
    Choice_Code?: StringNullableFilter<"Product"> | string | null
    Choice_Desc?: StringNullableFilter<"Product"> | string | null
    Color?: StringNullableFilter<"Product"> | string | null
    EC_Color?: StringNullableFilter<"Product"> | string | null
    U_ChoiceDesc?: StringNullableFilter<"Product"> | string | null
    U_Form?: StringNullableFilter<"Product"> | string | null
    Size?: StringNullableFilter<"Product"> | string | null
    Size_1?: StringNullableFilter<"Product"> | string | null
    Size_2?: StringNullableFilter<"Product"> | string | null
    Material?: StringNullableFilter<"Product"> | string | null
    Case?: StringNullableFilter<"Product"> | string | null
    Lifecycle?: StringNullableFilter<"Product"> | string | null
    KeyItem?: StringNullableFilter<"Product"> | string | null
    GS_Contents?: StringNullableFilter<"Product"> | string | null
    FST_GLB?: StringNullableFilter<"Product"> | string | null
    FST_CN?: StringNullableFilter<"Product"> | string | null
    FST_HK?: StringNullableFilter<"Product"> | string | null
    FST_Alt?: StringNullableFilter<"Product"> | string | null
    Set_CN?: StringNullableFilter<"Product"> | string | null
    Set_GLB?: StringNullableFilter<"Product"> | string | null
    Set_HK?: StringNullableFilter<"Product"> | string | null
    Push_CN?: StringNullableFilter<"Product"> | string | null
    Push_HK?: StringNullableFilter<"Product"> | string | null
    MKD_GLB?: StringNullableFilter<"Product"> | string | null
    MKD_CN?: StringNullableFilter<"Product"> | string | null
    MKD_HK?: StringNullableFilter<"Product"> | string | null
    SAS_GLB?: StringNullableFilter<"Product"> | string | null
    SAS_CN?: StringNullableFilter<"Product"> | string | null
    SAS_HK?: StringNullableFilter<"Product"> | string | null
    CNTier_LM?: StringNullableFilter<"Product"> | string | null
    CNTier_TR?: StringNullableFilter<"Product"> | string | null
    CNTier_FA?: StringNullableFilter<"Product"> | string | null
    CNTier_OT?: StringNullableFilter<"Product"> | string | null
    CNTier_EC?: StringNullableFilter<"Product"> | string | null
    HKTier_BA?: StringNullableFilter<"Product"> | string | null
    HKTier_FA?: StringNullableFilter<"Product"> | string | null
    UPAS_Global?: StringNullableFilter<"Product"> | string | null
    UPAS_CNBuy?: StringNullableFilter<"Product"> | string | null
    UPAS_HKBuy?: StringNullableFilter<"Product"> | string | null
    UPAS_CN?: StringNullableFilter<"Product"> | string | null
    UPAS_HK?: StringNullableFilter<"Product"> | string | null
    UPAS_CNFA?: StringNullableFilter<"Product"> | string | null
    UPAS_CNBA?: StringNullableFilter<"Product"> | string | null
    UPAS_CNEC?: StringNullableFilter<"Product"> | string | null
    UPAS_HKFA?: StringNullableFilter<"Product"> | string | null
    UPAS_HKBA?: StringNullableFilter<"Product"> | string | null
    BuyPath?: StringNullableFilter<"Product"> | string | null
    US_MSRP?: StringNullableFilter<"Product"> | string | null
    CN_MSRP?: StringNullableFilter<"Product"> | string | null
    CN_Ticket?: StringNullableFilter<"Product"> | string | null
    CN_StoreCost?: StringNullableFilter<"Product"> | string | null
    HK_MSRP?: StringNullableFilter<"Product"> | string | null
    HK_Ticket?: StringNullableFilter<"Product"> | string | null
    HK_StoreCost?: StringNullableFilter<"Product"> | string | null
    FA_Bundle?: StringNullableFilter<"Product"> | string | null
    BA_Bundle?: StringNullableFilter<"Product"> | string | null
    RegStatus?: StringNullableFilter<"Product"> | string | null
    Unblocked?: StringNullableFilter<"Product"> | string | null
    PDP?: StringNullableFilter<"Product"> | string | null
    Comment?: StringNullableFilter<"Product"> | string | null
    DmdUnit?: StringNullableFilter<"Product"> | string | null
    Matchback_CN?: StringNullableFilter<"Product"> | string | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
  }, "id" | "Article">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    Article?: SortOrderInput | SortOrder
    Description?: SortOrderInput | SortOrder
    UPC?: SortOrderInput | SortOrder
    MerchID?: SortOrderInput | SortOrder
    StyleID?: SortOrderInput | SortOrder
    Style_Desc?: SortOrderInput | SortOrder
    RootStyle?: SortOrderInput | SortOrder
    Brand?: SortOrderInput | SortOrder
    Sector?: SortOrderInput | SortOrder
    Category?: SortOrderInput | SortOrder
    SubBrand?: SortOrderInput | SortOrder
    MP_A_SubBrand?: SortOrderInput | SortOrder
    Collection?: SortOrderInput | SortOrder
    Class?: SortOrderInput | SortOrder
    SubClass?: SortOrderInput | SortOrder
    MasterStyleID?: SortOrderInput | SortOrder
    MasterStyle_Desc?: SortOrderInput | SortOrder
    Choice_Code?: SortOrderInput | SortOrder
    Choice_Desc?: SortOrderInput | SortOrder
    Color?: SortOrderInput | SortOrder
    EC_Color?: SortOrderInput | SortOrder
    U_ChoiceDesc?: SortOrderInput | SortOrder
    U_Form?: SortOrderInput | SortOrder
    Size?: SortOrderInput | SortOrder
    Size_1?: SortOrderInput | SortOrder
    Size_2?: SortOrderInput | SortOrder
    Material?: SortOrderInput | SortOrder
    Case?: SortOrderInput | SortOrder
    Lifecycle?: SortOrderInput | SortOrder
    KeyItem?: SortOrderInput | SortOrder
    GS_Contents?: SortOrderInput | SortOrder
    FST_GLB?: SortOrderInput | SortOrder
    FST_CN?: SortOrderInput | SortOrder
    FST_HK?: SortOrderInput | SortOrder
    FST_Alt?: SortOrderInput | SortOrder
    Set_CN?: SortOrderInput | SortOrder
    Set_GLB?: SortOrderInput | SortOrder
    Set_HK?: SortOrderInput | SortOrder
    Push_CN?: SortOrderInput | SortOrder
    Push_HK?: SortOrderInput | SortOrder
    MKD_GLB?: SortOrderInput | SortOrder
    MKD_CN?: SortOrderInput | SortOrder
    MKD_HK?: SortOrderInput | SortOrder
    SAS_GLB?: SortOrderInput | SortOrder
    SAS_CN?: SortOrderInput | SortOrder
    SAS_HK?: SortOrderInput | SortOrder
    CNTier_LM?: SortOrderInput | SortOrder
    CNTier_TR?: SortOrderInput | SortOrder
    CNTier_FA?: SortOrderInput | SortOrder
    CNTier_OT?: SortOrderInput | SortOrder
    CNTier_EC?: SortOrderInput | SortOrder
    HKTier_BA?: SortOrderInput | SortOrder
    HKTier_FA?: SortOrderInput | SortOrder
    UPAS_Global?: SortOrderInput | SortOrder
    UPAS_CNBuy?: SortOrderInput | SortOrder
    UPAS_HKBuy?: SortOrderInput | SortOrder
    UPAS_CN?: SortOrderInput | SortOrder
    UPAS_HK?: SortOrderInput | SortOrder
    UPAS_CNFA?: SortOrderInput | SortOrder
    UPAS_CNBA?: SortOrderInput | SortOrder
    UPAS_CNEC?: SortOrderInput | SortOrder
    UPAS_HKFA?: SortOrderInput | SortOrder
    UPAS_HKBA?: SortOrderInput | SortOrder
    BuyPath?: SortOrderInput | SortOrder
    US_MSRP?: SortOrderInput | SortOrder
    CN_MSRP?: SortOrderInput | SortOrder
    CN_Ticket?: SortOrderInput | SortOrder
    CN_StoreCost?: SortOrderInput | SortOrder
    HK_MSRP?: SortOrderInput | SortOrder
    HK_Ticket?: SortOrderInput | SortOrder
    HK_StoreCost?: SortOrderInput | SortOrder
    FA_Bundle?: SortOrderInput | SortOrder
    BA_Bundle?: SortOrderInput | SortOrder
    RegStatus?: SortOrderInput | SortOrder
    Unblocked?: SortOrderInput | SortOrder
    PDP?: SortOrderInput | SortOrder
    Comment?: SortOrderInput | SortOrder
    DmdUnit?: SortOrderInput | SortOrder
    Matchback_CN?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Product"> | number
    Article?: StringNullableWithAggregatesFilter<"Product"> | string | null
    Description?: StringNullableWithAggregatesFilter<"Product"> | string | null
    UPC?: StringNullableWithAggregatesFilter<"Product"> | string | null
    MerchID?: StringNullableWithAggregatesFilter<"Product"> | string | null
    StyleID?: StringNullableWithAggregatesFilter<"Product"> | string | null
    Style_Desc?: StringNullableWithAggregatesFilter<"Product"> | string | null
    RootStyle?: StringNullableWithAggregatesFilter<"Product"> | string | null
    Brand?: StringNullableWithAggregatesFilter<"Product"> | string | null
    Sector?: StringNullableWithAggregatesFilter<"Product"> | string | null
    Category?: StringNullableWithAggregatesFilter<"Product"> | string | null
    SubBrand?: StringNullableWithAggregatesFilter<"Product"> | string | null
    MP_A_SubBrand?: StringNullableWithAggregatesFilter<"Product"> | string | null
    Collection?: StringNullableWithAggregatesFilter<"Product"> | string | null
    Class?: StringNullableWithAggregatesFilter<"Product"> | string | null
    SubClass?: StringNullableWithAggregatesFilter<"Product"> | string | null
    MasterStyleID?: StringNullableWithAggregatesFilter<"Product"> | string | null
    MasterStyle_Desc?: StringNullableWithAggregatesFilter<"Product"> | string | null
    Choice_Code?: StringNullableWithAggregatesFilter<"Product"> | string | null
    Choice_Desc?: StringNullableWithAggregatesFilter<"Product"> | string | null
    Color?: StringNullableWithAggregatesFilter<"Product"> | string | null
    EC_Color?: StringNullableWithAggregatesFilter<"Product"> | string | null
    U_ChoiceDesc?: StringNullableWithAggregatesFilter<"Product"> | string | null
    U_Form?: StringNullableWithAggregatesFilter<"Product"> | string | null
    Size?: StringNullableWithAggregatesFilter<"Product"> | string | null
    Size_1?: StringNullableWithAggregatesFilter<"Product"> | string | null
    Size_2?: StringNullableWithAggregatesFilter<"Product"> | string | null
    Material?: StringNullableWithAggregatesFilter<"Product"> | string | null
    Case?: StringNullableWithAggregatesFilter<"Product"> | string | null
    Lifecycle?: StringNullableWithAggregatesFilter<"Product"> | string | null
    KeyItem?: StringNullableWithAggregatesFilter<"Product"> | string | null
    GS_Contents?: StringNullableWithAggregatesFilter<"Product"> | string | null
    FST_GLB?: StringNullableWithAggregatesFilter<"Product"> | string | null
    FST_CN?: StringNullableWithAggregatesFilter<"Product"> | string | null
    FST_HK?: StringNullableWithAggregatesFilter<"Product"> | string | null
    FST_Alt?: StringNullableWithAggregatesFilter<"Product"> | string | null
    Set_CN?: StringNullableWithAggregatesFilter<"Product"> | string | null
    Set_GLB?: StringNullableWithAggregatesFilter<"Product"> | string | null
    Set_HK?: StringNullableWithAggregatesFilter<"Product"> | string | null
    Push_CN?: StringNullableWithAggregatesFilter<"Product"> | string | null
    Push_HK?: StringNullableWithAggregatesFilter<"Product"> | string | null
    MKD_GLB?: StringNullableWithAggregatesFilter<"Product"> | string | null
    MKD_CN?: StringNullableWithAggregatesFilter<"Product"> | string | null
    MKD_HK?: StringNullableWithAggregatesFilter<"Product"> | string | null
    SAS_GLB?: StringNullableWithAggregatesFilter<"Product"> | string | null
    SAS_CN?: StringNullableWithAggregatesFilter<"Product"> | string | null
    SAS_HK?: StringNullableWithAggregatesFilter<"Product"> | string | null
    CNTier_LM?: StringNullableWithAggregatesFilter<"Product"> | string | null
    CNTier_TR?: StringNullableWithAggregatesFilter<"Product"> | string | null
    CNTier_FA?: StringNullableWithAggregatesFilter<"Product"> | string | null
    CNTier_OT?: StringNullableWithAggregatesFilter<"Product"> | string | null
    CNTier_EC?: StringNullableWithAggregatesFilter<"Product"> | string | null
    HKTier_BA?: StringNullableWithAggregatesFilter<"Product"> | string | null
    HKTier_FA?: StringNullableWithAggregatesFilter<"Product"> | string | null
    UPAS_Global?: StringNullableWithAggregatesFilter<"Product"> | string | null
    UPAS_CNBuy?: StringNullableWithAggregatesFilter<"Product"> | string | null
    UPAS_HKBuy?: StringNullableWithAggregatesFilter<"Product"> | string | null
    UPAS_CN?: StringNullableWithAggregatesFilter<"Product"> | string | null
    UPAS_HK?: StringNullableWithAggregatesFilter<"Product"> | string | null
    UPAS_CNFA?: StringNullableWithAggregatesFilter<"Product"> | string | null
    UPAS_CNBA?: StringNullableWithAggregatesFilter<"Product"> | string | null
    UPAS_CNEC?: StringNullableWithAggregatesFilter<"Product"> | string | null
    UPAS_HKFA?: StringNullableWithAggregatesFilter<"Product"> | string | null
    UPAS_HKBA?: StringNullableWithAggregatesFilter<"Product"> | string | null
    BuyPath?: StringNullableWithAggregatesFilter<"Product"> | string | null
    US_MSRP?: StringNullableWithAggregatesFilter<"Product"> | string | null
    CN_MSRP?: StringNullableWithAggregatesFilter<"Product"> | string | null
    CN_Ticket?: StringNullableWithAggregatesFilter<"Product"> | string | null
    CN_StoreCost?: StringNullableWithAggregatesFilter<"Product"> | string | null
    HK_MSRP?: StringNullableWithAggregatesFilter<"Product"> | string | null
    HK_Ticket?: StringNullableWithAggregatesFilter<"Product"> | string | null
    HK_StoreCost?: StringNullableWithAggregatesFilter<"Product"> | string | null
    FA_Bundle?: StringNullableWithAggregatesFilter<"Product"> | string | null
    BA_Bundle?: StringNullableWithAggregatesFilter<"Product"> | string | null
    RegStatus?: StringNullableWithAggregatesFilter<"Product"> | string | null
    Unblocked?: StringNullableWithAggregatesFilter<"Product"> | string | null
    PDP?: StringNullableWithAggregatesFilter<"Product"> | string | null
    Comment?: StringNullableWithAggregatesFilter<"Product"> | string | null
    DmdUnit?: StringNullableWithAggregatesFilter<"Product"> | string | null
    Matchback_CN?: StringNullableWithAggregatesFilter<"Product"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
  }

  export type ProductCreateInput = {
    Article?: string | null
    Description?: string | null
    UPC?: string | null
    MerchID?: string | null
    StyleID?: string | null
    Style_Desc?: string | null
    RootStyle?: string | null
    Brand?: string | null
    Sector?: string | null
    Category?: string | null
    SubBrand?: string | null
    MP_A_SubBrand?: string | null
    Collection?: string | null
    Class?: string | null
    SubClass?: string | null
    MasterStyleID?: string | null
    MasterStyle_Desc?: string | null
    Choice_Code?: string | null
    Choice_Desc?: string | null
    Color?: string | null
    EC_Color?: string | null
    U_ChoiceDesc?: string | null
    U_Form?: string | null
    Size?: string | null
    Size_1?: string | null
    Size_2?: string | null
    Material?: string | null
    Case?: string | null
    Lifecycle?: string | null
    KeyItem?: string | null
    GS_Contents?: string | null
    FST_GLB?: string | null
    FST_CN?: string | null
    FST_HK?: string | null
    FST_Alt?: string | null
    Set_CN?: string | null
    Set_GLB?: string | null
    Set_HK?: string | null
    Push_CN?: string | null
    Push_HK?: string | null
    MKD_GLB?: string | null
    MKD_CN?: string | null
    MKD_HK?: string | null
    SAS_GLB?: string | null
    SAS_CN?: string | null
    SAS_HK?: string | null
    CNTier_LM?: string | null
    CNTier_TR?: string | null
    CNTier_FA?: string | null
    CNTier_OT?: string | null
    CNTier_EC?: string | null
    HKTier_BA?: string | null
    HKTier_FA?: string | null
    UPAS_Global?: string | null
    UPAS_CNBuy?: string | null
    UPAS_HKBuy?: string | null
    UPAS_CN?: string | null
    UPAS_HK?: string | null
    UPAS_CNFA?: string | null
    UPAS_CNBA?: string | null
    UPAS_CNEC?: string | null
    UPAS_HKFA?: string | null
    UPAS_HKBA?: string | null
    BuyPath?: string | null
    US_MSRP?: string | null
    CN_MSRP?: string | null
    CN_Ticket?: string | null
    CN_StoreCost?: string | null
    HK_MSRP?: string | null
    HK_Ticket?: string | null
    HK_StoreCost?: string | null
    FA_Bundle?: string | null
    BA_Bundle?: string | null
    RegStatus?: string | null
    Unblocked?: string | null
    PDP?: string | null
    Comment?: string | null
    DmdUnit?: string | null
    Matchback_CN?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUncheckedCreateInput = {
    id?: number
    Article?: string | null
    Description?: string | null
    UPC?: string | null
    MerchID?: string | null
    StyleID?: string | null
    Style_Desc?: string | null
    RootStyle?: string | null
    Brand?: string | null
    Sector?: string | null
    Category?: string | null
    SubBrand?: string | null
    MP_A_SubBrand?: string | null
    Collection?: string | null
    Class?: string | null
    SubClass?: string | null
    MasterStyleID?: string | null
    MasterStyle_Desc?: string | null
    Choice_Code?: string | null
    Choice_Desc?: string | null
    Color?: string | null
    EC_Color?: string | null
    U_ChoiceDesc?: string | null
    U_Form?: string | null
    Size?: string | null
    Size_1?: string | null
    Size_2?: string | null
    Material?: string | null
    Case?: string | null
    Lifecycle?: string | null
    KeyItem?: string | null
    GS_Contents?: string | null
    FST_GLB?: string | null
    FST_CN?: string | null
    FST_HK?: string | null
    FST_Alt?: string | null
    Set_CN?: string | null
    Set_GLB?: string | null
    Set_HK?: string | null
    Push_CN?: string | null
    Push_HK?: string | null
    MKD_GLB?: string | null
    MKD_CN?: string | null
    MKD_HK?: string | null
    SAS_GLB?: string | null
    SAS_CN?: string | null
    SAS_HK?: string | null
    CNTier_LM?: string | null
    CNTier_TR?: string | null
    CNTier_FA?: string | null
    CNTier_OT?: string | null
    CNTier_EC?: string | null
    HKTier_BA?: string | null
    HKTier_FA?: string | null
    UPAS_Global?: string | null
    UPAS_CNBuy?: string | null
    UPAS_HKBuy?: string | null
    UPAS_CN?: string | null
    UPAS_HK?: string | null
    UPAS_CNFA?: string | null
    UPAS_CNBA?: string | null
    UPAS_CNEC?: string | null
    UPAS_HKFA?: string | null
    UPAS_HKBA?: string | null
    BuyPath?: string | null
    US_MSRP?: string | null
    CN_MSRP?: string | null
    CN_Ticket?: string | null
    CN_StoreCost?: string | null
    HK_MSRP?: string | null
    HK_Ticket?: string | null
    HK_StoreCost?: string | null
    FA_Bundle?: string | null
    BA_Bundle?: string | null
    RegStatus?: string | null
    Unblocked?: string | null
    PDP?: string | null
    Comment?: string | null
    DmdUnit?: string | null
    Matchback_CN?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateInput = {
    Article?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    UPC?: NullableStringFieldUpdateOperationsInput | string | null
    MerchID?: NullableStringFieldUpdateOperationsInput | string | null
    StyleID?: NullableStringFieldUpdateOperationsInput | string | null
    Style_Desc?: NullableStringFieldUpdateOperationsInput | string | null
    RootStyle?: NullableStringFieldUpdateOperationsInput | string | null
    Brand?: NullableStringFieldUpdateOperationsInput | string | null
    Sector?: NullableStringFieldUpdateOperationsInput | string | null
    Category?: NullableStringFieldUpdateOperationsInput | string | null
    SubBrand?: NullableStringFieldUpdateOperationsInput | string | null
    MP_A_SubBrand?: NullableStringFieldUpdateOperationsInput | string | null
    Collection?: NullableStringFieldUpdateOperationsInput | string | null
    Class?: NullableStringFieldUpdateOperationsInput | string | null
    SubClass?: NullableStringFieldUpdateOperationsInput | string | null
    MasterStyleID?: NullableStringFieldUpdateOperationsInput | string | null
    MasterStyle_Desc?: NullableStringFieldUpdateOperationsInput | string | null
    Choice_Code?: NullableStringFieldUpdateOperationsInput | string | null
    Choice_Desc?: NullableStringFieldUpdateOperationsInput | string | null
    Color?: NullableStringFieldUpdateOperationsInput | string | null
    EC_Color?: NullableStringFieldUpdateOperationsInput | string | null
    U_ChoiceDesc?: NullableStringFieldUpdateOperationsInput | string | null
    U_Form?: NullableStringFieldUpdateOperationsInput | string | null
    Size?: NullableStringFieldUpdateOperationsInput | string | null
    Size_1?: NullableStringFieldUpdateOperationsInput | string | null
    Size_2?: NullableStringFieldUpdateOperationsInput | string | null
    Material?: NullableStringFieldUpdateOperationsInput | string | null
    Case?: NullableStringFieldUpdateOperationsInput | string | null
    Lifecycle?: NullableStringFieldUpdateOperationsInput | string | null
    KeyItem?: NullableStringFieldUpdateOperationsInput | string | null
    GS_Contents?: NullableStringFieldUpdateOperationsInput | string | null
    FST_GLB?: NullableStringFieldUpdateOperationsInput | string | null
    FST_CN?: NullableStringFieldUpdateOperationsInput | string | null
    FST_HK?: NullableStringFieldUpdateOperationsInput | string | null
    FST_Alt?: NullableStringFieldUpdateOperationsInput | string | null
    Set_CN?: NullableStringFieldUpdateOperationsInput | string | null
    Set_GLB?: NullableStringFieldUpdateOperationsInput | string | null
    Set_HK?: NullableStringFieldUpdateOperationsInput | string | null
    Push_CN?: NullableStringFieldUpdateOperationsInput | string | null
    Push_HK?: NullableStringFieldUpdateOperationsInput | string | null
    MKD_GLB?: NullableStringFieldUpdateOperationsInput | string | null
    MKD_CN?: NullableStringFieldUpdateOperationsInput | string | null
    MKD_HK?: NullableStringFieldUpdateOperationsInput | string | null
    SAS_GLB?: NullableStringFieldUpdateOperationsInput | string | null
    SAS_CN?: NullableStringFieldUpdateOperationsInput | string | null
    SAS_HK?: NullableStringFieldUpdateOperationsInput | string | null
    CNTier_LM?: NullableStringFieldUpdateOperationsInput | string | null
    CNTier_TR?: NullableStringFieldUpdateOperationsInput | string | null
    CNTier_FA?: NullableStringFieldUpdateOperationsInput | string | null
    CNTier_OT?: NullableStringFieldUpdateOperationsInput | string | null
    CNTier_EC?: NullableStringFieldUpdateOperationsInput | string | null
    HKTier_BA?: NullableStringFieldUpdateOperationsInput | string | null
    HKTier_FA?: NullableStringFieldUpdateOperationsInput | string | null
    UPAS_Global?: NullableStringFieldUpdateOperationsInput | string | null
    UPAS_CNBuy?: NullableStringFieldUpdateOperationsInput | string | null
    UPAS_HKBuy?: NullableStringFieldUpdateOperationsInput | string | null
    UPAS_CN?: NullableStringFieldUpdateOperationsInput | string | null
    UPAS_HK?: NullableStringFieldUpdateOperationsInput | string | null
    UPAS_CNFA?: NullableStringFieldUpdateOperationsInput | string | null
    UPAS_CNBA?: NullableStringFieldUpdateOperationsInput | string | null
    UPAS_CNEC?: NullableStringFieldUpdateOperationsInput | string | null
    UPAS_HKFA?: NullableStringFieldUpdateOperationsInput | string | null
    UPAS_HKBA?: NullableStringFieldUpdateOperationsInput | string | null
    BuyPath?: NullableStringFieldUpdateOperationsInput | string | null
    US_MSRP?: NullableStringFieldUpdateOperationsInput | string | null
    CN_MSRP?: NullableStringFieldUpdateOperationsInput | string | null
    CN_Ticket?: NullableStringFieldUpdateOperationsInput | string | null
    CN_StoreCost?: NullableStringFieldUpdateOperationsInput | string | null
    HK_MSRP?: NullableStringFieldUpdateOperationsInput | string | null
    HK_Ticket?: NullableStringFieldUpdateOperationsInput | string | null
    HK_StoreCost?: NullableStringFieldUpdateOperationsInput | string | null
    FA_Bundle?: NullableStringFieldUpdateOperationsInput | string | null
    BA_Bundle?: NullableStringFieldUpdateOperationsInput | string | null
    RegStatus?: NullableStringFieldUpdateOperationsInput | string | null
    Unblocked?: NullableStringFieldUpdateOperationsInput | string | null
    PDP?: NullableStringFieldUpdateOperationsInput | string | null
    Comment?: NullableStringFieldUpdateOperationsInput | string | null
    DmdUnit?: NullableStringFieldUpdateOperationsInput | string | null
    Matchback_CN?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    Article?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    UPC?: NullableStringFieldUpdateOperationsInput | string | null
    MerchID?: NullableStringFieldUpdateOperationsInput | string | null
    StyleID?: NullableStringFieldUpdateOperationsInput | string | null
    Style_Desc?: NullableStringFieldUpdateOperationsInput | string | null
    RootStyle?: NullableStringFieldUpdateOperationsInput | string | null
    Brand?: NullableStringFieldUpdateOperationsInput | string | null
    Sector?: NullableStringFieldUpdateOperationsInput | string | null
    Category?: NullableStringFieldUpdateOperationsInput | string | null
    SubBrand?: NullableStringFieldUpdateOperationsInput | string | null
    MP_A_SubBrand?: NullableStringFieldUpdateOperationsInput | string | null
    Collection?: NullableStringFieldUpdateOperationsInput | string | null
    Class?: NullableStringFieldUpdateOperationsInput | string | null
    SubClass?: NullableStringFieldUpdateOperationsInput | string | null
    MasterStyleID?: NullableStringFieldUpdateOperationsInput | string | null
    MasterStyle_Desc?: NullableStringFieldUpdateOperationsInput | string | null
    Choice_Code?: NullableStringFieldUpdateOperationsInput | string | null
    Choice_Desc?: NullableStringFieldUpdateOperationsInput | string | null
    Color?: NullableStringFieldUpdateOperationsInput | string | null
    EC_Color?: NullableStringFieldUpdateOperationsInput | string | null
    U_ChoiceDesc?: NullableStringFieldUpdateOperationsInput | string | null
    U_Form?: NullableStringFieldUpdateOperationsInput | string | null
    Size?: NullableStringFieldUpdateOperationsInput | string | null
    Size_1?: NullableStringFieldUpdateOperationsInput | string | null
    Size_2?: NullableStringFieldUpdateOperationsInput | string | null
    Material?: NullableStringFieldUpdateOperationsInput | string | null
    Case?: NullableStringFieldUpdateOperationsInput | string | null
    Lifecycle?: NullableStringFieldUpdateOperationsInput | string | null
    KeyItem?: NullableStringFieldUpdateOperationsInput | string | null
    GS_Contents?: NullableStringFieldUpdateOperationsInput | string | null
    FST_GLB?: NullableStringFieldUpdateOperationsInput | string | null
    FST_CN?: NullableStringFieldUpdateOperationsInput | string | null
    FST_HK?: NullableStringFieldUpdateOperationsInput | string | null
    FST_Alt?: NullableStringFieldUpdateOperationsInput | string | null
    Set_CN?: NullableStringFieldUpdateOperationsInput | string | null
    Set_GLB?: NullableStringFieldUpdateOperationsInput | string | null
    Set_HK?: NullableStringFieldUpdateOperationsInput | string | null
    Push_CN?: NullableStringFieldUpdateOperationsInput | string | null
    Push_HK?: NullableStringFieldUpdateOperationsInput | string | null
    MKD_GLB?: NullableStringFieldUpdateOperationsInput | string | null
    MKD_CN?: NullableStringFieldUpdateOperationsInput | string | null
    MKD_HK?: NullableStringFieldUpdateOperationsInput | string | null
    SAS_GLB?: NullableStringFieldUpdateOperationsInput | string | null
    SAS_CN?: NullableStringFieldUpdateOperationsInput | string | null
    SAS_HK?: NullableStringFieldUpdateOperationsInput | string | null
    CNTier_LM?: NullableStringFieldUpdateOperationsInput | string | null
    CNTier_TR?: NullableStringFieldUpdateOperationsInput | string | null
    CNTier_FA?: NullableStringFieldUpdateOperationsInput | string | null
    CNTier_OT?: NullableStringFieldUpdateOperationsInput | string | null
    CNTier_EC?: NullableStringFieldUpdateOperationsInput | string | null
    HKTier_BA?: NullableStringFieldUpdateOperationsInput | string | null
    HKTier_FA?: NullableStringFieldUpdateOperationsInput | string | null
    UPAS_Global?: NullableStringFieldUpdateOperationsInput | string | null
    UPAS_CNBuy?: NullableStringFieldUpdateOperationsInput | string | null
    UPAS_HKBuy?: NullableStringFieldUpdateOperationsInput | string | null
    UPAS_CN?: NullableStringFieldUpdateOperationsInput | string | null
    UPAS_HK?: NullableStringFieldUpdateOperationsInput | string | null
    UPAS_CNFA?: NullableStringFieldUpdateOperationsInput | string | null
    UPAS_CNBA?: NullableStringFieldUpdateOperationsInput | string | null
    UPAS_CNEC?: NullableStringFieldUpdateOperationsInput | string | null
    UPAS_HKFA?: NullableStringFieldUpdateOperationsInput | string | null
    UPAS_HKBA?: NullableStringFieldUpdateOperationsInput | string | null
    BuyPath?: NullableStringFieldUpdateOperationsInput | string | null
    US_MSRP?: NullableStringFieldUpdateOperationsInput | string | null
    CN_MSRP?: NullableStringFieldUpdateOperationsInput | string | null
    CN_Ticket?: NullableStringFieldUpdateOperationsInput | string | null
    CN_StoreCost?: NullableStringFieldUpdateOperationsInput | string | null
    HK_MSRP?: NullableStringFieldUpdateOperationsInput | string | null
    HK_Ticket?: NullableStringFieldUpdateOperationsInput | string | null
    HK_StoreCost?: NullableStringFieldUpdateOperationsInput | string | null
    FA_Bundle?: NullableStringFieldUpdateOperationsInput | string | null
    BA_Bundle?: NullableStringFieldUpdateOperationsInput | string | null
    RegStatus?: NullableStringFieldUpdateOperationsInput | string | null
    Unblocked?: NullableStringFieldUpdateOperationsInput | string | null
    PDP?: NullableStringFieldUpdateOperationsInput | string | null
    Comment?: NullableStringFieldUpdateOperationsInput | string | null
    DmdUnit?: NullableStringFieldUpdateOperationsInput | string | null
    Matchback_CN?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateManyInput = {
    id?: number
    Article?: string | null
    Description?: string | null
    UPC?: string | null
    MerchID?: string | null
    StyleID?: string | null
    Style_Desc?: string | null
    RootStyle?: string | null
    Brand?: string | null
    Sector?: string | null
    Category?: string | null
    SubBrand?: string | null
    MP_A_SubBrand?: string | null
    Collection?: string | null
    Class?: string | null
    SubClass?: string | null
    MasterStyleID?: string | null
    MasterStyle_Desc?: string | null
    Choice_Code?: string | null
    Choice_Desc?: string | null
    Color?: string | null
    EC_Color?: string | null
    U_ChoiceDesc?: string | null
    U_Form?: string | null
    Size?: string | null
    Size_1?: string | null
    Size_2?: string | null
    Material?: string | null
    Case?: string | null
    Lifecycle?: string | null
    KeyItem?: string | null
    GS_Contents?: string | null
    FST_GLB?: string | null
    FST_CN?: string | null
    FST_HK?: string | null
    FST_Alt?: string | null
    Set_CN?: string | null
    Set_GLB?: string | null
    Set_HK?: string | null
    Push_CN?: string | null
    Push_HK?: string | null
    MKD_GLB?: string | null
    MKD_CN?: string | null
    MKD_HK?: string | null
    SAS_GLB?: string | null
    SAS_CN?: string | null
    SAS_HK?: string | null
    CNTier_LM?: string | null
    CNTier_TR?: string | null
    CNTier_FA?: string | null
    CNTier_OT?: string | null
    CNTier_EC?: string | null
    HKTier_BA?: string | null
    HKTier_FA?: string | null
    UPAS_Global?: string | null
    UPAS_CNBuy?: string | null
    UPAS_HKBuy?: string | null
    UPAS_CN?: string | null
    UPAS_HK?: string | null
    UPAS_CNFA?: string | null
    UPAS_CNBA?: string | null
    UPAS_CNEC?: string | null
    UPAS_HKFA?: string | null
    UPAS_HKBA?: string | null
    BuyPath?: string | null
    US_MSRP?: string | null
    CN_MSRP?: string | null
    CN_Ticket?: string | null
    CN_StoreCost?: string | null
    HK_MSRP?: string | null
    HK_Ticket?: string | null
    HK_StoreCost?: string | null
    FA_Bundle?: string | null
    BA_Bundle?: string | null
    RegStatus?: string | null
    Unblocked?: string | null
    PDP?: string | null
    Comment?: string | null
    DmdUnit?: string | null
    Matchback_CN?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    Article?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    UPC?: NullableStringFieldUpdateOperationsInput | string | null
    MerchID?: NullableStringFieldUpdateOperationsInput | string | null
    StyleID?: NullableStringFieldUpdateOperationsInput | string | null
    Style_Desc?: NullableStringFieldUpdateOperationsInput | string | null
    RootStyle?: NullableStringFieldUpdateOperationsInput | string | null
    Brand?: NullableStringFieldUpdateOperationsInput | string | null
    Sector?: NullableStringFieldUpdateOperationsInput | string | null
    Category?: NullableStringFieldUpdateOperationsInput | string | null
    SubBrand?: NullableStringFieldUpdateOperationsInput | string | null
    MP_A_SubBrand?: NullableStringFieldUpdateOperationsInput | string | null
    Collection?: NullableStringFieldUpdateOperationsInput | string | null
    Class?: NullableStringFieldUpdateOperationsInput | string | null
    SubClass?: NullableStringFieldUpdateOperationsInput | string | null
    MasterStyleID?: NullableStringFieldUpdateOperationsInput | string | null
    MasterStyle_Desc?: NullableStringFieldUpdateOperationsInput | string | null
    Choice_Code?: NullableStringFieldUpdateOperationsInput | string | null
    Choice_Desc?: NullableStringFieldUpdateOperationsInput | string | null
    Color?: NullableStringFieldUpdateOperationsInput | string | null
    EC_Color?: NullableStringFieldUpdateOperationsInput | string | null
    U_ChoiceDesc?: NullableStringFieldUpdateOperationsInput | string | null
    U_Form?: NullableStringFieldUpdateOperationsInput | string | null
    Size?: NullableStringFieldUpdateOperationsInput | string | null
    Size_1?: NullableStringFieldUpdateOperationsInput | string | null
    Size_2?: NullableStringFieldUpdateOperationsInput | string | null
    Material?: NullableStringFieldUpdateOperationsInput | string | null
    Case?: NullableStringFieldUpdateOperationsInput | string | null
    Lifecycle?: NullableStringFieldUpdateOperationsInput | string | null
    KeyItem?: NullableStringFieldUpdateOperationsInput | string | null
    GS_Contents?: NullableStringFieldUpdateOperationsInput | string | null
    FST_GLB?: NullableStringFieldUpdateOperationsInput | string | null
    FST_CN?: NullableStringFieldUpdateOperationsInput | string | null
    FST_HK?: NullableStringFieldUpdateOperationsInput | string | null
    FST_Alt?: NullableStringFieldUpdateOperationsInput | string | null
    Set_CN?: NullableStringFieldUpdateOperationsInput | string | null
    Set_GLB?: NullableStringFieldUpdateOperationsInput | string | null
    Set_HK?: NullableStringFieldUpdateOperationsInput | string | null
    Push_CN?: NullableStringFieldUpdateOperationsInput | string | null
    Push_HK?: NullableStringFieldUpdateOperationsInput | string | null
    MKD_GLB?: NullableStringFieldUpdateOperationsInput | string | null
    MKD_CN?: NullableStringFieldUpdateOperationsInput | string | null
    MKD_HK?: NullableStringFieldUpdateOperationsInput | string | null
    SAS_GLB?: NullableStringFieldUpdateOperationsInput | string | null
    SAS_CN?: NullableStringFieldUpdateOperationsInput | string | null
    SAS_HK?: NullableStringFieldUpdateOperationsInput | string | null
    CNTier_LM?: NullableStringFieldUpdateOperationsInput | string | null
    CNTier_TR?: NullableStringFieldUpdateOperationsInput | string | null
    CNTier_FA?: NullableStringFieldUpdateOperationsInput | string | null
    CNTier_OT?: NullableStringFieldUpdateOperationsInput | string | null
    CNTier_EC?: NullableStringFieldUpdateOperationsInput | string | null
    HKTier_BA?: NullableStringFieldUpdateOperationsInput | string | null
    HKTier_FA?: NullableStringFieldUpdateOperationsInput | string | null
    UPAS_Global?: NullableStringFieldUpdateOperationsInput | string | null
    UPAS_CNBuy?: NullableStringFieldUpdateOperationsInput | string | null
    UPAS_HKBuy?: NullableStringFieldUpdateOperationsInput | string | null
    UPAS_CN?: NullableStringFieldUpdateOperationsInput | string | null
    UPAS_HK?: NullableStringFieldUpdateOperationsInput | string | null
    UPAS_CNFA?: NullableStringFieldUpdateOperationsInput | string | null
    UPAS_CNBA?: NullableStringFieldUpdateOperationsInput | string | null
    UPAS_CNEC?: NullableStringFieldUpdateOperationsInput | string | null
    UPAS_HKFA?: NullableStringFieldUpdateOperationsInput | string | null
    UPAS_HKBA?: NullableStringFieldUpdateOperationsInput | string | null
    BuyPath?: NullableStringFieldUpdateOperationsInput | string | null
    US_MSRP?: NullableStringFieldUpdateOperationsInput | string | null
    CN_MSRP?: NullableStringFieldUpdateOperationsInput | string | null
    CN_Ticket?: NullableStringFieldUpdateOperationsInput | string | null
    CN_StoreCost?: NullableStringFieldUpdateOperationsInput | string | null
    HK_MSRP?: NullableStringFieldUpdateOperationsInput | string | null
    HK_Ticket?: NullableStringFieldUpdateOperationsInput | string | null
    HK_StoreCost?: NullableStringFieldUpdateOperationsInput | string | null
    FA_Bundle?: NullableStringFieldUpdateOperationsInput | string | null
    BA_Bundle?: NullableStringFieldUpdateOperationsInput | string | null
    RegStatus?: NullableStringFieldUpdateOperationsInput | string | null
    Unblocked?: NullableStringFieldUpdateOperationsInput | string | null
    PDP?: NullableStringFieldUpdateOperationsInput | string | null
    Comment?: NullableStringFieldUpdateOperationsInput | string | null
    DmdUnit?: NullableStringFieldUpdateOperationsInput | string | null
    Matchback_CN?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    Article?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    UPC?: NullableStringFieldUpdateOperationsInput | string | null
    MerchID?: NullableStringFieldUpdateOperationsInput | string | null
    StyleID?: NullableStringFieldUpdateOperationsInput | string | null
    Style_Desc?: NullableStringFieldUpdateOperationsInput | string | null
    RootStyle?: NullableStringFieldUpdateOperationsInput | string | null
    Brand?: NullableStringFieldUpdateOperationsInput | string | null
    Sector?: NullableStringFieldUpdateOperationsInput | string | null
    Category?: NullableStringFieldUpdateOperationsInput | string | null
    SubBrand?: NullableStringFieldUpdateOperationsInput | string | null
    MP_A_SubBrand?: NullableStringFieldUpdateOperationsInput | string | null
    Collection?: NullableStringFieldUpdateOperationsInput | string | null
    Class?: NullableStringFieldUpdateOperationsInput | string | null
    SubClass?: NullableStringFieldUpdateOperationsInput | string | null
    MasterStyleID?: NullableStringFieldUpdateOperationsInput | string | null
    MasterStyle_Desc?: NullableStringFieldUpdateOperationsInput | string | null
    Choice_Code?: NullableStringFieldUpdateOperationsInput | string | null
    Choice_Desc?: NullableStringFieldUpdateOperationsInput | string | null
    Color?: NullableStringFieldUpdateOperationsInput | string | null
    EC_Color?: NullableStringFieldUpdateOperationsInput | string | null
    U_ChoiceDesc?: NullableStringFieldUpdateOperationsInput | string | null
    U_Form?: NullableStringFieldUpdateOperationsInput | string | null
    Size?: NullableStringFieldUpdateOperationsInput | string | null
    Size_1?: NullableStringFieldUpdateOperationsInput | string | null
    Size_2?: NullableStringFieldUpdateOperationsInput | string | null
    Material?: NullableStringFieldUpdateOperationsInput | string | null
    Case?: NullableStringFieldUpdateOperationsInput | string | null
    Lifecycle?: NullableStringFieldUpdateOperationsInput | string | null
    KeyItem?: NullableStringFieldUpdateOperationsInput | string | null
    GS_Contents?: NullableStringFieldUpdateOperationsInput | string | null
    FST_GLB?: NullableStringFieldUpdateOperationsInput | string | null
    FST_CN?: NullableStringFieldUpdateOperationsInput | string | null
    FST_HK?: NullableStringFieldUpdateOperationsInput | string | null
    FST_Alt?: NullableStringFieldUpdateOperationsInput | string | null
    Set_CN?: NullableStringFieldUpdateOperationsInput | string | null
    Set_GLB?: NullableStringFieldUpdateOperationsInput | string | null
    Set_HK?: NullableStringFieldUpdateOperationsInput | string | null
    Push_CN?: NullableStringFieldUpdateOperationsInput | string | null
    Push_HK?: NullableStringFieldUpdateOperationsInput | string | null
    MKD_GLB?: NullableStringFieldUpdateOperationsInput | string | null
    MKD_CN?: NullableStringFieldUpdateOperationsInput | string | null
    MKD_HK?: NullableStringFieldUpdateOperationsInput | string | null
    SAS_GLB?: NullableStringFieldUpdateOperationsInput | string | null
    SAS_CN?: NullableStringFieldUpdateOperationsInput | string | null
    SAS_HK?: NullableStringFieldUpdateOperationsInput | string | null
    CNTier_LM?: NullableStringFieldUpdateOperationsInput | string | null
    CNTier_TR?: NullableStringFieldUpdateOperationsInput | string | null
    CNTier_FA?: NullableStringFieldUpdateOperationsInput | string | null
    CNTier_OT?: NullableStringFieldUpdateOperationsInput | string | null
    CNTier_EC?: NullableStringFieldUpdateOperationsInput | string | null
    HKTier_BA?: NullableStringFieldUpdateOperationsInput | string | null
    HKTier_FA?: NullableStringFieldUpdateOperationsInput | string | null
    UPAS_Global?: NullableStringFieldUpdateOperationsInput | string | null
    UPAS_CNBuy?: NullableStringFieldUpdateOperationsInput | string | null
    UPAS_HKBuy?: NullableStringFieldUpdateOperationsInput | string | null
    UPAS_CN?: NullableStringFieldUpdateOperationsInput | string | null
    UPAS_HK?: NullableStringFieldUpdateOperationsInput | string | null
    UPAS_CNFA?: NullableStringFieldUpdateOperationsInput | string | null
    UPAS_CNBA?: NullableStringFieldUpdateOperationsInput | string | null
    UPAS_CNEC?: NullableStringFieldUpdateOperationsInput | string | null
    UPAS_HKFA?: NullableStringFieldUpdateOperationsInput | string | null
    UPAS_HKBA?: NullableStringFieldUpdateOperationsInput | string | null
    BuyPath?: NullableStringFieldUpdateOperationsInput | string | null
    US_MSRP?: NullableStringFieldUpdateOperationsInput | string | null
    CN_MSRP?: NullableStringFieldUpdateOperationsInput | string | null
    CN_Ticket?: NullableStringFieldUpdateOperationsInput | string | null
    CN_StoreCost?: NullableStringFieldUpdateOperationsInput | string | null
    HK_MSRP?: NullableStringFieldUpdateOperationsInput | string | null
    HK_Ticket?: NullableStringFieldUpdateOperationsInput | string | null
    HK_StoreCost?: NullableStringFieldUpdateOperationsInput | string | null
    FA_Bundle?: NullableStringFieldUpdateOperationsInput | string | null
    BA_Bundle?: NullableStringFieldUpdateOperationsInput | string | null
    RegStatus?: NullableStringFieldUpdateOperationsInput | string | null
    Unblocked?: NullableStringFieldUpdateOperationsInput | string | null
    PDP?: NullableStringFieldUpdateOperationsInput | string | null
    Comment?: NullableStringFieldUpdateOperationsInput | string | null
    DmdUnit?: NullableStringFieldUpdateOperationsInput | string | null
    Matchback_CN?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    Article?: SortOrder
    Description?: SortOrder
    UPC?: SortOrder
    MerchID?: SortOrder
    StyleID?: SortOrder
    Style_Desc?: SortOrder
    RootStyle?: SortOrder
    Brand?: SortOrder
    Sector?: SortOrder
    Category?: SortOrder
    SubBrand?: SortOrder
    MP_A_SubBrand?: SortOrder
    Collection?: SortOrder
    Class?: SortOrder
    SubClass?: SortOrder
    MasterStyleID?: SortOrder
    MasterStyle_Desc?: SortOrder
    Choice_Code?: SortOrder
    Choice_Desc?: SortOrder
    Color?: SortOrder
    EC_Color?: SortOrder
    U_ChoiceDesc?: SortOrder
    U_Form?: SortOrder
    Size?: SortOrder
    Size_1?: SortOrder
    Size_2?: SortOrder
    Material?: SortOrder
    Case?: SortOrder
    Lifecycle?: SortOrder
    KeyItem?: SortOrder
    GS_Contents?: SortOrder
    FST_GLB?: SortOrder
    FST_CN?: SortOrder
    FST_HK?: SortOrder
    FST_Alt?: SortOrder
    Set_CN?: SortOrder
    Set_GLB?: SortOrder
    Set_HK?: SortOrder
    Push_CN?: SortOrder
    Push_HK?: SortOrder
    MKD_GLB?: SortOrder
    MKD_CN?: SortOrder
    MKD_HK?: SortOrder
    SAS_GLB?: SortOrder
    SAS_CN?: SortOrder
    SAS_HK?: SortOrder
    CNTier_LM?: SortOrder
    CNTier_TR?: SortOrder
    CNTier_FA?: SortOrder
    CNTier_OT?: SortOrder
    CNTier_EC?: SortOrder
    HKTier_BA?: SortOrder
    HKTier_FA?: SortOrder
    UPAS_Global?: SortOrder
    UPAS_CNBuy?: SortOrder
    UPAS_HKBuy?: SortOrder
    UPAS_CN?: SortOrder
    UPAS_HK?: SortOrder
    UPAS_CNFA?: SortOrder
    UPAS_CNBA?: SortOrder
    UPAS_CNEC?: SortOrder
    UPAS_HKFA?: SortOrder
    UPAS_HKBA?: SortOrder
    BuyPath?: SortOrder
    US_MSRP?: SortOrder
    CN_MSRP?: SortOrder
    CN_Ticket?: SortOrder
    CN_StoreCost?: SortOrder
    HK_MSRP?: SortOrder
    HK_Ticket?: SortOrder
    HK_StoreCost?: SortOrder
    FA_Bundle?: SortOrder
    BA_Bundle?: SortOrder
    RegStatus?: SortOrder
    Unblocked?: SortOrder
    PDP?: SortOrder
    Comment?: SortOrder
    DmdUnit?: SortOrder
    Matchback_CN?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    Article?: SortOrder
    Description?: SortOrder
    UPC?: SortOrder
    MerchID?: SortOrder
    StyleID?: SortOrder
    Style_Desc?: SortOrder
    RootStyle?: SortOrder
    Brand?: SortOrder
    Sector?: SortOrder
    Category?: SortOrder
    SubBrand?: SortOrder
    MP_A_SubBrand?: SortOrder
    Collection?: SortOrder
    Class?: SortOrder
    SubClass?: SortOrder
    MasterStyleID?: SortOrder
    MasterStyle_Desc?: SortOrder
    Choice_Code?: SortOrder
    Choice_Desc?: SortOrder
    Color?: SortOrder
    EC_Color?: SortOrder
    U_ChoiceDesc?: SortOrder
    U_Form?: SortOrder
    Size?: SortOrder
    Size_1?: SortOrder
    Size_2?: SortOrder
    Material?: SortOrder
    Case?: SortOrder
    Lifecycle?: SortOrder
    KeyItem?: SortOrder
    GS_Contents?: SortOrder
    FST_GLB?: SortOrder
    FST_CN?: SortOrder
    FST_HK?: SortOrder
    FST_Alt?: SortOrder
    Set_CN?: SortOrder
    Set_GLB?: SortOrder
    Set_HK?: SortOrder
    Push_CN?: SortOrder
    Push_HK?: SortOrder
    MKD_GLB?: SortOrder
    MKD_CN?: SortOrder
    MKD_HK?: SortOrder
    SAS_GLB?: SortOrder
    SAS_CN?: SortOrder
    SAS_HK?: SortOrder
    CNTier_LM?: SortOrder
    CNTier_TR?: SortOrder
    CNTier_FA?: SortOrder
    CNTier_OT?: SortOrder
    CNTier_EC?: SortOrder
    HKTier_BA?: SortOrder
    HKTier_FA?: SortOrder
    UPAS_Global?: SortOrder
    UPAS_CNBuy?: SortOrder
    UPAS_HKBuy?: SortOrder
    UPAS_CN?: SortOrder
    UPAS_HK?: SortOrder
    UPAS_CNFA?: SortOrder
    UPAS_CNBA?: SortOrder
    UPAS_CNEC?: SortOrder
    UPAS_HKFA?: SortOrder
    UPAS_HKBA?: SortOrder
    BuyPath?: SortOrder
    US_MSRP?: SortOrder
    CN_MSRP?: SortOrder
    CN_Ticket?: SortOrder
    CN_StoreCost?: SortOrder
    HK_MSRP?: SortOrder
    HK_Ticket?: SortOrder
    HK_StoreCost?: SortOrder
    FA_Bundle?: SortOrder
    BA_Bundle?: SortOrder
    RegStatus?: SortOrder
    Unblocked?: SortOrder
    PDP?: SortOrder
    Comment?: SortOrder
    DmdUnit?: SortOrder
    Matchback_CN?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    Article?: SortOrder
    Description?: SortOrder
    UPC?: SortOrder
    MerchID?: SortOrder
    StyleID?: SortOrder
    Style_Desc?: SortOrder
    RootStyle?: SortOrder
    Brand?: SortOrder
    Sector?: SortOrder
    Category?: SortOrder
    SubBrand?: SortOrder
    MP_A_SubBrand?: SortOrder
    Collection?: SortOrder
    Class?: SortOrder
    SubClass?: SortOrder
    MasterStyleID?: SortOrder
    MasterStyle_Desc?: SortOrder
    Choice_Code?: SortOrder
    Choice_Desc?: SortOrder
    Color?: SortOrder
    EC_Color?: SortOrder
    U_ChoiceDesc?: SortOrder
    U_Form?: SortOrder
    Size?: SortOrder
    Size_1?: SortOrder
    Size_2?: SortOrder
    Material?: SortOrder
    Case?: SortOrder
    Lifecycle?: SortOrder
    KeyItem?: SortOrder
    GS_Contents?: SortOrder
    FST_GLB?: SortOrder
    FST_CN?: SortOrder
    FST_HK?: SortOrder
    FST_Alt?: SortOrder
    Set_CN?: SortOrder
    Set_GLB?: SortOrder
    Set_HK?: SortOrder
    Push_CN?: SortOrder
    Push_HK?: SortOrder
    MKD_GLB?: SortOrder
    MKD_CN?: SortOrder
    MKD_HK?: SortOrder
    SAS_GLB?: SortOrder
    SAS_CN?: SortOrder
    SAS_HK?: SortOrder
    CNTier_LM?: SortOrder
    CNTier_TR?: SortOrder
    CNTier_FA?: SortOrder
    CNTier_OT?: SortOrder
    CNTier_EC?: SortOrder
    HKTier_BA?: SortOrder
    HKTier_FA?: SortOrder
    UPAS_Global?: SortOrder
    UPAS_CNBuy?: SortOrder
    UPAS_HKBuy?: SortOrder
    UPAS_CN?: SortOrder
    UPAS_HK?: SortOrder
    UPAS_CNFA?: SortOrder
    UPAS_CNBA?: SortOrder
    UPAS_CNEC?: SortOrder
    UPAS_HKFA?: SortOrder
    UPAS_HKBA?: SortOrder
    BuyPath?: SortOrder
    US_MSRP?: SortOrder
    CN_MSRP?: SortOrder
    CN_Ticket?: SortOrder
    CN_StoreCost?: SortOrder
    HK_MSRP?: SortOrder
    HK_Ticket?: SortOrder
    HK_StoreCost?: SortOrder
    FA_Bundle?: SortOrder
    BA_Bundle?: SortOrder
    RegStatus?: SortOrder
    Unblocked?: SortOrder
    PDP?: SortOrder
    Comment?: SortOrder
    DmdUnit?: SortOrder
    Matchback_CN?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}