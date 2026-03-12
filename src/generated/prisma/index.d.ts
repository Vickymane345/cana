
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Deposit
 * 
 */
export type Deposit = $Result.DefaultSelection<Prisma.$DepositPayload>
/**
 * Model Investment
 * 
 */
export type Investment = $Result.DefaultSelection<Prisma.$InvestmentPayload>
/**
 * Model Transaction
 * 
 */
export type Transaction = $Result.DefaultSelection<Prisma.$TransactionPayload>
/**
 * Model Withdrawal
 * 
 */
export type Withdrawal = $Result.DefaultSelection<Prisma.$WithdrawalPayload>
/**
 * Model Referral
 * 
 */
export type Referral = $Result.DefaultSelection<Prisma.$ReferralPayload>
/**
 * Model RewardLedger
 * 
 */
export type RewardLedger = $Result.DefaultSelection<Prisma.$RewardLedgerPayload>
/**
 * Model Ticket
 * 
 */
export type Ticket = $Result.DefaultSelection<Prisma.$TicketPayload>
/**
 * Model Message
 * 
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>
/**
 * Model ReferralReward
 * 
 */
export type ReferralReward = $Result.DefaultSelection<Prisma.$ReferralRewardPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>
/**
 * Model PriceAlert
 * 
 */
export type PriceAlert = $Result.DefaultSelection<Prisma.$PriceAlertPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.deposit`: Exposes CRUD operations for the **Deposit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Deposits
    * const deposits = await prisma.deposit.findMany()
    * ```
    */
  get deposit(): Prisma.DepositDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.investment`: Exposes CRUD operations for the **Investment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Investments
    * const investments = await prisma.investment.findMany()
    * ```
    */
  get investment(): Prisma.InvestmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **Transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.TransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.withdrawal`: Exposes CRUD operations for the **Withdrawal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Withdrawals
    * const withdrawals = await prisma.withdrawal.findMany()
    * ```
    */
  get withdrawal(): Prisma.WithdrawalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.referral`: Exposes CRUD operations for the **Referral** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Referrals
    * const referrals = await prisma.referral.findMany()
    * ```
    */
  get referral(): Prisma.ReferralDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rewardLedger`: Exposes CRUD operations for the **RewardLedger** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RewardLedgers
    * const rewardLedgers = await prisma.rewardLedger.findMany()
    * ```
    */
  get rewardLedger(): Prisma.RewardLedgerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ticket`: Exposes CRUD operations for the **Ticket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tickets
    * const tickets = await prisma.ticket.findMany()
    * ```
    */
  get ticket(): Prisma.TicketDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.referralReward`: Exposes CRUD operations for the **ReferralReward** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReferralRewards
    * const referralRewards = await prisma.referralReward.findMany()
    * ```
    */
  get referralReward(): Prisma.ReferralRewardDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.priceAlert`: Exposes CRUD operations for the **PriceAlert** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PriceAlerts
    * const priceAlerts = await prisma.priceAlert.findMany()
    * ```
    */
  get priceAlert(): Prisma.PriceAlertDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    User: 'User',
    Deposit: 'Deposit',
    Investment: 'Investment',
    Transaction: 'Transaction',
    Withdrawal: 'Withdrawal',
    Referral: 'Referral',
    RewardLedger: 'RewardLedger',
    Ticket: 'Ticket',
    Message: 'Message',
    ReferralReward: 'ReferralReward',
    Notification: 'Notification',
    PriceAlert: 'PriceAlert'
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
      modelProps: "user" | "deposit" | "investment" | "transaction" | "withdrawal" | "referral" | "rewardLedger" | "ticket" | "message" | "referralReward" | "notification" | "priceAlert"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Deposit: {
        payload: Prisma.$DepositPayload<ExtArgs>
        fields: Prisma.DepositFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DepositFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DepositFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPayload>
          }
          findFirst: {
            args: Prisma.DepositFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DepositFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPayload>
          }
          findMany: {
            args: Prisma.DepositFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPayload>[]
          }
          create: {
            args: Prisma.DepositCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPayload>
          }
          createMany: {
            args: Prisma.DepositCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DepositCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPayload>[]
          }
          delete: {
            args: Prisma.DepositDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPayload>
          }
          update: {
            args: Prisma.DepositUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPayload>
          }
          deleteMany: {
            args: Prisma.DepositDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DepositUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DepositUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPayload>[]
          }
          upsert: {
            args: Prisma.DepositUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPayload>
          }
          aggregate: {
            args: Prisma.DepositAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeposit>
          }
          groupBy: {
            args: Prisma.DepositGroupByArgs<ExtArgs>
            result: $Utils.Optional<DepositGroupByOutputType>[]
          }
          count: {
            args: Prisma.DepositCountArgs<ExtArgs>
            result: $Utils.Optional<DepositCountAggregateOutputType> | number
          }
        }
      }
      Investment: {
        payload: Prisma.$InvestmentPayload<ExtArgs>
        fields: Prisma.InvestmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvestmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvestmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload>
          }
          findFirst: {
            args: Prisma.InvestmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvestmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload>
          }
          findMany: {
            args: Prisma.InvestmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload>[]
          }
          create: {
            args: Prisma.InvestmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload>
          }
          createMany: {
            args: Prisma.InvestmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InvestmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload>[]
          }
          delete: {
            args: Prisma.InvestmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload>
          }
          update: {
            args: Prisma.InvestmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload>
          }
          deleteMany: {
            args: Prisma.InvestmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvestmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InvestmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload>[]
          }
          upsert: {
            args: Prisma.InvestmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload>
          }
          aggregate: {
            args: Prisma.InvestmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvestment>
          }
          groupBy: {
            args: Prisma.InvestmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvestmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvestmentCountArgs<ExtArgs>
            result: $Utils.Optional<InvestmentCountAggregateOutputType> | number
          }
        }
      }
      Transaction: {
        payload: Prisma.$TransactionPayload<ExtArgs>
        fields: Prisma.TransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findFirst: {
            args: Prisma.TransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findMany: {
            args: Prisma.TransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          create: {
            args: Prisma.TransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          createMany: {
            args: Prisma.TransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          delete: {
            args: Prisma.TransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          update: {
            args: Prisma.TransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          deleteMany: {
            args: Prisma.TransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          upsert: {
            args: Prisma.TransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.TransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
          }
        }
      }
      Withdrawal: {
        payload: Prisma.$WithdrawalPayload<ExtArgs>
        fields: Prisma.WithdrawalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WithdrawalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WithdrawalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawalPayload>
          }
          findFirst: {
            args: Prisma.WithdrawalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WithdrawalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawalPayload>
          }
          findMany: {
            args: Prisma.WithdrawalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawalPayload>[]
          }
          create: {
            args: Prisma.WithdrawalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawalPayload>
          }
          createMany: {
            args: Prisma.WithdrawalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WithdrawalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawalPayload>[]
          }
          delete: {
            args: Prisma.WithdrawalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawalPayload>
          }
          update: {
            args: Prisma.WithdrawalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawalPayload>
          }
          deleteMany: {
            args: Prisma.WithdrawalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WithdrawalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WithdrawalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawalPayload>[]
          }
          upsert: {
            args: Prisma.WithdrawalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawalPayload>
          }
          aggregate: {
            args: Prisma.WithdrawalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWithdrawal>
          }
          groupBy: {
            args: Prisma.WithdrawalGroupByArgs<ExtArgs>
            result: $Utils.Optional<WithdrawalGroupByOutputType>[]
          }
          count: {
            args: Prisma.WithdrawalCountArgs<ExtArgs>
            result: $Utils.Optional<WithdrawalCountAggregateOutputType> | number
          }
        }
      }
      Referral: {
        payload: Prisma.$ReferralPayload<ExtArgs>
        fields: Prisma.ReferralFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReferralFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReferralFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload>
          }
          findFirst: {
            args: Prisma.ReferralFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReferralFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload>
          }
          findMany: {
            args: Prisma.ReferralFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload>[]
          }
          create: {
            args: Prisma.ReferralCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload>
          }
          createMany: {
            args: Prisma.ReferralCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReferralCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload>[]
          }
          delete: {
            args: Prisma.ReferralDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload>
          }
          update: {
            args: Prisma.ReferralUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload>
          }
          deleteMany: {
            args: Prisma.ReferralDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReferralUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReferralUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload>[]
          }
          upsert: {
            args: Prisma.ReferralUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload>
          }
          aggregate: {
            args: Prisma.ReferralAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReferral>
          }
          groupBy: {
            args: Prisma.ReferralGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReferralGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReferralCountArgs<ExtArgs>
            result: $Utils.Optional<ReferralCountAggregateOutputType> | number
          }
        }
      }
      RewardLedger: {
        payload: Prisma.$RewardLedgerPayload<ExtArgs>
        fields: Prisma.RewardLedgerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RewardLedgerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardLedgerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RewardLedgerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardLedgerPayload>
          }
          findFirst: {
            args: Prisma.RewardLedgerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardLedgerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RewardLedgerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardLedgerPayload>
          }
          findMany: {
            args: Prisma.RewardLedgerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardLedgerPayload>[]
          }
          create: {
            args: Prisma.RewardLedgerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardLedgerPayload>
          }
          createMany: {
            args: Prisma.RewardLedgerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RewardLedgerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardLedgerPayload>[]
          }
          delete: {
            args: Prisma.RewardLedgerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardLedgerPayload>
          }
          update: {
            args: Prisma.RewardLedgerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardLedgerPayload>
          }
          deleteMany: {
            args: Prisma.RewardLedgerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RewardLedgerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RewardLedgerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardLedgerPayload>[]
          }
          upsert: {
            args: Prisma.RewardLedgerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardLedgerPayload>
          }
          aggregate: {
            args: Prisma.RewardLedgerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRewardLedger>
          }
          groupBy: {
            args: Prisma.RewardLedgerGroupByArgs<ExtArgs>
            result: $Utils.Optional<RewardLedgerGroupByOutputType>[]
          }
          count: {
            args: Prisma.RewardLedgerCountArgs<ExtArgs>
            result: $Utils.Optional<RewardLedgerCountAggregateOutputType> | number
          }
        }
      }
      Ticket: {
        payload: Prisma.$TicketPayload<ExtArgs>
        fields: Prisma.TicketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findFirst: {
            args: Prisma.TicketFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findMany: {
            args: Prisma.TicketFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          create: {
            args: Prisma.TicketCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          createMany: {
            args: Prisma.TicketCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TicketCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          delete: {
            args: Prisma.TicketDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          update: {
            args: Prisma.TicketUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          deleteMany: {
            args: Prisma.TicketDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TicketUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TicketUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          upsert: {
            args: Prisma.TicketUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          aggregate: {
            args: Prisma.TicketAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicket>
          }
          groupBy: {
            args: Prisma.TicketGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketGroupByOutputType>[]
          }
          count: {
            args: Prisma.TicketCountArgs<ExtArgs>
            result: $Utils.Optional<TicketCountAggregateOutputType> | number
          }
        }
      }
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
      ReferralReward: {
        payload: Prisma.$ReferralRewardPayload<ExtArgs>
        fields: Prisma.ReferralRewardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReferralRewardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralRewardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReferralRewardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralRewardPayload>
          }
          findFirst: {
            args: Prisma.ReferralRewardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralRewardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReferralRewardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralRewardPayload>
          }
          findMany: {
            args: Prisma.ReferralRewardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralRewardPayload>[]
          }
          create: {
            args: Prisma.ReferralRewardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralRewardPayload>
          }
          createMany: {
            args: Prisma.ReferralRewardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReferralRewardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralRewardPayload>[]
          }
          delete: {
            args: Prisma.ReferralRewardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralRewardPayload>
          }
          update: {
            args: Prisma.ReferralRewardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralRewardPayload>
          }
          deleteMany: {
            args: Prisma.ReferralRewardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReferralRewardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReferralRewardUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralRewardPayload>[]
          }
          upsert: {
            args: Prisma.ReferralRewardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralRewardPayload>
          }
          aggregate: {
            args: Prisma.ReferralRewardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReferralReward>
          }
          groupBy: {
            args: Prisma.ReferralRewardGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReferralRewardGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReferralRewardCountArgs<ExtArgs>
            result: $Utils.Optional<ReferralRewardCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
      PriceAlert: {
        payload: Prisma.$PriceAlertPayload<ExtArgs>
        fields: Prisma.PriceAlertFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PriceAlertFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceAlertPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PriceAlertFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceAlertPayload>
          }
          findFirst: {
            args: Prisma.PriceAlertFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceAlertPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PriceAlertFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceAlertPayload>
          }
          findMany: {
            args: Prisma.PriceAlertFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceAlertPayload>[]
          }
          create: {
            args: Prisma.PriceAlertCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceAlertPayload>
          }
          createMany: {
            args: Prisma.PriceAlertCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PriceAlertCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceAlertPayload>[]
          }
          delete: {
            args: Prisma.PriceAlertDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceAlertPayload>
          }
          update: {
            args: Prisma.PriceAlertUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceAlertPayload>
          }
          deleteMany: {
            args: Prisma.PriceAlertDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PriceAlertUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PriceAlertUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceAlertPayload>[]
          }
          upsert: {
            args: Prisma.PriceAlertUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceAlertPayload>
          }
          aggregate: {
            args: Prisma.PriceAlertAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePriceAlert>
          }
          groupBy: {
            args: Prisma.PriceAlertGroupByArgs<ExtArgs>
            result: $Utils.Optional<PriceAlertGroupByOutputType>[]
          }
          count: {
            args: Prisma.PriceAlertCountArgs<ExtArgs>
            result: $Utils.Optional<PriceAlertCountAggregateOutputType> | number
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    user?: UserOmit
    deposit?: DepositOmit
    investment?: InvestmentOmit
    transaction?: TransactionOmit
    withdrawal?: WithdrawalOmit
    referral?: ReferralOmit
    rewardLedger?: RewardLedgerOmit
    ticket?: TicketOmit
    message?: MessageOmit
    referralReward?: ReferralRewardOmit
    notification?: NotificationOmit
    priceAlert?: PriceAlertOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    deposits: number
    investments: number
    transactions: number
    withdrawals: number
    referrals: number
    referredUsers: number
    rewardLedger: number
    referralRewards: number
    referralRewardsReceived: number
    tickets: number
    notifications: number
    messages: number
    priceAlerts: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deposits?: boolean | UserCountOutputTypeCountDepositsArgs
    investments?: boolean | UserCountOutputTypeCountInvestmentsArgs
    transactions?: boolean | UserCountOutputTypeCountTransactionsArgs
    withdrawals?: boolean | UserCountOutputTypeCountWithdrawalsArgs
    referrals?: boolean | UserCountOutputTypeCountReferralsArgs
    referredUsers?: boolean | UserCountOutputTypeCountReferredUsersArgs
    rewardLedger?: boolean | UserCountOutputTypeCountRewardLedgerArgs
    referralRewards?: boolean | UserCountOutputTypeCountReferralRewardsArgs
    referralRewardsReceived?: boolean | UserCountOutputTypeCountReferralRewardsReceivedArgs
    tickets?: boolean | UserCountOutputTypeCountTicketsArgs
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs
    messages?: boolean | UserCountOutputTypeCountMessagesArgs
    priceAlerts?: boolean | UserCountOutputTypeCountPriceAlertsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDepositsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepositWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountInvestmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvestmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWithdrawalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WithdrawalWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReferralsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReferralWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReferredUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRewardLedgerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RewardLedgerWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReferralRewardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReferralRewardWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReferralRewardsReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReferralRewardWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPriceAlertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PriceAlertWhereInput
  }


  /**
   * Count Type TicketCountOutputType
   */

  export type TicketCountOutputType = {
    messages: number
  }

  export type TicketCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | TicketCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * TicketCountOutputType without action
   */
  export type TicketCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketCountOutputType
     */
    select?: TicketCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TicketCountOutputType without action
   */
  export type TicketCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    mainBalance: number | null
    investmentBalance: number | null
    totalEarn: number | null
    totalDeposit: number | null
    totalWithdrawals: number | null
    roi: number | null
    redeemedRoi: number | null
    speedInvest: number | null
    completed: number | null
    interestBalance: number | null
    rewardPoints: number | null
    totalReferrals: number | null
    referredById: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    mainBalance: number | null
    investmentBalance: number | null
    totalEarn: number | null
    totalDeposit: number | null
    totalWithdrawals: number | null
    roi: number | null
    redeemedRoi: number | null
    speedInvest: number | null
    completed: number | null
    interestBalance: number | null
    rewardPoints: number | null
    totalReferrals: number | null
    referredById: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    username: string | null
    email: string | null
    password: string | null
    phone: string | null
    mainBalance: number | null
    investmentBalance: number | null
    totalEarn: number | null
    totalDeposit: number | null
    totalWithdrawals: number | null
    roi: number | null
    redeemedRoi: number | null
    speedInvest: number | null
    completed: number | null
    interestBalance: number | null
    rewardPoints: number | null
    totalReferrals: number | null
    referredById: number | null
    privateKeyHash: string | null
    termsAcceptedAt: Date | null
    termsAcceptedIP: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    username: string | null
    email: string | null
    password: string | null
    phone: string | null
    mainBalance: number | null
    investmentBalance: number | null
    totalEarn: number | null
    totalDeposit: number | null
    totalWithdrawals: number | null
    roi: number | null
    redeemedRoi: number | null
    speedInvest: number | null
    completed: number | null
    interestBalance: number | null
    rewardPoints: number | null
    totalReferrals: number | null
    referredById: number | null
    privateKeyHash: string | null
    termsAcceptedAt: Date | null
    termsAcceptedIP: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    username: number
    email: number
    password: number
    phone: number
    mainBalance: number
    investmentBalance: number
    totalEarn: number
    totalDeposit: number
    totalWithdrawals: number
    roi: number
    redeemedRoi: number
    speedInvest: number
    completed: number
    interestBalance: number
    rewardPoints: number
    totalReferrals: number
    referredById: number
    privateKeyHash: number
    termsAcceptedAt: number
    termsAcceptedIP: number
    createdAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    mainBalance?: true
    investmentBalance?: true
    totalEarn?: true
    totalDeposit?: true
    totalWithdrawals?: true
    roi?: true
    redeemedRoi?: true
    speedInvest?: true
    completed?: true
    interestBalance?: true
    rewardPoints?: true
    totalReferrals?: true
    referredById?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    mainBalance?: true
    investmentBalance?: true
    totalEarn?: true
    totalDeposit?: true
    totalWithdrawals?: true
    roi?: true
    redeemedRoi?: true
    speedInvest?: true
    completed?: true
    interestBalance?: true
    rewardPoints?: true
    totalReferrals?: true
    referredById?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    username?: true
    email?: true
    password?: true
    phone?: true
    mainBalance?: true
    investmentBalance?: true
    totalEarn?: true
    totalDeposit?: true
    totalWithdrawals?: true
    roi?: true
    redeemedRoi?: true
    speedInvest?: true
    completed?: true
    interestBalance?: true
    rewardPoints?: true
    totalReferrals?: true
    referredById?: true
    privateKeyHash?: true
    termsAcceptedAt?: true
    termsAcceptedIP?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    username?: true
    email?: true
    password?: true
    phone?: true
    mainBalance?: true
    investmentBalance?: true
    totalEarn?: true
    totalDeposit?: true
    totalWithdrawals?: true
    roi?: true
    redeemedRoi?: true
    speedInvest?: true
    completed?: true
    interestBalance?: true
    rewardPoints?: true
    totalReferrals?: true
    referredById?: true
    privateKeyHash?: true
    termsAcceptedAt?: true
    termsAcceptedIP?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    username?: true
    email?: true
    password?: true
    phone?: true
    mainBalance?: true
    investmentBalance?: true
    totalEarn?: true
    totalDeposit?: true
    totalWithdrawals?: true
    roi?: true
    redeemedRoi?: true
    speedInvest?: true
    completed?: true
    interestBalance?: true
    rewardPoints?: true
    totalReferrals?: true
    referredById?: true
    privateKeyHash?: true
    termsAcceptedAt?: true
    termsAcceptedIP?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    firstName: string
    lastName: string
    username: string
    email: string
    password: string
    phone: string | null
    mainBalance: number
    investmentBalance: number
    totalEarn: number
    totalDeposit: number
    totalWithdrawals: number
    roi: number
    redeemedRoi: number
    speedInvest: number
    completed: number
    interestBalance: number
    rewardPoints: number
    totalReferrals: number
    referredById: number | null
    privateKeyHash: string | null
    termsAcceptedAt: Date | null
    termsAcceptedIP: string | null
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    mainBalance?: boolean
    investmentBalance?: boolean
    totalEarn?: boolean
    totalDeposit?: boolean
    totalWithdrawals?: boolean
    roi?: boolean
    redeemedRoi?: boolean
    speedInvest?: boolean
    completed?: boolean
    interestBalance?: boolean
    rewardPoints?: boolean
    totalReferrals?: boolean
    referredById?: boolean
    privateKeyHash?: boolean
    termsAcceptedAt?: boolean
    termsAcceptedIP?: boolean
    createdAt?: boolean
    deposits?: boolean | User$depositsArgs<ExtArgs>
    investments?: boolean | User$investmentsArgs<ExtArgs>
    transactions?: boolean | User$transactionsArgs<ExtArgs>
    withdrawals?: boolean | User$withdrawalsArgs<ExtArgs>
    referrals?: boolean | User$referralsArgs<ExtArgs>
    referredUsers?: boolean | User$referredUsersArgs<ExtArgs>
    referrer?: boolean | User$referrerArgs<ExtArgs>
    rewardLedger?: boolean | User$rewardLedgerArgs<ExtArgs>
    referralRewards?: boolean | User$referralRewardsArgs<ExtArgs>
    referralRewardsReceived?: boolean | User$referralRewardsReceivedArgs<ExtArgs>
    tickets?: boolean | User$ticketsArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    messages?: boolean | User$messagesArgs<ExtArgs>
    priceAlerts?: boolean | User$priceAlertsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    mainBalance?: boolean
    investmentBalance?: boolean
    totalEarn?: boolean
    totalDeposit?: boolean
    totalWithdrawals?: boolean
    roi?: boolean
    redeemedRoi?: boolean
    speedInvest?: boolean
    completed?: boolean
    interestBalance?: boolean
    rewardPoints?: boolean
    totalReferrals?: boolean
    referredById?: boolean
    privateKeyHash?: boolean
    termsAcceptedAt?: boolean
    termsAcceptedIP?: boolean
    createdAt?: boolean
    referrer?: boolean | User$referrerArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    mainBalance?: boolean
    investmentBalance?: boolean
    totalEarn?: boolean
    totalDeposit?: boolean
    totalWithdrawals?: boolean
    roi?: boolean
    redeemedRoi?: boolean
    speedInvest?: boolean
    completed?: boolean
    interestBalance?: boolean
    rewardPoints?: boolean
    totalReferrals?: boolean
    referredById?: boolean
    privateKeyHash?: boolean
    termsAcceptedAt?: boolean
    termsAcceptedIP?: boolean
    createdAt?: boolean
    referrer?: boolean | User$referrerArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    mainBalance?: boolean
    investmentBalance?: boolean
    totalEarn?: boolean
    totalDeposit?: boolean
    totalWithdrawals?: boolean
    roi?: boolean
    redeemedRoi?: boolean
    speedInvest?: boolean
    completed?: boolean
    interestBalance?: boolean
    rewardPoints?: boolean
    totalReferrals?: boolean
    referredById?: boolean
    privateKeyHash?: boolean
    termsAcceptedAt?: boolean
    termsAcceptedIP?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "username" | "email" | "password" | "phone" | "mainBalance" | "investmentBalance" | "totalEarn" | "totalDeposit" | "totalWithdrawals" | "roi" | "redeemedRoi" | "speedInvest" | "completed" | "interestBalance" | "rewardPoints" | "totalReferrals" | "referredById" | "privateKeyHash" | "termsAcceptedAt" | "termsAcceptedIP" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deposits?: boolean | User$depositsArgs<ExtArgs>
    investments?: boolean | User$investmentsArgs<ExtArgs>
    transactions?: boolean | User$transactionsArgs<ExtArgs>
    withdrawals?: boolean | User$withdrawalsArgs<ExtArgs>
    referrals?: boolean | User$referralsArgs<ExtArgs>
    referredUsers?: boolean | User$referredUsersArgs<ExtArgs>
    referrer?: boolean | User$referrerArgs<ExtArgs>
    rewardLedger?: boolean | User$rewardLedgerArgs<ExtArgs>
    referralRewards?: boolean | User$referralRewardsArgs<ExtArgs>
    referralRewardsReceived?: boolean | User$referralRewardsReceivedArgs<ExtArgs>
    tickets?: boolean | User$ticketsArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    messages?: boolean | User$messagesArgs<ExtArgs>
    priceAlerts?: boolean | User$priceAlertsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    referrer?: boolean | User$referrerArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    referrer?: boolean | User$referrerArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      deposits: Prisma.$DepositPayload<ExtArgs>[]
      investments: Prisma.$InvestmentPayload<ExtArgs>[]
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
      withdrawals: Prisma.$WithdrawalPayload<ExtArgs>[]
      referrals: Prisma.$ReferralPayload<ExtArgs>[]
      referredUsers: Prisma.$UserPayload<ExtArgs>[]
      referrer: Prisma.$UserPayload<ExtArgs> | null
      rewardLedger: Prisma.$RewardLedgerPayload<ExtArgs>[]
      referralRewards: Prisma.$ReferralRewardPayload<ExtArgs>[]
      referralRewardsReceived: Prisma.$ReferralRewardPayload<ExtArgs>[]
      tickets: Prisma.$TicketPayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
      messages: Prisma.$MessagePayload<ExtArgs>[]
      priceAlerts: Prisma.$PriceAlertPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      firstName: string
      lastName: string
      username: string
      email: string
      password: string
      phone: string | null
      mainBalance: number
      investmentBalance: number
      totalEarn: number
      totalDeposit: number
      totalWithdrawals: number
      roi: number
      redeemedRoi: number
      speedInvest: number
      completed: number
      interestBalance: number
      rewardPoints: number
      totalReferrals: number
      referredById: number | null
      privateKeyHash: string | null
      termsAcceptedAt: Date | null
      termsAcceptedIP: string | null
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    deposits<T extends User$depositsArgs<ExtArgs> = {}>(args?: Subset<T, User$depositsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    investments<T extends User$investmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$investmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transactions<T extends User$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    withdrawals<T extends User$withdrawalsArgs<ExtArgs> = {}>(args?: Subset<T, User$withdrawalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WithdrawalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    referrals<T extends User$referralsArgs<ExtArgs> = {}>(args?: Subset<T, User$referralsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    referredUsers<T extends User$referredUsersArgs<ExtArgs> = {}>(args?: Subset<T, User$referredUsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    referrer<T extends User$referrerArgs<ExtArgs> = {}>(args?: Subset<T, User$referrerArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    rewardLedger<T extends User$rewardLedgerArgs<ExtArgs> = {}>(args?: Subset<T, User$rewardLedgerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RewardLedgerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    referralRewards<T extends User$referralRewardsArgs<ExtArgs> = {}>(args?: Subset<T, User$referralRewardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferralRewardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    referralRewardsReceived<T extends User$referralRewardsReceivedArgs<ExtArgs> = {}>(args?: Subset<T, User$referralRewardsReceivedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferralRewardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tickets<T extends User$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, User$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends User$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    messages<T extends User$messagesArgs<ExtArgs> = {}>(args?: Subset<T, User$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    priceAlerts<T extends User$priceAlertsArgs<ExtArgs> = {}>(args?: Subset<T, User$priceAlertsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PriceAlertPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly mainBalance: FieldRef<"User", 'Float'>
    readonly investmentBalance: FieldRef<"User", 'Float'>
    readonly totalEarn: FieldRef<"User", 'Float'>
    readonly totalDeposit: FieldRef<"User", 'Float'>
    readonly totalWithdrawals: FieldRef<"User", 'Float'>
    readonly roi: FieldRef<"User", 'Float'>
    readonly redeemedRoi: FieldRef<"User", 'Float'>
    readonly speedInvest: FieldRef<"User", 'Float'>
    readonly completed: FieldRef<"User", 'Float'>
    readonly interestBalance: FieldRef<"User", 'Float'>
    readonly rewardPoints: FieldRef<"User", 'Float'>
    readonly totalReferrals: FieldRef<"User", 'Int'>
    readonly referredById: FieldRef<"User", 'Int'>
    readonly privateKeyHash: FieldRef<"User", 'String'>
    readonly termsAcceptedAt: FieldRef<"User", 'DateTime'>
    readonly termsAcceptedIP: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.deposits
   */
  export type User$depositsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deposit
     */
    omit?: DepositOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositInclude<ExtArgs> | null
    where?: DepositWhereInput
    orderBy?: DepositOrderByWithRelationInput | DepositOrderByWithRelationInput[]
    cursor?: DepositWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DepositScalarFieldEnum | DepositScalarFieldEnum[]
  }

  /**
   * User.investments
   */
  export type User$investmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    where?: InvestmentWhereInput
    orderBy?: InvestmentOrderByWithRelationInput | InvestmentOrderByWithRelationInput[]
    cursor?: InvestmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvestmentScalarFieldEnum | InvestmentScalarFieldEnum[]
  }

  /**
   * User.transactions
   */
  export type User$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * User.withdrawals
   */
  export type User$withdrawalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Withdrawal
     */
    select?: WithdrawalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Withdrawal
     */
    omit?: WithdrawalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawalInclude<ExtArgs> | null
    where?: WithdrawalWhereInput
    orderBy?: WithdrawalOrderByWithRelationInput | WithdrawalOrderByWithRelationInput[]
    cursor?: WithdrawalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WithdrawalScalarFieldEnum | WithdrawalScalarFieldEnum[]
  }

  /**
   * User.referrals
   */
  export type User$referralsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Referral
     */
    omit?: ReferralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
    where?: ReferralWhereInput
    orderBy?: ReferralOrderByWithRelationInput | ReferralOrderByWithRelationInput[]
    cursor?: ReferralWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReferralScalarFieldEnum | ReferralScalarFieldEnum[]
  }

  /**
   * User.referredUsers
   */
  export type User$referredUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User.referrer
   */
  export type User$referrerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * User.rewardLedger
   */
  export type User$rewardLedgerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardLedger
     */
    select?: RewardLedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RewardLedger
     */
    omit?: RewardLedgerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardLedgerInclude<ExtArgs> | null
    where?: RewardLedgerWhereInput
    orderBy?: RewardLedgerOrderByWithRelationInput | RewardLedgerOrderByWithRelationInput[]
    cursor?: RewardLedgerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RewardLedgerScalarFieldEnum | RewardLedgerScalarFieldEnum[]
  }

  /**
   * User.referralRewards
   */
  export type User$referralRewardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralReward
     */
    select?: ReferralRewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralReward
     */
    omit?: ReferralRewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralRewardInclude<ExtArgs> | null
    where?: ReferralRewardWhereInput
    orderBy?: ReferralRewardOrderByWithRelationInput | ReferralRewardOrderByWithRelationInput[]
    cursor?: ReferralRewardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReferralRewardScalarFieldEnum | ReferralRewardScalarFieldEnum[]
  }

  /**
   * User.referralRewardsReceived
   */
  export type User$referralRewardsReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralReward
     */
    select?: ReferralRewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralReward
     */
    omit?: ReferralRewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralRewardInclude<ExtArgs> | null
    where?: ReferralRewardWhereInput
    orderBy?: ReferralRewardOrderByWithRelationInput | ReferralRewardOrderByWithRelationInput[]
    cursor?: ReferralRewardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReferralRewardScalarFieldEnum | ReferralRewardScalarFieldEnum[]
  }

  /**
   * User.tickets
   */
  export type User$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * User.notifications
   */
  export type User$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * User.messages
   */
  export type User$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * User.priceAlerts
   */
  export type User$priceAlertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceAlert
     */
    select?: PriceAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceAlert
     */
    omit?: PriceAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceAlertInclude<ExtArgs> | null
    where?: PriceAlertWhereInput
    orderBy?: PriceAlertOrderByWithRelationInput | PriceAlertOrderByWithRelationInput[]
    cursor?: PriceAlertWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PriceAlertScalarFieldEnum | PriceAlertScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Deposit
   */

  export type AggregateDeposit = {
    _count: DepositCountAggregateOutputType | null
    _avg: DepositAvgAggregateOutputType | null
    _sum: DepositSumAggregateOutputType | null
    _min: DepositMinAggregateOutputType | null
    _max: DepositMaxAggregateOutputType | null
  }

  export type DepositAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    amount: number | null
  }

  export type DepositSumAggregateOutputType = {
    id: number | null
    userId: number | null
    amount: number | null
  }

  export type DepositMinAggregateOutputType = {
    id: number | null
    userId: number | null
    amount: number | null
    currency: string | null
    address: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DepositMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    amount: number | null
    currency: string | null
    address: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DepositCountAggregateOutputType = {
    id: number
    userId: number
    amount: number
    currency: number
    address: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DepositAvgAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
  }

  export type DepositSumAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
  }

  export type DepositMinAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    currency?: true
    address?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DepositMaxAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    currency?: true
    address?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DepositCountAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    currency?: true
    address?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DepositAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Deposit to aggregate.
     */
    where?: DepositWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deposits to fetch.
     */
    orderBy?: DepositOrderByWithRelationInput | DepositOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DepositWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deposits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deposits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Deposits
    **/
    _count?: true | DepositCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DepositAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DepositSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepositMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepositMaxAggregateInputType
  }

  export type GetDepositAggregateType<T extends DepositAggregateArgs> = {
        [P in keyof T & keyof AggregateDeposit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeposit[P]>
      : GetScalarType<T[P], AggregateDeposit[P]>
  }




  export type DepositGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepositWhereInput
    orderBy?: DepositOrderByWithAggregationInput | DepositOrderByWithAggregationInput[]
    by: DepositScalarFieldEnum[] | DepositScalarFieldEnum
    having?: DepositScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepositCountAggregateInputType | true
    _avg?: DepositAvgAggregateInputType
    _sum?: DepositSumAggregateInputType
    _min?: DepositMinAggregateInputType
    _max?: DepositMaxAggregateInputType
  }

  export type DepositGroupByOutputType = {
    id: number
    userId: number
    amount: number
    currency: string
    address: string
    status: string
    createdAt: Date
    updatedAt: Date
    _count: DepositCountAggregateOutputType | null
    _avg: DepositAvgAggregateOutputType | null
    _sum: DepositSumAggregateOutputType | null
    _min: DepositMinAggregateOutputType | null
    _max: DepositMaxAggregateOutputType | null
  }

  type GetDepositGroupByPayload<T extends DepositGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DepositGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepositGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepositGroupByOutputType[P]>
            : GetScalarType<T[P], DepositGroupByOutputType[P]>
        }
      >
    >


  export type DepositSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    currency?: boolean
    address?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deposit"]>

  export type DepositSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    currency?: boolean
    address?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deposit"]>

  export type DepositSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    currency?: boolean
    address?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deposit"]>

  export type DepositSelectScalar = {
    id?: boolean
    userId?: boolean
    amount?: boolean
    currency?: boolean
    address?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DepositOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "amount" | "currency" | "address" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["deposit"]>
  export type DepositInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DepositIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DepositIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DepositPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Deposit"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      amount: number
      currency: string
      address: string
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["deposit"]>
    composites: {}
  }

  type DepositGetPayload<S extends boolean | null | undefined | DepositDefaultArgs> = $Result.GetResult<Prisma.$DepositPayload, S>

  type DepositCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DepositFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DepositCountAggregateInputType | true
    }

  export interface DepositDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Deposit'], meta: { name: 'Deposit' } }
    /**
     * Find zero or one Deposit that matches the filter.
     * @param {DepositFindUniqueArgs} args - Arguments to find a Deposit
     * @example
     * // Get one Deposit
     * const deposit = await prisma.deposit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DepositFindUniqueArgs>(args: SelectSubset<T, DepositFindUniqueArgs<ExtArgs>>): Prisma__DepositClient<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Deposit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DepositFindUniqueOrThrowArgs} args - Arguments to find a Deposit
     * @example
     * // Get one Deposit
     * const deposit = await prisma.deposit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DepositFindUniqueOrThrowArgs>(args: SelectSubset<T, DepositFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DepositClient<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Deposit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositFindFirstArgs} args - Arguments to find a Deposit
     * @example
     * // Get one Deposit
     * const deposit = await prisma.deposit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DepositFindFirstArgs>(args?: SelectSubset<T, DepositFindFirstArgs<ExtArgs>>): Prisma__DepositClient<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Deposit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositFindFirstOrThrowArgs} args - Arguments to find a Deposit
     * @example
     * // Get one Deposit
     * const deposit = await prisma.deposit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DepositFindFirstOrThrowArgs>(args?: SelectSubset<T, DepositFindFirstOrThrowArgs<ExtArgs>>): Prisma__DepositClient<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Deposits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Deposits
     * const deposits = await prisma.deposit.findMany()
     * 
     * // Get first 10 Deposits
     * const deposits = await prisma.deposit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const depositWithIdOnly = await prisma.deposit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DepositFindManyArgs>(args?: SelectSubset<T, DepositFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Deposit.
     * @param {DepositCreateArgs} args - Arguments to create a Deposit.
     * @example
     * // Create one Deposit
     * const Deposit = await prisma.deposit.create({
     *   data: {
     *     // ... data to create a Deposit
     *   }
     * })
     * 
     */
    create<T extends DepositCreateArgs>(args: SelectSubset<T, DepositCreateArgs<ExtArgs>>): Prisma__DepositClient<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Deposits.
     * @param {DepositCreateManyArgs} args - Arguments to create many Deposits.
     * @example
     * // Create many Deposits
     * const deposit = await prisma.deposit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DepositCreateManyArgs>(args?: SelectSubset<T, DepositCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Deposits and returns the data saved in the database.
     * @param {DepositCreateManyAndReturnArgs} args - Arguments to create many Deposits.
     * @example
     * // Create many Deposits
     * const deposit = await prisma.deposit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Deposits and only return the `id`
     * const depositWithIdOnly = await prisma.deposit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DepositCreateManyAndReturnArgs>(args?: SelectSubset<T, DepositCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Deposit.
     * @param {DepositDeleteArgs} args - Arguments to delete one Deposit.
     * @example
     * // Delete one Deposit
     * const Deposit = await prisma.deposit.delete({
     *   where: {
     *     // ... filter to delete one Deposit
     *   }
     * })
     * 
     */
    delete<T extends DepositDeleteArgs>(args: SelectSubset<T, DepositDeleteArgs<ExtArgs>>): Prisma__DepositClient<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Deposit.
     * @param {DepositUpdateArgs} args - Arguments to update one Deposit.
     * @example
     * // Update one Deposit
     * const deposit = await prisma.deposit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DepositUpdateArgs>(args: SelectSubset<T, DepositUpdateArgs<ExtArgs>>): Prisma__DepositClient<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Deposits.
     * @param {DepositDeleteManyArgs} args - Arguments to filter Deposits to delete.
     * @example
     * // Delete a few Deposits
     * const { count } = await prisma.deposit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DepositDeleteManyArgs>(args?: SelectSubset<T, DepositDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Deposits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Deposits
     * const deposit = await prisma.deposit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DepositUpdateManyArgs>(args: SelectSubset<T, DepositUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Deposits and returns the data updated in the database.
     * @param {DepositUpdateManyAndReturnArgs} args - Arguments to update many Deposits.
     * @example
     * // Update many Deposits
     * const deposit = await prisma.deposit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Deposits and only return the `id`
     * const depositWithIdOnly = await prisma.deposit.updateManyAndReturn({
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
    updateManyAndReturn<T extends DepositUpdateManyAndReturnArgs>(args: SelectSubset<T, DepositUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Deposit.
     * @param {DepositUpsertArgs} args - Arguments to update or create a Deposit.
     * @example
     * // Update or create a Deposit
     * const deposit = await prisma.deposit.upsert({
     *   create: {
     *     // ... data to create a Deposit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Deposit we want to update
     *   }
     * })
     */
    upsert<T extends DepositUpsertArgs>(args: SelectSubset<T, DepositUpsertArgs<ExtArgs>>): Prisma__DepositClient<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Deposits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositCountArgs} args - Arguments to filter Deposits to count.
     * @example
     * // Count the number of Deposits
     * const count = await prisma.deposit.count({
     *   where: {
     *     // ... the filter for the Deposits we want to count
     *   }
     * })
    **/
    count<T extends DepositCountArgs>(
      args?: Subset<T, DepositCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepositCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Deposit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DepositAggregateArgs>(args: Subset<T, DepositAggregateArgs>): Prisma.PrismaPromise<GetDepositAggregateType<T>>

    /**
     * Group by Deposit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositGroupByArgs} args - Group by arguments.
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
      T extends DepositGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DepositGroupByArgs['orderBy'] }
        : { orderBy?: DepositGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DepositGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepositGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Deposit model
   */
  readonly fields: DepositFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Deposit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DepositClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Deposit model
   */
  interface DepositFieldRefs {
    readonly id: FieldRef<"Deposit", 'Int'>
    readonly userId: FieldRef<"Deposit", 'Int'>
    readonly amount: FieldRef<"Deposit", 'Float'>
    readonly currency: FieldRef<"Deposit", 'String'>
    readonly address: FieldRef<"Deposit", 'String'>
    readonly status: FieldRef<"Deposit", 'String'>
    readonly createdAt: FieldRef<"Deposit", 'DateTime'>
    readonly updatedAt: FieldRef<"Deposit", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Deposit findUnique
   */
  export type DepositFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deposit
     */
    omit?: DepositOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositInclude<ExtArgs> | null
    /**
     * Filter, which Deposit to fetch.
     */
    where: DepositWhereUniqueInput
  }

  /**
   * Deposit findUniqueOrThrow
   */
  export type DepositFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deposit
     */
    omit?: DepositOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositInclude<ExtArgs> | null
    /**
     * Filter, which Deposit to fetch.
     */
    where: DepositWhereUniqueInput
  }

  /**
   * Deposit findFirst
   */
  export type DepositFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deposit
     */
    omit?: DepositOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositInclude<ExtArgs> | null
    /**
     * Filter, which Deposit to fetch.
     */
    where?: DepositWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deposits to fetch.
     */
    orderBy?: DepositOrderByWithRelationInput | DepositOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Deposits.
     */
    cursor?: DepositWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deposits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deposits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Deposits.
     */
    distinct?: DepositScalarFieldEnum | DepositScalarFieldEnum[]
  }

  /**
   * Deposit findFirstOrThrow
   */
  export type DepositFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deposit
     */
    omit?: DepositOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositInclude<ExtArgs> | null
    /**
     * Filter, which Deposit to fetch.
     */
    where?: DepositWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deposits to fetch.
     */
    orderBy?: DepositOrderByWithRelationInput | DepositOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Deposits.
     */
    cursor?: DepositWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deposits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deposits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Deposits.
     */
    distinct?: DepositScalarFieldEnum | DepositScalarFieldEnum[]
  }

  /**
   * Deposit findMany
   */
  export type DepositFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deposit
     */
    omit?: DepositOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositInclude<ExtArgs> | null
    /**
     * Filter, which Deposits to fetch.
     */
    where?: DepositWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deposits to fetch.
     */
    orderBy?: DepositOrderByWithRelationInput | DepositOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Deposits.
     */
    cursor?: DepositWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deposits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deposits.
     */
    skip?: number
    distinct?: DepositScalarFieldEnum | DepositScalarFieldEnum[]
  }

  /**
   * Deposit create
   */
  export type DepositCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deposit
     */
    omit?: DepositOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositInclude<ExtArgs> | null
    /**
     * The data needed to create a Deposit.
     */
    data: XOR<DepositCreateInput, DepositUncheckedCreateInput>
  }

  /**
   * Deposit createMany
   */
  export type DepositCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Deposits.
     */
    data: DepositCreateManyInput | DepositCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Deposit createManyAndReturn
   */
  export type DepositCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Deposit
     */
    omit?: DepositOmit<ExtArgs> | null
    /**
     * The data used to create many Deposits.
     */
    data: DepositCreateManyInput | DepositCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Deposit update
   */
  export type DepositUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deposit
     */
    omit?: DepositOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositInclude<ExtArgs> | null
    /**
     * The data needed to update a Deposit.
     */
    data: XOR<DepositUpdateInput, DepositUncheckedUpdateInput>
    /**
     * Choose, which Deposit to update.
     */
    where: DepositWhereUniqueInput
  }

  /**
   * Deposit updateMany
   */
  export type DepositUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Deposits.
     */
    data: XOR<DepositUpdateManyMutationInput, DepositUncheckedUpdateManyInput>
    /**
     * Filter which Deposits to update
     */
    where?: DepositWhereInput
    /**
     * Limit how many Deposits to update.
     */
    limit?: number
  }

  /**
   * Deposit updateManyAndReturn
   */
  export type DepositUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Deposit
     */
    omit?: DepositOmit<ExtArgs> | null
    /**
     * The data used to update Deposits.
     */
    data: XOR<DepositUpdateManyMutationInput, DepositUncheckedUpdateManyInput>
    /**
     * Filter which Deposits to update
     */
    where?: DepositWhereInput
    /**
     * Limit how many Deposits to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Deposit upsert
   */
  export type DepositUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deposit
     */
    omit?: DepositOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositInclude<ExtArgs> | null
    /**
     * The filter to search for the Deposit to update in case it exists.
     */
    where: DepositWhereUniqueInput
    /**
     * In case the Deposit found by the `where` argument doesn't exist, create a new Deposit with this data.
     */
    create: XOR<DepositCreateInput, DepositUncheckedCreateInput>
    /**
     * In case the Deposit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DepositUpdateInput, DepositUncheckedUpdateInput>
  }

  /**
   * Deposit delete
   */
  export type DepositDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deposit
     */
    omit?: DepositOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositInclude<ExtArgs> | null
    /**
     * Filter which Deposit to delete.
     */
    where: DepositWhereUniqueInput
  }

  /**
   * Deposit deleteMany
   */
  export type DepositDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Deposits to delete
     */
    where?: DepositWhereInput
    /**
     * Limit how many Deposits to delete.
     */
    limit?: number
  }

  /**
   * Deposit without action
   */
  export type DepositDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deposit
     */
    omit?: DepositOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositInclude<ExtArgs> | null
  }


  /**
   * Model Investment
   */

  export type AggregateInvestment = {
    _count: InvestmentCountAggregateOutputType | null
    _avg: InvestmentAvgAggregateOutputType | null
    _sum: InvestmentSumAggregateOutputType | null
    _min: InvestmentMinAggregateOutputType | null
    _max: InvestmentMaxAggregateOutputType | null
  }

  export type InvestmentAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    planId: number | null
    roi: number | null
    durationDays: number | null
    amount: number | null
  }

  export type InvestmentSumAggregateOutputType = {
    id: number | null
    userId: number | null
    planId: number | null
    roi: number | null
    durationDays: number | null
    amount: number | null
  }

  export type InvestmentMinAggregateOutputType = {
    id: number | null
    userId: number | null
    planName: string | null
    planId: number | null
    roi: number | null
    duration: string | null
    durationDays: number | null
    amount: number | null
    startDate: Date | null
    endDate: Date | null
    maturityDate: Date | null
    status: string | null
    createdAt: Date | null
  }

  export type InvestmentMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    planName: string | null
    planId: number | null
    roi: number | null
    duration: string | null
    durationDays: number | null
    amount: number | null
    startDate: Date | null
    endDate: Date | null
    maturityDate: Date | null
    status: string | null
    createdAt: Date | null
  }

  export type InvestmentCountAggregateOutputType = {
    id: number
    userId: number
    planName: number
    planId: number
    roi: number
    duration: number
    durationDays: number
    amount: number
    startDate: number
    endDate: number
    maturityDate: number
    status: number
    createdAt: number
    _all: number
  }


  export type InvestmentAvgAggregateInputType = {
    id?: true
    userId?: true
    planId?: true
    roi?: true
    durationDays?: true
    amount?: true
  }

  export type InvestmentSumAggregateInputType = {
    id?: true
    userId?: true
    planId?: true
    roi?: true
    durationDays?: true
    amount?: true
  }

  export type InvestmentMinAggregateInputType = {
    id?: true
    userId?: true
    planName?: true
    planId?: true
    roi?: true
    duration?: true
    durationDays?: true
    amount?: true
    startDate?: true
    endDate?: true
    maturityDate?: true
    status?: true
    createdAt?: true
  }

  export type InvestmentMaxAggregateInputType = {
    id?: true
    userId?: true
    planName?: true
    planId?: true
    roi?: true
    duration?: true
    durationDays?: true
    amount?: true
    startDate?: true
    endDate?: true
    maturityDate?: true
    status?: true
    createdAt?: true
  }

  export type InvestmentCountAggregateInputType = {
    id?: true
    userId?: true
    planName?: true
    planId?: true
    roi?: true
    duration?: true
    durationDays?: true
    amount?: true
    startDate?: true
    endDate?: true
    maturityDate?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type InvestmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Investment to aggregate.
     */
    where?: InvestmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Investments to fetch.
     */
    orderBy?: InvestmentOrderByWithRelationInput | InvestmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvestmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Investments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Investments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Investments
    **/
    _count?: true | InvestmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvestmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvestmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvestmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvestmentMaxAggregateInputType
  }

  export type GetInvestmentAggregateType<T extends InvestmentAggregateArgs> = {
        [P in keyof T & keyof AggregateInvestment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvestment[P]>
      : GetScalarType<T[P], AggregateInvestment[P]>
  }




  export type InvestmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvestmentWhereInput
    orderBy?: InvestmentOrderByWithAggregationInput | InvestmentOrderByWithAggregationInput[]
    by: InvestmentScalarFieldEnum[] | InvestmentScalarFieldEnum
    having?: InvestmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvestmentCountAggregateInputType | true
    _avg?: InvestmentAvgAggregateInputType
    _sum?: InvestmentSumAggregateInputType
    _min?: InvestmentMinAggregateInputType
    _max?: InvestmentMaxAggregateInputType
  }

  export type InvestmentGroupByOutputType = {
    id: number
    userId: number
    planName: string
    planId: number
    roi: number
    duration: string
    durationDays: number
    amount: number
    startDate: Date
    endDate: Date | null
    maturityDate: Date
    status: string
    createdAt: Date
    _count: InvestmentCountAggregateOutputType | null
    _avg: InvestmentAvgAggregateOutputType | null
    _sum: InvestmentSumAggregateOutputType | null
    _min: InvestmentMinAggregateOutputType | null
    _max: InvestmentMaxAggregateOutputType | null
  }

  type GetInvestmentGroupByPayload<T extends InvestmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvestmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvestmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvestmentGroupByOutputType[P]>
            : GetScalarType<T[P], InvestmentGroupByOutputType[P]>
        }
      >
    >


  export type InvestmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    planName?: boolean
    planId?: boolean
    roi?: boolean
    duration?: boolean
    durationDays?: boolean
    amount?: boolean
    startDate?: boolean
    endDate?: boolean
    maturityDate?: boolean
    status?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["investment"]>

  export type InvestmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    planName?: boolean
    planId?: boolean
    roi?: boolean
    duration?: boolean
    durationDays?: boolean
    amount?: boolean
    startDate?: boolean
    endDate?: boolean
    maturityDate?: boolean
    status?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["investment"]>

  export type InvestmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    planName?: boolean
    planId?: boolean
    roi?: boolean
    duration?: boolean
    durationDays?: boolean
    amount?: boolean
    startDate?: boolean
    endDate?: boolean
    maturityDate?: boolean
    status?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["investment"]>

  export type InvestmentSelectScalar = {
    id?: boolean
    userId?: boolean
    planName?: boolean
    planId?: boolean
    roi?: boolean
    duration?: boolean
    durationDays?: boolean
    amount?: boolean
    startDate?: boolean
    endDate?: boolean
    maturityDate?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type InvestmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "planName" | "planId" | "roi" | "duration" | "durationDays" | "amount" | "startDate" | "endDate" | "maturityDate" | "status" | "createdAt", ExtArgs["result"]["investment"]>
  export type InvestmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type InvestmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type InvestmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $InvestmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Investment"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      planName: string
      planId: number
      roi: number
      duration: string
      durationDays: number
      amount: number
      startDate: Date
      endDate: Date | null
      maturityDate: Date
      status: string
      createdAt: Date
    }, ExtArgs["result"]["investment"]>
    composites: {}
  }

  type InvestmentGetPayload<S extends boolean | null | undefined | InvestmentDefaultArgs> = $Result.GetResult<Prisma.$InvestmentPayload, S>

  type InvestmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InvestmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvestmentCountAggregateInputType | true
    }

  export interface InvestmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Investment'], meta: { name: 'Investment' } }
    /**
     * Find zero or one Investment that matches the filter.
     * @param {InvestmentFindUniqueArgs} args - Arguments to find a Investment
     * @example
     * // Get one Investment
     * const investment = await prisma.investment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvestmentFindUniqueArgs>(args: SelectSubset<T, InvestmentFindUniqueArgs<ExtArgs>>): Prisma__InvestmentClient<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Investment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InvestmentFindUniqueOrThrowArgs} args - Arguments to find a Investment
     * @example
     * // Get one Investment
     * const investment = await prisma.investment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvestmentFindUniqueOrThrowArgs>(args: SelectSubset<T, InvestmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvestmentClient<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Investment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentFindFirstArgs} args - Arguments to find a Investment
     * @example
     * // Get one Investment
     * const investment = await prisma.investment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvestmentFindFirstArgs>(args?: SelectSubset<T, InvestmentFindFirstArgs<ExtArgs>>): Prisma__InvestmentClient<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Investment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentFindFirstOrThrowArgs} args - Arguments to find a Investment
     * @example
     * // Get one Investment
     * const investment = await prisma.investment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvestmentFindFirstOrThrowArgs>(args?: SelectSubset<T, InvestmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvestmentClient<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Investments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Investments
     * const investments = await prisma.investment.findMany()
     * 
     * // Get first 10 Investments
     * const investments = await prisma.investment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const investmentWithIdOnly = await prisma.investment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InvestmentFindManyArgs>(args?: SelectSubset<T, InvestmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Investment.
     * @param {InvestmentCreateArgs} args - Arguments to create a Investment.
     * @example
     * // Create one Investment
     * const Investment = await prisma.investment.create({
     *   data: {
     *     // ... data to create a Investment
     *   }
     * })
     * 
     */
    create<T extends InvestmentCreateArgs>(args: SelectSubset<T, InvestmentCreateArgs<ExtArgs>>): Prisma__InvestmentClient<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Investments.
     * @param {InvestmentCreateManyArgs} args - Arguments to create many Investments.
     * @example
     * // Create many Investments
     * const investment = await prisma.investment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvestmentCreateManyArgs>(args?: SelectSubset<T, InvestmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Investments and returns the data saved in the database.
     * @param {InvestmentCreateManyAndReturnArgs} args - Arguments to create many Investments.
     * @example
     * // Create many Investments
     * const investment = await prisma.investment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Investments and only return the `id`
     * const investmentWithIdOnly = await prisma.investment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InvestmentCreateManyAndReturnArgs>(args?: SelectSubset<T, InvestmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Investment.
     * @param {InvestmentDeleteArgs} args - Arguments to delete one Investment.
     * @example
     * // Delete one Investment
     * const Investment = await prisma.investment.delete({
     *   where: {
     *     // ... filter to delete one Investment
     *   }
     * })
     * 
     */
    delete<T extends InvestmentDeleteArgs>(args: SelectSubset<T, InvestmentDeleteArgs<ExtArgs>>): Prisma__InvestmentClient<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Investment.
     * @param {InvestmentUpdateArgs} args - Arguments to update one Investment.
     * @example
     * // Update one Investment
     * const investment = await prisma.investment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvestmentUpdateArgs>(args: SelectSubset<T, InvestmentUpdateArgs<ExtArgs>>): Prisma__InvestmentClient<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Investments.
     * @param {InvestmentDeleteManyArgs} args - Arguments to filter Investments to delete.
     * @example
     * // Delete a few Investments
     * const { count } = await prisma.investment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvestmentDeleteManyArgs>(args?: SelectSubset<T, InvestmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Investments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Investments
     * const investment = await prisma.investment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvestmentUpdateManyArgs>(args: SelectSubset<T, InvestmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Investments and returns the data updated in the database.
     * @param {InvestmentUpdateManyAndReturnArgs} args - Arguments to update many Investments.
     * @example
     * // Update many Investments
     * const investment = await prisma.investment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Investments and only return the `id`
     * const investmentWithIdOnly = await prisma.investment.updateManyAndReturn({
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
    updateManyAndReturn<T extends InvestmentUpdateManyAndReturnArgs>(args: SelectSubset<T, InvestmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Investment.
     * @param {InvestmentUpsertArgs} args - Arguments to update or create a Investment.
     * @example
     * // Update or create a Investment
     * const investment = await prisma.investment.upsert({
     *   create: {
     *     // ... data to create a Investment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Investment we want to update
     *   }
     * })
     */
    upsert<T extends InvestmentUpsertArgs>(args: SelectSubset<T, InvestmentUpsertArgs<ExtArgs>>): Prisma__InvestmentClient<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Investments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentCountArgs} args - Arguments to filter Investments to count.
     * @example
     * // Count the number of Investments
     * const count = await prisma.investment.count({
     *   where: {
     *     // ... the filter for the Investments we want to count
     *   }
     * })
    **/
    count<T extends InvestmentCountArgs>(
      args?: Subset<T, InvestmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvestmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Investment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InvestmentAggregateArgs>(args: Subset<T, InvestmentAggregateArgs>): Prisma.PrismaPromise<GetInvestmentAggregateType<T>>

    /**
     * Group by Investment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentGroupByArgs} args - Group by arguments.
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
      T extends InvestmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvestmentGroupByArgs['orderBy'] }
        : { orderBy?: InvestmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InvestmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvestmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Investment model
   */
  readonly fields: InvestmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Investment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvestmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Investment model
   */
  interface InvestmentFieldRefs {
    readonly id: FieldRef<"Investment", 'Int'>
    readonly userId: FieldRef<"Investment", 'Int'>
    readonly planName: FieldRef<"Investment", 'String'>
    readonly planId: FieldRef<"Investment", 'Int'>
    readonly roi: FieldRef<"Investment", 'Float'>
    readonly duration: FieldRef<"Investment", 'String'>
    readonly durationDays: FieldRef<"Investment", 'Int'>
    readonly amount: FieldRef<"Investment", 'Float'>
    readonly startDate: FieldRef<"Investment", 'DateTime'>
    readonly endDate: FieldRef<"Investment", 'DateTime'>
    readonly maturityDate: FieldRef<"Investment", 'DateTime'>
    readonly status: FieldRef<"Investment", 'String'>
    readonly createdAt: FieldRef<"Investment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Investment findUnique
   */
  export type InvestmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    /**
     * Filter, which Investment to fetch.
     */
    where: InvestmentWhereUniqueInput
  }

  /**
   * Investment findUniqueOrThrow
   */
  export type InvestmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    /**
     * Filter, which Investment to fetch.
     */
    where: InvestmentWhereUniqueInput
  }

  /**
   * Investment findFirst
   */
  export type InvestmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    /**
     * Filter, which Investment to fetch.
     */
    where?: InvestmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Investments to fetch.
     */
    orderBy?: InvestmentOrderByWithRelationInput | InvestmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Investments.
     */
    cursor?: InvestmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Investments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Investments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Investments.
     */
    distinct?: InvestmentScalarFieldEnum | InvestmentScalarFieldEnum[]
  }

  /**
   * Investment findFirstOrThrow
   */
  export type InvestmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    /**
     * Filter, which Investment to fetch.
     */
    where?: InvestmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Investments to fetch.
     */
    orderBy?: InvestmentOrderByWithRelationInput | InvestmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Investments.
     */
    cursor?: InvestmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Investments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Investments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Investments.
     */
    distinct?: InvestmentScalarFieldEnum | InvestmentScalarFieldEnum[]
  }

  /**
   * Investment findMany
   */
  export type InvestmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    /**
     * Filter, which Investments to fetch.
     */
    where?: InvestmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Investments to fetch.
     */
    orderBy?: InvestmentOrderByWithRelationInput | InvestmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Investments.
     */
    cursor?: InvestmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Investments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Investments.
     */
    skip?: number
    distinct?: InvestmentScalarFieldEnum | InvestmentScalarFieldEnum[]
  }

  /**
   * Investment create
   */
  export type InvestmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Investment.
     */
    data: XOR<InvestmentCreateInput, InvestmentUncheckedCreateInput>
  }

  /**
   * Investment createMany
   */
  export type InvestmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Investments.
     */
    data: InvestmentCreateManyInput | InvestmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Investment createManyAndReturn
   */
  export type InvestmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * The data used to create many Investments.
     */
    data: InvestmentCreateManyInput | InvestmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Investment update
   */
  export type InvestmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Investment.
     */
    data: XOR<InvestmentUpdateInput, InvestmentUncheckedUpdateInput>
    /**
     * Choose, which Investment to update.
     */
    where: InvestmentWhereUniqueInput
  }

  /**
   * Investment updateMany
   */
  export type InvestmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Investments.
     */
    data: XOR<InvestmentUpdateManyMutationInput, InvestmentUncheckedUpdateManyInput>
    /**
     * Filter which Investments to update
     */
    where?: InvestmentWhereInput
    /**
     * Limit how many Investments to update.
     */
    limit?: number
  }

  /**
   * Investment updateManyAndReturn
   */
  export type InvestmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * The data used to update Investments.
     */
    data: XOR<InvestmentUpdateManyMutationInput, InvestmentUncheckedUpdateManyInput>
    /**
     * Filter which Investments to update
     */
    where?: InvestmentWhereInput
    /**
     * Limit how many Investments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Investment upsert
   */
  export type InvestmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Investment to update in case it exists.
     */
    where: InvestmentWhereUniqueInput
    /**
     * In case the Investment found by the `where` argument doesn't exist, create a new Investment with this data.
     */
    create: XOR<InvestmentCreateInput, InvestmentUncheckedCreateInput>
    /**
     * In case the Investment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvestmentUpdateInput, InvestmentUncheckedUpdateInput>
  }

  /**
   * Investment delete
   */
  export type InvestmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    /**
     * Filter which Investment to delete.
     */
    where: InvestmentWhereUniqueInput
  }

  /**
   * Investment deleteMany
   */
  export type InvestmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Investments to delete
     */
    where?: InvestmentWhereInput
    /**
     * Limit how many Investments to delete.
     */
    limit?: number
  }

  /**
   * Investment without action
   */
  export type InvestmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
  }


  /**
   * Model Transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    amount: number | null
  }

  export type TransactionSumAggregateOutputType = {
    id: number | null
    userId: number | null
    amount: number | null
  }

  export type TransactionMinAggregateOutputType = {
    id: number | null
    userId: number | null
    type: string | null
    amount: number | null
    description: string | null
    status: string | null
    paymentMethod: string | null
    transactionRef: string | null
    createdAt: Date | null
  }

  export type TransactionMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    type: string | null
    amount: number | null
    description: string | null
    status: string | null
    paymentMethod: string | null
    transactionRef: string | null
    createdAt: Date | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    amount: number
    description: number
    status: number
    paymentMethod: number
    transactionRef: number
    createdAt: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
  }

  export type TransactionSumAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
  }

  export type TransactionMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    amount?: true
    description?: true
    status?: true
    paymentMethod?: true
    transactionRef?: true
    createdAt?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    amount?: true
    description?: true
    status?: true
    paymentMethod?: true
    transactionRef?: true
    createdAt?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    amount?: true
    description?: true
    status?: true
    paymentMethod?: true
    transactionRef?: true
    createdAt?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaction to aggregate.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type TransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithAggregationInput | TransactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: TransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    id: number
    userId: number
    type: string | null
    amount: number
    description: string | null
    status: string
    paymentMethod: string | null
    transactionRef: string | null
    createdAt: Date
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type TransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    amount?: boolean
    description?: boolean
    status?: boolean
    paymentMethod?: boolean
    transactionRef?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    amount?: boolean
    description?: boolean
    status?: boolean
    paymentMethod?: boolean
    transactionRef?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    amount?: boolean
    description?: boolean
    status?: boolean
    paymentMethod?: boolean
    transactionRef?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    amount?: boolean
    description?: boolean
    status?: boolean
    paymentMethod?: boolean
    transactionRef?: boolean
    createdAt?: boolean
  }

  export type TransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "amount" | "description" | "status" | "paymentMethod" | "transactionRef" | "createdAt", ExtArgs["result"]["transaction"]>
  export type TransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaction"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      type: string | null
      amount: number
      description: string | null
      status: string
      paymentMethod: string | null
      transactionRef: string | null
      createdAt: Date
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }

  type TransactionGetPayload<S extends boolean | null | undefined | TransactionDefaultArgs> = $Result.GetResult<Prisma.$TransactionPayload, S>

  type TransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface TransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transaction'], meta: { name: 'Transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {TransactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionFindUniqueArgs>(args: SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionFindFirstArgs>(args?: SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionFindManyArgs>(args?: SelectSubset<T, TransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaction.
     * @param {TransactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
     */
    create<T extends TransactionCreateArgs>(args: SelectSubset<T, TransactionCreateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {TransactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionCreateManyArgs>(args?: SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {TransactionCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transaction.
     * @param {TransactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
     */
    delete<T extends TransactionDeleteArgs>(args: SelectSubset<T, TransactionDeleteArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaction.
     * @param {TransactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionUpdateArgs>(args: SelectSubset<T, TransactionUpdateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionDeleteManyArgs>(args?: SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionUpdateManyArgs>(args: SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions and returns the data updated in the database.
     * @param {TransactionUpdateManyAndReturnArgs} args - Arguments to update many Transactions.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.updateManyAndReturn({
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
    updateManyAndReturn<T extends TransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, TransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transaction.
     * @param {TransactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends TransactionUpsertArgs>(args: SelectSubset<T, TransactionUpsertArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionCountArgs>(
      args?: Subset<T, TransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionGroupByArgs} args - Group by arguments.
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
      T extends TransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionGroupByArgs['orderBy'] }
        : { orderBy?: TransactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transaction model
   */
  readonly fields: TransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Transaction model
   */
  interface TransactionFieldRefs {
    readonly id: FieldRef<"Transaction", 'Int'>
    readonly userId: FieldRef<"Transaction", 'Int'>
    readonly type: FieldRef<"Transaction", 'String'>
    readonly amount: FieldRef<"Transaction", 'Float'>
    readonly description: FieldRef<"Transaction", 'String'>
    readonly status: FieldRef<"Transaction", 'String'>
    readonly paymentMethod: FieldRef<"Transaction", 'String'>
    readonly transactionRef: FieldRef<"Transaction", 'String'>
    readonly createdAt: FieldRef<"Transaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Transaction findUnique
   */
  export type TransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findUniqueOrThrow
   */
  export type TransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findFirst
   */
  export type TransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findFirstOrThrow
   */
  export type TransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findMany
   */
  export type TransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction create
   */
  export type TransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a Transaction.
     */
    data: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
  }

  /**
   * Transaction createMany
   */
  export type TransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transaction createManyAndReturn
   */
  export type TransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction update
   */
  export type TransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a Transaction.
     */
    data: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
    /**
     * Choose, which Transaction to update.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction updateMany
   */
  export type TransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
  }

  /**
   * Transaction updateManyAndReturn
   */
  export type TransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction upsert
   */
  export type TransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the Transaction to update in case it exists.
     */
    where: TransactionWhereUniqueInput
    /**
     * In case the Transaction found by the `where` argument doesn't exist, create a new Transaction with this data.
     */
    create: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
    /**
     * In case the Transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
  }

  /**
   * Transaction delete
   */
  export type TransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter which Transaction to delete.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction deleteMany
   */
  export type TransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to delete.
     */
    limit?: number
  }

  /**
   * Transaction without action
   */
  export type TransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
  }


  /**
   * Model Withdrawal
   */

  export type AggregateWithdrawal = {
    _count: WithdrawalCountAggregateOutputType | null
    _avg: WithdrawalAvgAggregateOutputType | null
    _sum: WithdrawalSumAggregateOutputType | null
    _min: WithdrawalMinAggregateOutputType | null
    _max: WithdrawalMaxAggregateOutputType | null
  }

  export type WithdrawalAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    amount: number | null
  }

  export type WithdrawalSumAggregateOutputType = {
    id: number | null
    userId: number | null
    amount: number | null
  }

  export type WithdrawalMinAggregateOutputType = {
    id: number | null
    userId: number | null
    amount: number | null
    address: string | null
    currency: string | null
    status: string | null
    createdAt: Date | null
  }

  export type WithdrawalMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    amount: number | null
    address: string | null
    currency: string | null
    status: string | null
    createdAt: Date | null
  }

  export type WithdrawalCountAggregateOutputType = {
    id: number
    userId: number
    amount: number
    address: number
    currency: number
    status: number
    createdAt: number
    _all: number
  }


  export type WithdrawalAvgAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
  }

  export type WithdrawalSumAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
  }

  export type WithdrawalMinAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    address?: true
    currency?: true
    status?: true
    createdAt?: true
  }

  export type WithdrawalMaxAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    address?: true
    currency?: true
    status?: true
    createdAt?: true
  }

  export type WithdrawalCountAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    address?: true
    currency?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type WithdrawalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Withdrawal to aggregate.
     */
    where?: WithdrawalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Withdrawals to fetch.
     */
    orderBy?: WithdrawalOrderByWithRelationInput | WithdrawalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WithdrawalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Withdrawals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Withdrawals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Withdrawals
    **/
    _count?: true | WithdrawalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WithdrawalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WithdrawalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WithdrawalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WithdrawalMaxAggregateInputType
  }

  export type GetWithdrawalAggregateType<T extends WithdrawalAggregateArgs> = {
        [P in keyof T & keyof AggregateWithdrawal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWithdrawal[P]>
      : GetScalarType<T[P], AggregateWithdrawal[P]>
  }




  export type WithdrawalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WithdrawalWhereInput
    orderBy?: WithdrawalOrderByWithAggregationInput | WithdrawalOrderByWithAggregationInput[]
    by: WithdrawalScalarFieldEnum[] | WithdrawalScalarFieldEnum
    having?: WithdrawalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WithdrawalCountAggregateInputType | true
    _avg?: WithdrawalAvgAggregateInputType
    _sum?: WithdrawalSumAggregateInputType
    _min?: WithdrawalMinAggregateInputType
    _max?: WithdrawalMaxAggregateInputType
  }

  export type WithdrawalGroupByOutputType = {
    id: number
    userId: number
    amount: number
    address: string | null
    currency: string | null
    status: string
    createdAt: Date
    _count: WithdrawalCountAggregateOutputType | null
    _avg: WithdrawalAvgAggregateOutputType | null
    _sum: WithdrawalSumAggregateOutputType | null
    _min: WithdrawalMinAggregateOutputType | null
    _max: WithdrawalMaxAggregateOutputType | null
  }

  type GetWithdrawalGroupByPayload<T extends WithdrawalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WithdrawalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WithdrawalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WithdrawalGroupByOutputType[P]>
            : GetScalarType<T[P], WithdrawalGroupByOutputType[P]>
        }
      >
    >


  export type WithdrawalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    address?: boolean
    currency?: boolean
    status?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["withdrawal"]>

  export type WithdrawalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    address?: boolean
    currency?: boolean
    status?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["withdrawal"]>

  export type WithdrawalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    address?: boolean
    currency?: boolean
    status?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["withdrawal"]>

  export type WithdrawalSelectScalar = {
    id?: boolean
    userId?: boolean
    amount?: boolean
    address?: boolean
    currency?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type WithdrawalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "amount" | "address" | "currency" | "status" | "createdAt", ExtArgs["result"]["withdrawal"]>
  export type WithdrawalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WithdrawalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WithdrawalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WithdrawalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Withdrawal"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      amount: number
      address: string | null
      currency: string | null
      status: string
      createdAt: Date
    }, ExtArgs["result"]["withdrawal"]>
    composites: {}
  }

  type WithdrawalGetPayload<S extends boolean | null | undefined | WithdrawalDefaultArgs> = $Result.GetResult<Prisma.$WithdrawalPayload, S>

  type WithdrawalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WithdrawalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WithdrawalCountAggregateInputType | true
    }

  export interface WithdrawalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Withdrawal'], meta: { name: 'Withdrawal' } }
    /**
     * Find zero or one Withdrawal that matches the filter.
     * @param {WithdrawalFindUniqueArgs} args - Arguments to find a Withdrawal
     * @example
     * // Get one Withdrawal
     * const withdrawal = await prisma.withdrawal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WithdrawalFindUniqueArgs>(args: SelectSubset<T, WithdrawalFindUniqueArgs<ExtArgs>>): Prisma__WithdrawalClient<$Result.GetResult<Prisma.$WithdrawalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Withdrawal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WithdrawalFindUniqueOrThrowArgs} args - Arguments to find a Withdrawal
     * @example
     * // Get one Withdrawal
     * const withdrawal = await prisma.withdrawal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WithdrawalFindUniqueOrThrowArgs>(args: SelectSubset<T, WithdrawalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WithdrawalClient<$Result.GetResult<Prisma.$WithdrawalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Withdrawal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawalFindFirstArgs} args - Arguments to find a Withdrawal
     * @example
     * // Get one Withdrawal
     * const withdrawal = await prisma.withdrawal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WithdrawalFindFirstArgs>(args?: SelectSubset<T, WithdrawalFindFirstArgs<ExtArgs>>): Prisma__WithdrawalClient<$Result.GetResult<Prisma.$WithdrawalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Withdrawal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawalFindFirstOrThrowArgs} args - Arguments to find a Withdrawal
     * @example
     * // Get one Withdrawal
     * const withdrawal = await prisma.withdrawal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WithdrawalFindFirstOrThrowArgs>(args?: SelectSubset<T, WithdrawalFindFirstOrThrowArgs<ExtArgs>>): Prisma__WithdrawalClient<$Result.GetResult<Prisma.$WithdrawalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Withdrawals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Withdrawals
     * const withdrawals = await prisma.withdrawal.findMany()
     * 
     * // Get first 10 Withdrawals
     * const withdrawals = await prisma.withdrawal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const withdrawalWithIdOnly = await prisma.withdrawal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WithdrawalFindManyArgs>(args?: SelectSubset<T, WithdrawalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WithdrawalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Withdrawal.
     * @param {WithdrawalCreateArgs} args - Arguments to create a Withdrawal.
     * @example
     * // Create one Withdrawal
     * const Withdrawal = await prisma.withdrawal.create({
     *   data: {
     *     // ... data to create a Withdrawal
     *   }
     * })
     * 
     */
    create<T extends WithdrawalCreateArgs>(args: SelectSubset<T, WithdrawalCreateArgs<ExtArgs>>): Prisma__WithdrawalClient<$Result.GetResult<Prisma.$WithdrawalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Withdrawals.
     * @param {WithdrawalCreateManyArgs} args - Arguments to create many Withdrawals.
     * @example
     * // Create many Withdrawals
     * const withdrawal = await prisma.withdrawal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WithdrawalCreateManyArgs>(args?: SelectSubset<T, WithdrawalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Withdrawals and returns the data saved in the database.
     * @param {WithdrawalCreateManyAndReturnArgs} args - Arguments to create many Withdrawals.
     * @example
     * // Create many Withdrawals
     * const withdrawal = await prisma.withdrawal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Withdrawals and only return the `id`
     * const withdrawalWithIdOnly = await prisma.withdrawal.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WithdrawalCreateManyAndReturnArgs>(args?: SelectSubset<T, WithdrawalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WithdrawalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Withdrawal.
     * @param {WithdrawalDeleteArgs} args - Arguments to delete one Withdrawal.
     * @example
     * // Delete one Withdrawal
     * const Withdrawal = await prisma.withdrawal.delete({
     *   where: {
     *     // ... filter to delete one Withdrawal
     *   }
     * })
     * 
     */
    delete<T extends WithdrawalDeleteArgs>(args: SelectSubset<T, WithdrawalDeleteArgs<ExtArgs>>): Prisma__WithdrawalClient<$Result.GetResult<Prisma.$WithdrawalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Withdrawal.
     * @param {WithdrawalUpdateArgs} args - Arguments to update one Withdrawal.
     * @example
     * // Update one Withdrawal
     * const withdrawal = await prisma.withdrawal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WithdrawalUpdateArgs>(args: SelectSubset<T, WithdrawalUpdateArgs<ExtArgs>>): Prisma__WithdrawalClient<$Result.GetResult<Prisma.$WithdrawalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Withdrawals.
     * @param {WithdrawalDeleteManyArgs} args - Arguments to filter Withdrawals to delete.
     * @example
     * // Delete a few Withdrawals
     * const { count } = await prisma.withdrawal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WithdrawalDeleteManyArgs>(args?: SelectSubset<T, WithdrawalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Withdrawals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Withdrawals
     * const withdrawal = await prisma.withdrawal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WithdrawalUpdateManyArgs>(args: SelectSubset<T, WithdrawalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Withdrawals and returns the data updated in the database.
     * @param {WithdrawalUpdateManyAndReturnArgs} args - Arguments to update many Withdrawals.
     * @example
     * // Update many Withdrawals
     * const withdrawal = await prisma.withdrawal.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Withdrawals and only return the `id`
     * const withdrawalWithIdOnly = await prisma.withdrawal.updateManyAndReturn({
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
    updateManyAndReturn<T extends WithdrawalUpdateManyAndReturnArgs>(args: SelectSubset<T, WithdrawalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WithdrawalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Withdrawal.
     * @param {WithdrawalUpsertArgs} args - Arguments to update or create a Withdrawal.
     * @example
     * // Update or create a Withdrawal
     * const withdrawal = await prisma.withdrawal.upsert({
     *   create: {
     *     // ... data to create a Withdrawal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Withdrawal we want to update
     *   }
     * })
     */
    upsert<T extends WithdrawalUpsertArgs>(args: SelectSubset<T, WithdrawalUpsertArgs<ExtArgs>>): Prisma__WithdrawalClient<$Result.GetResult<Prisma.$WithdrawalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Withdrawals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawalCountArgs} args - Arguments to filter Withdrawals to count.
     * @example
     * // Count the number of Withdrawals
     * const count = await prisma.withdrawal.count({
     *   where: {
     *     // ... the filter for the Withdrawals we want to count
     *   }
     * })
    **/
    count<T extends WithdrawalCountArgs>(
      args?: Subset<T, WithdrawalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WithdrawalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Withdrawal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WithdrawalAggregateArgs>(args: Subset<T, WithdrawalAggregateArgs>): Prisma.PrismaPromise<GetWithdrawalAggregateType<T>>

    /**
     * Group by Withdrawal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawalGroupByArgs} args - Group by arguments.
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
      T extends WithdrawalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WithdrawalGroupByArgs['orderBy'] }
        : { orderBy?: WithdrawalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WithdrawalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWithdrawalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Withdrawal model
   */
  readonly fields: WithdrawalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Withdrawal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WithdrawalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Withdrawal model
   */
  interface WithdrawalFieldRefs {
    readonly id: FieldRef<"Withdrawal", 'Int'>
    readonly userId: FieldRef<"Withdrawal", 'Int'>
    readonly amount: FieldRef<"Withdrawal", 'Float'>
    readonly address: FieldRef<"Withdrawal", 'String'>
    readonly currency: FieldRef<"Withdrawal", 'String'>
    readonly status: FieldRef<"Withdrawal", 'String'>
    readonly createdAt: FieldRef<"Withdrawal", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Withdrawal findUnique
   */
  export type WithdrawalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Withdrawal
     */
    select?: WithdrawalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Withdrawal
     */
    omit?: WithdrawalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawalInclude<ExtArgs> | null
    /**
     * Filter, which Withdrawal to fetch.
     */
    where: WithdrawalWhereUniqueInput
  }

  /**
   * Withdrawal findUniqueOrThrow
   */
  export type WithdrawalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Withdrawal
     */
    select?: WithdrawalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Withdrawal
     */
    omit?: WithdrawalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawalInclude<ExtArgs> | null
    /**
     * Filter, which Withdrawal to fetch.
     */
    where: WithdrawalWhereUniqueInput
  }

  /**
   * Withdrawal findFirst
   */
  export type WithdrawalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Withdrawal
     */
    select?: WithdrawalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Withdrawal
     */
    omit?: WithdrawalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawalInclude<ExtArgs> | null
    /**
     * Filter, which Withdrawal to fetch.
     */
    where?: WithdrawalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Withdrawals to fetch.
     */
    orderBy?: WithdrawalOrderByWithRelationInput | WithdrawalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Withdrawals.
     */
    cursor?: WithdrawalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Withdrawals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Withdrawals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Withdrawals.
     */
    distinct?: WithdrawalScalarFieldEnum | WithdrawalScalarFieldEnum[]
  }

  /**
   * Withdrawal findFirstOrThrow
   */
  export type WithdrawalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Withdrawal
     */
    select?: WithdrawalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Withdrawal
     */
    omit?: WithdrawalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawalInclude<ExtArgs> | null
    /**
     * Filter, which Withdrawal to fetch.
     */
    where?: WithdrawalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Withdrawals to fetch.
     */
    orderBy?: WithdrawalOrderByWithRelationInput | WithdrawalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Withdrawals.
     */
    cursor?: WithdrawalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Withdrawals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Withdrawals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Withdrawals.
     */
    distinct?: WithdrawalScalarFieldEnum | WithdrawalScalarFieldEnum[]
  }

  /**
   * Withdrawal findMany
   */
  export type WithdrawalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Withdrawal
     */
    select?: WithdrawalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Withdrawal
     */
    omit?: WithdrawalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawalInclude<ExtArgs> | null
    /**
     * Filter, which Withdrawals to fetch.
     */
    where?: WithdrawalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Withdrawals to fetch.
     */
    orderBy?: WithdrawalOrderByWithRelationInput | WithdrawalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Withdrawals.
     */
    cursor?: WithdrawalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Withdrawals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Withdrawals.
     */
    skip?: number
    distinct?: WithdrawalScalarFieldEnum | WithdrawalScalarFieldEnum[]
  }

  /**
   * Withdrawal create
   */
  export type WithdrawalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Withdrawal
     */
    select?: WithdrawalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Withdrawal
     */
    omit?: WithdrawalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawalInclude<ExtArgs> | null
    /**
     * The data needed to create a Withdrawal.
     */
    data: XOR<WithdrawalCreateInput, WithdrawalUncheckedCreateInput>
  }

  /**
   * Withdrawal createMany
   */
  export type WithdrawalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Withdrawals.
     */
    data: WithdrawalCreateManyInput | WithdrawalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Withdrawal createManyAndReturn
   */
  export type WithdrawalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Withdrawal
     */
    select?: WithdrawalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Withdrawal
     */
    omit?: WithdrawalOmit<ExtArgs> | null
    /**
     * The data used to create many Withdrawals.
     */
    data: WithdrawalCreateManyInput | WithdrawalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Withdrawal update
   */
  export type WithdrawalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Withdrawal
     */
    select?: WithdrawalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Withdrawal
     */
    omit?: WithdrawalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawalInclude<ExtArgs> | null
    /**
     * The data needed to update a Withdrawal.
     */
    data: XOR<WithdrawalUpdateInput, WithdrawalUncheckedUpdateInput>
    /**
     * Choose, which Withdrawal to update.
     */
    where: WithdrawalWhereUniqueInput
  }

  /**
   * Withdrawal updateMany
   */
  export type WithdrawalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Withdrawals.
     */
    data: XOR<WithdrawalUpdateManyMutationInput, WithdrawalUncheckedUpdateManyInput>
    /**
     * Filter which Withdrawals to update
     */
    where?: WithdrawalWhereInput
    /**
     * Limit how many Withdrawals to update.
     */
    limit?: number
  }

  /**
   * Withdrawal updateManyAndReturn
   */
  export type WithdrawalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Withdrawal
     */
    select?: WithdrawalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Withdrawal
     */
    omit?: WithdrawalOmit<ExtArgs> | null
    /**
     * The data used to update Withdrawals.
     */
    data: XOR<WithdrawalUpdateManyMutationInput, WithdrawalUncheckedUpdateManyInput>
    /**
     * Filter which Withdrawals to update
     */
    where?: WithdrawalWhereInput
    /**
     * Limit how many Withdrawals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawalIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Withdrawal upsert
   */
  export type WithdrawalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Withdrawal
     */
    select?: WithdrawalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Withdrawal
     */
    omit?: WithdrawalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawalInclude<ExtArgs> | null
    /**
     * The filter to search for the Withdrawal to update in case it exists.
     */
    where: WithdrawalWhereUniqueInput
    /**
     * In case the Withdrawal found by the `where` argument doesn't exist, create a new Withdrawal with this data.
     */
    create: XOR<WithdrawalCreateInput, WithdrawalUncheckedCreateInput>
    /**
     * In case the Withdrawal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WithdrawalUpdateInput, WithdrawalUncheckedUpdateInput>
  }

  /**
   * Withdrawal delete
   */
  export type WithdrawalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Withdrawal
     */
    select?: WithdrawalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Withdrawal
     */
    omit?: WithdrawalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawalInclude<ExtArgs> | null
    /**
     * Filter which Withdrawal to delete.
     */
    where: WithdrawalWhereUniqueInput
  }

  /**
   * Withdrawal deleteMany
   */
  export type WithdrawalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Withdrawals to delete
     */
    where?: WithdrawalWhereInput
    /**
     * Limit how many Withdrawals to delete.
     */
    limit?: number
  }

  /**
   * Withdrawal without action
   */
  export type WithdrawalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Withdrawal
     */
    select?: WithdrawalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Withdrawal
     */
    omit?: WithdrawalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawalInclude<ExtArgs> | null
  }


  /**
   * Model Referral
   */

  export type AggregateReferral = {
    _count: ReferralCountAggregateOutputType | null
    _avg: ReferralAvgAggregateOutputType | null
    _sum: ReferralSumAggregateOutputType | null
    _min: ReferralMinAggregateOutputType | null
    _max: ReferralMaxAggregateOutputType | null
  }

  export type ReferralAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ReferralSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ReferralMinAggregateOutputType = {
    id: number | null
    userId: number | null
    code: string | null
    createdAt: Date | null
  }

  export type ReferralMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    code: string | null
    createdAt: Date | null
  }

  export type ReferralCountAggregateOutputType = {
    id: number
    userId: number
    code: number
    createdAt: number
    _all: number
  }


  export type ReferralAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ReferralSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ReferralMinAggregateInputType = {
    id?: true
    userId?: true
    code?: true
    createdAt?: true
  }

  export type ReferralMaxAggregateInputType = {
    id?: true
    userId?: true
    code?: true
    createdAt?: true
  }

  export type ReferralCountAggregateInputType = {
    id?: true
    userId?: true
    code?: true
    createdAt?: true
    _all?: true
  }

  export type ReferralAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Referral to aggregate.
     */
    where?: ReferralWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Referrals to fetch.
     */
    orderBy?: ReferralOrderByWithRelationInput | ReferralOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReferralWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Referrals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Referrals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Referrals
    **/
    _count?: true | ReferralCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReferralAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReferralSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReferralMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReferralMaxAggregateInputType
  }

  export type GetReferralAggregateType<T extends ReferralAggregateArgs> = {
        [P in keyof T & keyof AggregateReferral]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReferral[P]>
      : GetScalarType<T[P], AggregateReferral[P]>
  }




  export type ReferralGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReferralWhereInput
    orderBy?: ReferralOrderByWithAggregationInput | ReferralOrderByWithAggregationInput[]
    by: ReferralScalarFieldEnum[] | ReferralScalarFieldEnum
    having?: ReferralScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReferralCountAggregateInputType | true
    _avg?: ReferralAvgAggregateInputType
    _sum?: ReferralSumAggregateInputType
    _min?: ReferralMinAggregateInputType
    _max?: ReferralMaxAggregateInputType
  }

  export type ReferralGroupByOutputType = {
    id: number
    userId: number
    code: string
    createdAt: Date
    _count: ReferralCountAggregateOutputType | null
    _avg: ReferralAvgAggregateOutputType | null
    _sum: ReferralSumAggregateOutputType | null
    _min: ReferralMinAggregateOutputType | null
    _max: ReferralMaxAggregateOutputType | null
  }

  type GetReferralGroupByPayload<T extends ReferralGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReferralGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReferralGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReferralGroupByOutputType[P]>
            : GetScalarType<T[P], ReferralGroupByOutputType[P]>
        }
      >
    >


  export type ReferralSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    code?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["referral"]>

  export type ReferralSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    code?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["referral"]>

  export type ReferralSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    code?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["referral"]>

  export type ReferralSelectScalar = {
    id?: boolean
    userId?: boolean
    code?: boolean
    createdAt?: boolean
  }

  export type ReferralOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "code" | "createdAt", ExtArgs["result"]["referral"]>
  export type ReferralInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReferralIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReferralIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ReferralPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Referral"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      code: string
      createdAt: Date
    }, ExtArgs["result"]["referral"]>
    composites: {}
  }

  type ReferralGetPayload<S extends boolean | null | undefined | ReferralDefaultArgs> = $Result.GetResult<Prisma.$ReferralPayload, S>

  type ReferralCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReferralFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReferralCountAggregateInputType | true
    }

  export interface ReferralDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Referral'], meta: { name: 'Referral' } }
    /**
     * Find zero or one Referral that matches the filter.
     * @param {ReferralFindUniqueArgs} args - Arguments to find a Referral
     * @example
     * // Get one Referral
     * const referral = await prisma.referral.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReferralFindUniqueArgs>(args: SelectSubset<T, ReferralFindUniqueArgs<ExtArgs>>): Prisma__ReferralClient<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Referral that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReferralFindUniqueOrThrowArgs} args - Arguments to find a Referral
     * @example
     * // Get one Referral
     * const referral = await prisma.referral.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReferralFindUniqueOrThrowArgs>(args: SelectSubset<T, ReferralFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReferralClient<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Referral that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralFindFirstArgs} args - Arguments to find a Referral
     * @example
     * // Get one Referral
     * const referral = await prisma.referral.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReferralFindFirstArgs>(args?: SelectSubset<T, ReferralFindFirstArgs<ExtArgs>>): Prisma__ReferralClient<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Referral that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralFindFirstOrThrowArgs} args - Arguments to find a Referral
     * @example
     * // Get one Referral
     * const referral = await prisma.referral.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReferralFindFirstOrThrowArgs>(args?: SelectSubset<T, ReferralFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReferralClient<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Referrals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Referrals
     * const referrals = await prisma.referral.findMany()
     * 
     * // Get first 10 Referrals
     * const referrals = await prisma.referral.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const referralWithIdOnly = await prisma.referral.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReferralFindManyArgs>(args?: SelectSubset<T, ReferralFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Referral.
     * @param {ReferralCreateArgs} args - Arguments to create a Referral.
     * @example
     * // Create one Referral
     * const Referral = await prisma.referral.create({
     *   data: {
     *     // ... data to create a Referral
     *   }
     * })
     * 
     */
    create<T extends ReferralCreateArgs>(args: SelectSubset<T, ReferralCreateArgs<ExtArgs>>): Prisma__ReferralClient<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Referrals.
     * @param {ReferralCreateManyArgs} args - Arguments to create many Referrals.
     * @example
     * // Create many Referrals
     * const referral = await prisma.referral.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReferralCreateManyArgs>(args?: SelectSubset<T, ReferralCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Referrals and returns the data saved in the database.
     * @param {ReferralCreateManyAndReturnArgs} args - Arguments to create many Referrals.
     * @example
     * // Create many Referrals
     * const referral = await prisma.referral.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Referrals and only return the `id`
     * const referralWithIdOnly = await prisma.referral.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReferralCreateManyAndReturnArgs>(args?: SelectSubset<T, ReferralCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Referral.
     * @param {ReferralDeleteArgs} args - Arguments to delete one Referral.
     * @example
     * // Delete one Referral
     * const Referral = await prisma.referral.delete({
     *   where: {
     *     // ... filter to delete one Referral
     *   }
     * })
     * 
     */
    delete<T extends ReferralDeleteArgs>(args: SelectSubset<T, ReferralDeleteArgs<ExtArgs>>): Prisma__ReferralClient<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Referral.
     * @param {ReferralUpdateArgs} args - Arguments to update one Referral.
     * @example
     * // Update one Referral
     * const referral = await prisma.referral.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReferralUpdateArgs>(args: SelectSubset<T, ReferralUpdateArgs<ExtArgs>>): Prisma__ReferralClient<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Referrals.
     * @param {ReferralDeleteManyArgs} args - Arguments to filter Referrals to delete.
     * @example
     * // Delete a few Referrals
     * const { count } = await prisma.referral.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReferralDeleteManyArgs>(args?: SelectSubset<T, ReferralDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Referrals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Referrals
     * const referral = await prisma.referral.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReferralUpdateManyArgs>(args: SelectSubset<T, ReferralUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Referrals and returns the data updated in the database.
     * @param {ReferralUpdateManyAndReturnArgs} args - Arguments to update many Referrals.
     * @example
     * // Update many Referrals
     * const referral = await prisma.referral.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Referrals and only return the `id`
     * const referralWithIdOnly = await prisma.referral.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReferralUpdateManyAndReturnArgs>(args: SelectSubset<T, ReferralUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Referral.
     * @param {ReferralUpsertArgs} args - Arguments to update or create a Referral.
     * @example
     * // Update or create a Referral
     * const referral = await prisma.referral.upsert({
     *   create: {
     *     // ... data to create a Referral
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Referral we want to update
     *   }
     * })
     */
    upsert<T extends ReferralUpsertArgs>(args: SelectSubset<T, ReferralUpsertArgs<ExtArgs>>): Prisma__ReferralClient<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Referrals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralCountArgs} args - Arguments to filter Referrals to count.
     * @example
     * // Count the number of Referrals
     * const count = await prisma.referral.count({
     *   where: {
     *     // ... the filter for the Referrals we want to count
     *   }
     * })
    **/
    count<T extends ReferralCountArgs>(
      args?: Subset<T, ReferralCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReferralCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Referral.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReferralAggregateArgs>(args: Subset<T, ReferralAggregateArgs>): Prisma.PrismaPromise<GetReferralAggregateType<T>>

    /**
     * Group by Referral.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralGroupByArgs} args - Group by arguments.
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
      T extends ReferralGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReferralGroupByArgs['orderBy'] }
        : { orderBy?: ReferralGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReferralGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReferralGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Referral model
   */
  readonly fields: ReferralFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Referral.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReferralClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Referral model
   */
  interface ReferralFieldRefs {
    readonly id: FieldRef<"Referral", 'Int'>
    readonly userId: FieldRef<"Referral", 'Int'>
    readonly code: FieldRef<"Referral", 'String'>
    readonly createdAt: FieldRef<"Referral", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Referral findUnique
   */
  export type ReferralFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Referral
     */
    omit?: ReferralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
    /**
     * Filter, which Referral to fetch.
     */
    where: ReferralWhereUniqueInput
  }

  /**
   * Referral findUniqueOrThrow
   */
  export type ReferralFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Referral
     */
    omit?: ReferralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
    /**
     * Filter, which Referral to fetch.
     */
    where: ReferralWhereUniqueInput
  }

  /**
   * Referral findFirst
   */
  export type ReferralFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Referral
     */
    omit?: ReferralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
    /**
     * Filter, which Referral to fetch.
     */
    where?: ReferralWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Referrals to fetch.
     */
    orderBy?: ReferralOrderByWithRelationInput | ReferralOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Referrals.
     */
    cursor?: ReferralWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Referrals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Referrals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Referrals.
     */
    distinct?: ReferralScalarFieldEnum | ReferralScalarFieldEnum[]
  }

  /**
   * Referral findFirstOrThrow
   */
  export type ReferralFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Referral
     */
    omit?: ReferralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
    /**
     * Filter, which Referral to fetch.
     */
    where?: ReferralWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Referrals to fetch.
     */
    orderBy?: ReferralOrderByWithRelationInput | ReferralOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Referrals.
     */
    cursor?: ReferralWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Referrals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Referrals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Referrals.
     */
    distinct?: ReferralScalarFieldEnum | ReferralScalarFieldEnum[]
  }

  /**
   * Referral findMany
   */
  export type ReferralFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Referral
     */
    omit?: ReferralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
    /**
     * Filter, which Referrals to fetch.
     */
    where?: ReferralWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Referrals to fetch.
     */
    orderBy?: ReferralOrderByWithRelationInput | ReferralOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Referrals.
     */
    cursor?: ReferralWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Referrals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Referrals.
     */
    skip?: number
    distinct?: ReferralScalarFieldEnum | ReferralScalarFieldEnum[]
  }

  /**
   * Referral create
   */
  export type ReferralCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Referral
     */
    omit?: ReferralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
    /**
     * The data needed to create a Referral.
     */
    data: XOR<ReferralCreateInput, ReferralUncheckedCreateInput>
  }

  /**
   * Referral createMany
   */
  export type ReferralCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Referrals.
     */
    data: ReferralCreateManyInput | ReferralCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Referral createManyAndReturn
   */
  export type ReferralCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Referral
     */
    omit?: ReferralOmit<ExtArgs> | null
    /**
     * The data used to create many Referrals.
     */
    data: ReferralCreateManyInput | ReferralCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Referral update
   */
  export type ReferralUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Referral
     */
    omit?: ReferralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
    /**
     * The data needed to update a Referral.
     */
    data: XOR<ReferralUpdateInput, ReferralUncheckedUpdateInput>
    /**
     * Choose, which Referral to update.
     */
    where: ReferralWhereUniqueInput
  }

  /**
   * Referral updateMany
   */
  export type ReferralUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Referrals.
     */
    data: XOR<ReferralUpdateManyMutationInput, ReferralUncheckedUpdateManyInput>
    /**
     * Filter which Referrals to update
     */
    where?: ReferralWhereInput
    /**
     * Limit how many Referrals to update.
     */
    limit?: number
  }

  /**
   * Referral updateManyAndReturn
   */
  export type ReferralUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Referral
     */
    omit?: ReferralOmit<ExtArgs> | null
    /**
     * The data used to update Referrals.
     */
    data: XOR<ReferralUpdateManyMutationInput, ReferralUncheckedUpdateManyInput>
    /**
     * Filter which Referrals to update
     */
    where?: ReferralWhereInput
    /**
     * Limit how many Referrals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Referral upsert
   */
  export type ReferralUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Referral
     */
    omit?: ReferralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
    /**
     * The filter to search for the Referral to update in case it exists.
     */
    where: ReferralWhereUniqueInput
    /**
     * In case the Referral found by the `where` argument doesn't exist, create a new Referral with this data.
     */
    create: XOR<ReferralCreateInput, ReferralUncheckedCreateInput>
    /**
     * In case the Referral was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReferralUpdateInput, ReferralUncheckedUpdateInput>
  }

  /**
   * Referral delete
   */
  export type ReferralDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Referral
     */
    omit?: ReferralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
    /**
     * Filter which Referral to delete.
     */
    where: ReferralWhereUniqueInput
  }

  /**
   * Referral deleteMany
   */
  export type ReferralDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Referrals to delete
     */
    where?: ReferralWhereInput
    /**
     * Limit how many Referrals to delete.
     */
    limit?: number
  }

  /**
   * Referral without action
   */
  export type ReferralDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Referral
     */
    omit?: ReferralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
  }


  /**
   * Model RewardLedger
   */

  export type AggregateRewardLedger = {
    _count: RewardLedgerCountAggregateOutputType | null
    _avg: RewardLedgerAvgAggregateOutputType | null
    _sum: RewardLedgerSumAggregateOutputType | null
    _min: RewardLedgerMinAggregateOutputType | null
    _max: RewardLedgerMaxAggregateOutputType | null
  }

  export type RewardLedgerAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    points: number | null
    refId: number | null
  }

  export type RewardLedgerSumAggregateOutputType = {
    id: number | null
    userId: number | null
    points: number | null
    refId: number | null
  }

  export type RewardLedgerMinAggregateOutputType = {
    id: number | null
    userId: number | null
    type: string | null
    points: number | null
    description: string | null
    refId: number | null
    createdAt: Date | null
  }

  export type RewardLedgerMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    type: string | null
    points: number | null
    description: string | null
    refId: number | null
    createdAt: Date | null
  }

  export type RewardLedgerCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    points: number
    description: number
    refId: number
    createdAt: number
    _all: number
  }


  export type RewardLedgerAvgAggregateInputType = {
    id?: true
    userId?: true
    points?: true
    refId?: true
  }

  export type RewardLedgerSumAggregateInputType = {
    id?: true
    userId?: true
    points?: true
    refId?: true
  }

  export type RewardLedgerMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    points?: true
    description?: true
    refId?: true
    createdAt?: true
  }

  export type RewardLedgerMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    points?: true
    description?: true
    refId?: true
    createdAt?: true
  }

  export type RewardLedgerCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    points?: true
    description?: true
    refId?: true
    createdAt?: true
    _all?: true
  }

  export type RewardLedgerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RewardLedger to aggregate.
     */
    where?: RewardLedgerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RewardLedgers to fetch.
     */
    orderBy?: RewardLedgerOrderByWithRelationInput | RewardLedgerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RewardLedgerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RewardLedgers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RewardLedgers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RewardLedgers
    **/
    _count?: true | RewardLedgerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RewardLedgerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RewardLedgerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RewardLedgerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RewardLedgerMaxAggregateInputType
  }

  export type GetRewardLedgerAggregateType<T extends RewardLedgerAggregateArgs> = {
        [P in keyof T & keyof AggregateRewardLedger]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRewardLedger[P]>
      : GetScalarType<T[P], AggregateRewardLedger[P]>
  }




  export type RewardLedgerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RewardLedgerWhereInput
    orderBy?: RewardLedgerOrderByWithAggregationInput | RewardLedgerOrderByWithAggregationInput[]
    by: RewardLedgerScalarFieldEnum[] | RewardLedgerScalarFieldEnum
    having?: RewardLedgerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RewardLedgerCountAggregateInputType | true
    _avg?: RewardLedgerAvgAggregateInputType
    _sum?: RewardLedgerSumAggregateInputType
    _min?: RewardLedgerMinAggregateInputType
    _max?: RewardLedgerMaxAggregateInputType
  }

  export type RewardLedgerGroupByOutputType = {
    id: number
    userId: number
    type: string
    points: number
    description: string | null
    refId: number | null
    createdAt: Date
    _count: RewardLedgerCountAggregateOutputType | null
    _avg: RewardLedgerAvgAggregateOutputType | null
    _sum: RewardLedgerSumAggregateOutputType | null
    _min: RewardLedgerMinAggregateOutputType | null
    _max: RewardLedgerMaxAggregateOutputType | null
  }

  type GetRewardLedgerGroupByPayload<T extends RewardLedgerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RewardLedgerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RewardLedgerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RewardLedgerGroupByOutputType[P]>
            : GetScalarType<T[P], RewardLedgerGroupByOutputType[P]>
        }
      >
    >


  export type RewardLedgerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    points?: boolean
    description?: boolean
    refId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rewardLedger"]>

  export type RewardLedgerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    points?: boolean
    description?: boolean
    refId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rewardLedger"]>

  export type RewardLedgerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    points?: boolean
    description?: boolean
    refId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rewardLedger"]>

  export type RewardLedgerSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    points?: boolean
    description?: boolean
    refId?: boolean
    createdAt?: boolean
  }

  export type RewardLedgerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "points" | "description" | "refId" | "createdAt", ExtArgs["result"]["rewardLedger"]>
  export type RewardLedgerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RewardLedgerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RewardLedgerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RewardLedgerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RewardLedger"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      type: string
      points: number
      description: string | null
      refId: number | null
      createdAt: Date
    }, ExtArgs["result"]["rewardLedger"]>
    composites: {}
  }

  type RewardLedgerGetPayload<S extends boolean | null | undefined | RewardLedgerDefaultArgs> = $Result.GetResult<Prisma.$RewardLedgerPayload, S>

  type RewardLedgerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RewardLedgerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RewardLedgerCountAggregateInputType | true
    }

  export interface RewardLedgerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RewardLedger'], meta: { name: 'RewardLedger' } }
    /**
     * Find zero or one RewardLedger that matches the filter.
     * @param {RewardLedgerFindUniqueArgs} args - Arguments to find a RewardLedger
     * @example
     * // Get one RewardLedger
     * const rewardLedger = await prisma.rewardLedger.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RewardLedgerFindUniqueArgs>(args: SelectSubset<T, RewardLedgerFindUniqueArgs<ExtArgs>>): Prisma__RewardLedgerClient<$Result.GetResult<Prisma.$RewardLedgerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RewardLedger that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RewardLedgerFindUniqueOrThrowArgs} args - Arguments to find a RewardLedger
     * @example
     * // Get one RewardLedger
     * const rewardLedger = await prisma.rewardLedger.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RewardLedgerFindUniqueOrThrowArgs>(args: SelectSubset<T, RewardLedgerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RewardLedgerClient<$Result.GetResult<Prisma.$RewardLedgerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RewardLedger that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardLedgerFindFirstArgs} args - Arguments to find a RewardLedger
     * @example
     * // Get one RewardLedger
     * const rewardLedger = await prisma.rewardLedger.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RewardLedgerFindFirstArgs>(args?: SelectSubset<T, RewardLedgerFindFirstArgs<ExtArgs>>): Prisma__RewardLedgerClient<$Result.GetResult<Prisma.$RewardLedgerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RewardLedger that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardLedgerFindFirstOrThrowArgs} args - Arguments to find a RewardLedger
     * @example
     * // Get one RewardLedger
     * const rewardLedger = await prisma.rewardLedger.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RewardLedgerFindFirstOrThrowArgs>(args?: SelectSubset<T, RewardLedgerFindFirstOrThrowArgs<ExtArgs>>): Prisma__RewardLedgerClient<$Result.GetResult<Prisma.$RewardLedgerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RewardLedgers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardLedgerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RewardLedgers
     * const rewardLedgers = await prisma.rewardLedger.findMany()
     * 
     * // Get first 10 RewardLedgers
     * const rewardLedgers = await prisma.rewardLedger.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rewardLedgerWithIdOnly = await prisma.rewardLedger.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RewardLedgerFindManyArgs>(args?: SelectSubset<T, RewardLedgerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RewardLedgerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RewardLedger.
     * @param {RewardLedgerCreateArgs} args - Arguments to create a RewardLedger.
     * @example
     * // Create one RewardLedger
     * const RewardLedger = await prisma.rewardLedger.create({
     *   data: {
     *     // ... data to create a RewardLedger
     *   }
     * })
     * 
     */
    create<T extends RewardLedgerCreateArgs>(args: SelectSubset<T, RewardLedgerCreateArgs<ExtArgs>>): Prisma__RewardLedgerClient<$Result.GetResult<Prisma.$RewardLedgerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RewardLedgers.
     * @param {RewardLedgerCreateManyArgs} args - Arguments to create many RewardLedgers.
     * @example
     * // Create many RewardLedgers
     * const rewardLedger = await prisma.rewardLedger.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RewardLedgerCreateManyArgs>(args?: SelectSubset<T, RewardLedgerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RewardLedgers and returns the data saved in the database.
     * @param {RewardLedgerCreateManyAndReturnArgs} args - Arguments to create many RewardLedgers.
     * @example
     * // Create many RewardLedgers
     * const rewardLedger = await prisma.rewardLedger.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RewardLedgers and only return the `id`
     * const rewardLedgerWithIdOnly = await prisma.rewardLedger.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RewardLedgerCreateManyAndReturnArgs>(args?: SelectSubset<T, RewardLedgerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RewardLedgerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RewardLedger.
     * @param {RewardLedgerDeleteArgs} args - Arguments to delete one RewardLedger.
     * @example
     * // Delete one RewardLedger
     * const RewardLedger = await prisma.rewardLedger.delete({
     *   where: {
     *     // ... filter to delete one RewardLedger
     *   }
     * })
     * 
     */
    delete<T extends RewardLedgerDeleteArgs>(args: SelectSubset<T, RewardLedgerDeleteArgs<ExtArgs>>): Prisma__RewardLedgerClient<$Result.GetResult<Prisma.$RewardLedgerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RewardLedger.
     * @param {RewardLedgerUpdateArgs} args - Arguments to update one RewardLedger.
     * @example
     * // Update one RewardLedger
     * const rewardLedger = await prisma.rewardLedger.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RewardLedgerUpdateArgs>(args: SelectSubset<T, RewardLedgerUpdateArgs<ExtArgs>>): Prisma__RewardLedgerClient<$Result.GetResult<Prisma.$RewardLedgerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RewardLedgers.
     * @param {RewardLedgerDeleteManyArgs} args - Arguments to filter RewardLedgers to delete.
     * @example
     * // Delete a few RewardLedgers
     * const { count } = await prisma.rewardLedger.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RewardLedgerDeleteManyArgs>(args?: SelectSubset<T, RewardLedgerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RewardLedgers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardLedgerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RewardLedgers
     * const rewardLedger = await prisma.rewardLedger.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RewardLedgerUpdateManyArgs>(args: SelectSubset<T, RewardLedgerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RewardLedgers and returns the data updated in the database.
     * @param {RewardLedgerUpdateManyAndReturnArgs} args - Arguments to update many RewardLedgers.
     * @example
     * // Update many RewardLedgers
     * const rewardLedger = await prisma.rewardLedger.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RewardLedgers and only return the `id`
     * const rewardLedgerWithIdOnly = await prisma.rewardLedger.updateManyAndReturn({
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
    updateManyAndReturn<T extends RewardLedgerUpdateManyAndReturnArgs>(args: SelectSubset<T, RewardLedgerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RewardLedgerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RewardLedger.
     * @param {RewardLedgerUpsertArgs} args - Arguments to update or create a RewardLedger.
     * @example
     * // Update or create a RewardLedger
     * const rewardLedger = await prisma.rewardLedger.upsert({
     *   create: {
     *     // ... data to create a RewardLedger
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RewardLedger we want to update
     *   }
     * })
     */
    upsert<T extends RewardLedgerUpsertArgs>(args: SelectSubset<T, RewardLedgerUpsertArgs<ExtArgs>>): Prisma__RewardLedgerClient<$Result.GetResult<Prisma.$RewardLedgerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RewardLedgers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardLedgerCountArgs} args - Arguments to filter RewardLedgers to count.
     * @example
     * // Count the number of RewardLedgers
     * const count = await prisma.rewardLedger.count({
     *   where: {
     *     // ... the filter for the RewardLedgers we want to count
     *   }
     * })
    **/
    count<T extends RewardLedgerCountArgs>(
      args?: Subset<T, RewardLedgerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RewardLedgerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RewardLedger.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardLedgerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RewardLedgerAggregateArgs>(args: Subset<T, RewardLedgerAggregateArgs>): Prisma.PrismaPromise<GetRewardLedgerAggregateType<T>>

    /**
     * Group by RewardLedger.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardLedgerGroupByArgs} args - Group by arguments.
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
      T extends RewardLedgerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RewardLedgerGroupByArgs['orderBy'] }
        : { orderBy?: RewardLedgerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RewardLedgerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRewardLedgerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RewardLedger model
   */
  readonly fields: RewardLedgerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RewardLedger.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RewardLedgerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RewardLedger model
   */
  interface RewardLedgerFieldRefs {
    readonly id: FieldRef<"RewardLedger", 'Int'>
    readonly userId: FieldRef<"RewardLedger", 'Int'>
    readonly type: FieldRef<"RewardLedger", 'String'>
    readonly points: FieldRef<"RewardLedger", 'Float'>
    readonly description: FieldRef<"RewardLedger", 'String'>
    readonly refId: FieldRef<"RewardLedger", 'Int'>
    readonly createdAt: FieldRef<"RewardLedger", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RewardLedger findUnique
   */
  export type RewardLedgerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardLedger
     */
    select?: RewardLedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RewardLedger
     */
    omit?: RewardLedgerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardLedgerInclude<ExtArgs> | null
    /**
     * Filter, which RewardLedger to fetch.
     */
    where: RewardLedgerWhereUniqueInput
  }

  /**
   * RewardLedger findUniqueOrThrow
   */
  export type RewardLedgerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardLedger
     */
    select?: RewardLedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RewardLedger
     */
    omit?: RewardLedgerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardLedgerInclude<ExtArgs> | null
    /**
     * Filter, which RewardLedger to fetch.
     */
    where: RewardLedgerWhereUniqueInput
  }

  /**
   * RewardLedger findFirst
   */
  export type RewardLedgerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardLedger
     */
    select?: RewardLedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RewardLedger
     */
    omit?: RewardLedgerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardLedgerInclude<ExtArgs> | null
    /**
     * Filter, which RewardLedger to fetch.
     */
    where?: RewardLedgerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RewardLedgers to fetch.
     */
    orderBy?: RewardLedgerOrderByWithRelationInput | RewardLedgerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RewardLedgers.
     */
    cursor?: RewardLedgerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RewardLedgers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RewardLedgers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RewardLedgers.
     */
    distinct?: RewardLedgerScalarFieldEnum | RewardLedgerScalarFieldEnum[]
  }

  /**
   * RewardLedger findFirstOrThrow
   */
  export type RewardLedgerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardLedger
     */
    select?: RewardLedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RewardLedger
     */
    omit?: RewardLedgerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardLedgerInclude<ExtArgs> | null
    /**
     * Filter, which RewardLedger to fetch.
     */
    where?: RewardLedgerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RewardLedgers to fetch.
     */
    orderBy?: RewardLedgerOrderByWithRelationInput | RewardLedgerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RewardLedgers.
     */
    cursor?: RewardLedgerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RewardLedgers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RewardLedgers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RewardLedgers.
     */
    distinct?: RewardLedgerScalarFieldEnum | RewardLedgerScalarFieldEnum[]
  }

  /**
   * RewardLedger findMany
   */
  export type RewardLedgerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardLedger
     */
    select?: RewardLedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RewardLedger
     */
    omit?: RewardLedgerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardLedgerInclude<ExtArgs> | null
    /**
     * Filter, which RewardLedgers to fetch.
     */
    where?: RewardLedgerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RewardLedgers to fetch.
     */
    orderBy?: RewardLedgerOrderByWithRelationInput | RewardLedgerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RewardLedgers.
     */
    cursor?: RewardLedgerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RewardLedgers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RewardLedgers.
     */
    skip?: number
    distinct?: RewardLedgerScalarFieldEnum | RewardLedgerScalarFieldEnum[]
  }

  /**
   * RewardLedger create
   */
  export type RewardLedgerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardLedger
     */
    select?: RewardLedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RewardLedger
     */
    omit?: RewardLedgerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardLedgerInclude<ExtArgs> | null
    /**
     * The data needed to create a RewardLedger.
     */
    data: XOR<RewardLedgerCreateInput, RewardLedgerUncheckedCreateInput>
  }

  /**
   * RewardLedger createMany
   */
  export type RewardLedgerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RewardLedgers.
     */
    data: RewardLedgerCreateManyInput | RewardLedgerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RewardLedger createManyAndReturn
   */
  export type RewardLedgerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardLedger
     */
    select?: RewardLedgerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RewardLedger
     */
    omit?: RewardLedgerOmit<ExtArgs> | null
    /**
     * The data used to create many RewardLedgers.
     */
    data: RewardLedgerCreateManyInput | RewardLedgerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardLedgerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RewardLedger update
   */
  export type RewardLedgerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardLedger
     */
    select?: RewardLedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RewardLedger
     */
    omit?: RewardLedgerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardLedgerInclude<ExtArgs> | null
    /**
     * The data needed to update a RewardLedger.
     */
    data: XOR<RewardLedgerUpdateInput, RewardLedgerUncheckedUpdateInput>
    /**
     * Choose, which RewardLedger to update.
     */
    where: RewardLedgerWhereUniqueInput
  }

  /**
   * RewardLedger updateMany
   */
  export type RewardLedgerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RewardLedgers.
     */
    data: XOR<RewardLedgerUpdateManyMutationInput, RewardLedgerUncheckedUpdateManyInput>
    /**
     * Filter which RewardLedgers to update
     */
    where?: RewardLedgerWhereInput
    /**
     * Limit how many RewardLedgers to update.
     */
    limit?: number
  }

  /**
   * RewardLedger updateManyAndReturn
   */
  export type RewardLedgerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardLedger
     */
    select?: RewardLedgerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RewardLedger
     */
    omit?: RewardLedgerOmit<ExtArgs> | null
    /**
     * The data used to update RewardLedgers.
     */
    data: XOR<RewardLedgerUpdateManyMutationInput, RewardLedgerUncheckedUpdateManyInput>
    /**
     * Filter which RewardLedgers to update
     */
    where?: RewardLedgerWhereInput
    /**
     * Limit how many RewardLedgers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardLedgerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RewardLedger upsert
   */
  export type RewardLedgerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardLedger
     */
    select?: RewardLedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RewardLedger
     */
    omit?: RewardLedgerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardLedgerInclude<ExtArgs> | null
    /**
     * The filter to search for the RewardLedger to update in case it exists.
     */
    where: RewardLedgerWhereUniqueInput
    /**
     * In case the RewardLedger found by the `where` argument doesn't exist, create a new RewardLedger with this data.
     */
    create: XOR<RewardLedgerCreateInput, RewardLedgerUncheckedCreateInput>
    /**
     * In case the RewardLedger was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RewardLedgerUpdateInput, RewardLedgerUncheckedUpdateInput>
  }

  /**
   * RewardLedger delete
   */
  export type RewardLedgerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardLedger
     */
    select?: RewardLedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RewardLedger
     */
    omit?: RewardLedgerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardLedgerInclude<ExtArgs> | null
    /**
     * Filter which RewardLedger to delete.
     */
    where: RewardLedgerWhereUniqueInput
  }

  /**
   * RewardLedger deleteMany
   */
  export type RewardLedgerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RewardLedgers to delete
     */
    where?: RewardLedgerWhereInput
    /**
     * Limit how many RewardLedgers to delete.
     */
    limit?: number
  }

  /**
   * RewardLedger without action
   */
  export type RewardLedgerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardLedger
     */
    select?: RewardLedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RewardLedger
     */
    omit?: RewardLedgerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardLedgerInclude<ExtArgs> | null
  }


  /**
   * Model Ticket
   */

  export type AggregateTicket = {
    _count: TicketCountAggregateOutputType | null
    _avg: TicketAvgAggregateOutputType | null
    _sum: TicketSumAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  export type TicketAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type TicketSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type TicketMinAggregateOutputType = {
    id: number | null
    subject: string | null
    status: string | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TicketMaxAggregateOutputType = {
    id: number | null
    subject: string | null
    status: string | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TicketCountAggregateOutputType = {
    id: number
    subject: number
    status: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TicketAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type TicketSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type TicketMinAggregateInputType = {
    id?: true
    subject?: true
    status?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TicketMaxAggregateInputType = {
    id?: true
    subject?: true
    status?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TicketCountAggregateInputType = {
    id?: true
    subject?: true
    status?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TicketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ticket to aggregate.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tickets
    **/
    _count?: true | TicketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TicketAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TicketSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketMaxAggregateInputType
  }

  export type GetTicketAggregateType<T extends TicketAggregateArgs> = {
        [P in keyof T & keyof AggregateTicket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicket[P]>
      : GetScalarType<T[P], AggregateTicket[P]>
  }




  export type TicketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithAggregationInput | TicketOrderByWithAggregationInput[]
    by: TicketScalarFieldEnum[] | TicketScalarFieldEnum
    having?: TicketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketCountAggregateInputType | true
    _avg?: TicketAvgAggregateInputType
    _sum?: TicketSumAggregateInputType
    _min?: TicketMinAggregateInputType
    _max?: TicketMaxAggregateInputType
  }

  export type TicketGroupByOutputType = {
    id: number
    subject: string
    status: string
    userId: number
    createdAt: Date
    updatedAt: Date
    _count: TicketCountAggregateOutputType | null
    _avg: TicketAvgAggregateOutputType | null
    _sum: TicketSumAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  type GetTicketGroupByPayload<T extends TicketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketGroupByOutputType[P]>
            : GetScalarType<T[P], TicketGroupByOutputType[P]>
        }
      >
    >


  export type TicketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subject?: boolean
    status?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    messages?: boolean | Ticket$messagesArgs<ExtArgs>
    _count?: boolean | TicketCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subject?: boolean
    status?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subject?: boolean
    status?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectScalar = {
    id?: boolean
    subject?: boolean
    status?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TicketOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "subject" | "status" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["ticket"]>
  export type TicketInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    messages?: boolean | Ticket$messagesArgs<ExtArgs>
    _count?: boolean | TicketCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TicketIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TicketIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TicketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ticket"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      messages: Prisma.$MessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      subject: string
      status: string
      userId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["ticket"]>
    composites: {}
  }

  type TicketGetPayload<S extends boolean | null | undefined | TicketDefaultArgs> = $Result.GetResult<Prisma.$TicketPayload, S>

  type TicketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TicketFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TicketCountAggregateInputType | true
    }

  export interface TicketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ticket'], meta: { name: 'Ticket' } }
    /**
     * Find zero or one Ticket that matches the filter.
     * @param {TicketFindUniqueArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TicketFindUniqueArgs>(args: SelectSubset<T, TicketFindUniqueArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ticket that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TicketFindUniqueOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TicketFindUniqueOrThrowArgs>(args: SelectSubset<T, TicketFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ticket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TicketFindFirstArgs>(args?: SelectSubset<T, TicketFindFirstArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ticket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TicketFindFirstOrThrowArgs>(args?: SelectSubset<T, TicketFindFirstOrThrowArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tickets
     * const tickets = await prisma.ticket.findMany()
     * 
     * // Get first 10 Tickets
     * const tickets = await prisma.ticket.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketWithIdOnly = await prisma.ticket.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TicketFindManyArgs>(args?: SelectSubset<T, TicketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ticket.
     * @param {TicketCreateArgs} args - Arguments to create a Ticket.
     * @example
     * // Create one Ticket
     * const Ticket = await prisma.ticket.create({
     *   data: {
     *     // ... data to create a Ticket
     *   }
     * })
     * 
     */
    create<T extends TicketCreateArgs>(args: SelectSubset<T, TicketCreateArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tickets.
     * @param {TicketCreateManyArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const ticket = await prisma.ticket.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TicketCreateManyArgs>(args?: SelectSubset<T, TicketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tickets and returns the data saved in the database.
     * @param {TicketCreateManyAndReturnArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const ticket = await prisma.ticket.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tickets and only return the `id`
     * const ticketWithIdOnly = await prisma.ticket.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TicketCreateManyAndReturnArgs>(args?: SelectSubset<T, TicketCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ticket.
     * @param {TicketDeleteArgs} args - Arguments to delete one Ticket.
     * @example
     * // Delete one Ticket
     * const Ticket = await prisma.ticket.delete({
     *   where: {
     *     // ... filter to delete one Ticket
     *   }
     * })
     * 
     */
    delete<T extends TicketDeleteArgs>(args: SelectSubset<T, TicketDeleteArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ticket.
     * @param {TicketUpdateArgs} args - Arguments to update one Ticket.
     * @example
     * // Update one Ticket
     * const ticket = await prisma.ticket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TicketUpdateArgs>(args: SelectSubset<T, TicketUpdateArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tickets.
     * @param {TicketDeleteManyArgs} args - Arguments to filter Tickets to delete.
     * @example
     * // Delete a few Tickets
     * const { count } = await prisma.ticket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TicketDeleteManyArgs>(args?: SelectSubset<T, TicketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tickets
     * const ticket = await prisma.ticket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TicketUpdateManyArgs>(args: SelectSubset<T, TicketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets and returns the data updated in the database.
     * @param {TicketUpdateManyAndReturnArgs} args - Arguments to update many Tickets.
     * @example
     * // Update many Tickets
     * const ticket = await prisma.ticket.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tickets and only return the `id`
     * const ticketWithIdOnly = await prisma.ticket.updateManyAndReturn({
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
    updateManyAndReturn<T extends TicketUpdateManyAndReturnArgs>(args: SelectSubset<T, TicketUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ticket.
     * @param {TicketUpsertArgs} args - Arguments to update or create a Ticket.
     * @example
     * // Update or create a Ticket
     * const ticket = await prisma.ticket.upsert({
     *   create: {
     *     // ... data to create a Ticket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ticket we want to update
     *   }
     * })
     */
    upsert<T extends TicketUpsertArgs>(args: SelectSubset<T, TicketUpsertArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketCountArgs} args - Arguments to filter Tickets to count.
     * @example
     * // Count the number of Tickets
     * const count = await prisma.ticket.count({
     *   where: {
     *     // ... the filter for the Tickets we want to count
     *   }
     * })
    **/
    count<T extends TicketCountArgs>(
      args?: Subset<T, TicketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TicketAggregateArgs>(args: Subset<T, TicketAggregateArgs>): Prisma.PrismaPromise<GetTicketAggregateType<T>>

    /**
     * Group by Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketGroupByArgs} args - Group by arguments.
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
      T extends TicketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketGroupByArgs['orderBy'] }
        : { orderBy?: TicketGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TicketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ticket model
   */
  readonly fields: TicketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ticket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    messages<T extends Ticket$messagesArgs<ExtArgs> = {}>(args?: Subset<T, Ticket$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Ticket model
   */
  interface TicketFieldRefs {
    readonly id: FieldRef<"Ticket", 'Int'>
    readonly subject: FieldRef<"Ticket", 'String'>
    readonly status: FieldRef<"Ticket", 'String'>
    readonly userId: FieldRef<"Ticket", 'Int'>
    readonly createdAt: FieldRef<"Ticket", 'DateTime'>
    readonly updatedAt: FieldRef<"Ticket", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Ticket findUnique
   */
  export type TicketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket findUniqueOrThrow
   */
  export type TicketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket findFirst
   */
  export type TicketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket findFirstOrThrow
   */
  export type TicketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket findMany
   */
  export type TicketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Tickets to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket create
   */
  export type TicketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The data needed to create a Ticket.
     */
    data: XOR<TicketCreateInput, TicketUncheckedCreateInput>
  }

  /**
   * Ticket createMany
   */
  export type TicketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tickets.
     */
    data: TicketCreateManyInput | TicketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ticket createManyAndReturn
   */
  export type TicketCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * The data used to create many Tickets.
     */
    data: TicketCreateManyInput | TicketCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ticket update
   */
  export type TicketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The data needed to update a Ticket.
     */
    data: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
    /**
     * Choose, which Ticket to update.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket updateMany
   */
  export type TicketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tickets.
     */
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyInput>
    /**
     * Filter which Tickets to update
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to update.
     */
    limit?: number
  }

  /**
   * Ticket updateManyAndReturn
   */
  export type TicketUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * The data used to update Tickets.
     */
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyInput>
    /**
     * Filter which Tickets to update
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ticket upsert
   */
  export type TicketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The filter to search for the Ticket to update in case it exists.
     */
    where: TicketWhereUniqueInput
    /**
     * In case the Ticket found by the `where` argument doesn't exist, create a new Ticket with this data.
     */
    create: XOR<TicketCreateInput, TicketUncheckedCreateInput>
    /**
     * In case the Ticket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
  }

  /**
   * Ticket delete
   */
  export type TicketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter which Ticket to delete.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket deleteMany
   */
  export type TicketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tickets to delete
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to delete.
     */
    limit?: number
  }

  /**
   * Ticket.messages
   */
  export type Ticket$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Ticket without action
   */
  export type TicketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
  }


  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageAvgAggregateOutputType = {
    id: number | null
    ticketId: number | null
    senderId: number | null
  }

  export type MessageSumAggregateOutputType = {
    id: number | null
    ticketId: number | null
    senderId: number | null
  }

  export type MessageMinAggregateOutputType = {
    id: number | null
    ticketId: number | null
    senderId: number | null
    content: string | null
    createdAt: Date | null
  }

  export type MessageMaxAggregateOutputType = {
    id: number | null
    ticketId: number | null
    senderId: number | null
    content: string | null
    createdAt: Date | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    ticketId: number
    senderId: number
    content: number
    createdAt: number
    _all: number
  }


  export type MessageAvgAggregateInputType = {
    id?: true
    ticketId?: true
    senderId?: true
  }

  export type MessageSumAggregateInputType = {
    id?: true
    ticketId?: true
    senderId?: true
  }

  export type MessageMinAggregateInputType = {
    id?: true
    ticketId?: true
    senderId?: true
    content?: true
    createdAt?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    ticketId?: true
    senderId?: true
    content?: true
    createdAt?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    ticketId?: true
    senderId?: true
    content?: true
    createdAt?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MessageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MessageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _avg?: MessageAvgAggregateInputType
    _sum?: MessageSumAggregateInputType
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: number
    ticketId: number
    senderId: number
    content: string
    createdAt: Date
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticketId?: boolean
    senderId?: boolean
    content?: boolean
    createdAt?: boolean
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticketId?: boolean
    senderId?: boolean
    content?: boolean
    createdAt?: boolean
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticketId?: boolean
    senderId?: boolean
    content?: boolean
    createdAt?: boolean
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectScalar = {
    id?: boolean
    ticketId?: boolean
    senderId?: boolean
    content?: boolean
    createdAt?: boolean
  }

  export type MessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ticketId" | "senderId" | "content" | "createdAt", ExtArgs["result"]["message"]>
  export type MessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {
      ticket: Prisma.$TicketPayload<ExtArgs>
      sender: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      ticketId: number
      senderId: number
      content: string
      createdAt: Date
    }, ExtArgs["result"]["message"]>
    composites: {}
  }

  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageFindUniqueArgs>(args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageFindFirstArgs>(args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageFindManyArgs>(args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
     */
    create<T extends MessageCreateArgs>(args: SelectSubset<T, MessageCreateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageCreateManyArgs>(args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {MessageCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
     */
    delete<T extends MessageDeleteArgs>(args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageUpdateArgs>(args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageDeleteManyArgs>(args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageUpdateManyArgs>(args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {MessageUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.updateManyAndReturn({
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
    updateManyAndReturn<T extends MessageUpdateManyAndReturnArgs>(args: SelectSubset<T, MessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends MessageUpsertArgs>(args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
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
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ticket<T extends TicketDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TicketDefaultArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sender<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Message model
   */
  interface MessageFieldRefs {
    readonly id: FieldRef<"Message", 'Int'>
    readonly ticketId: FieldRef<"Message", 'Int'>
    readonly senderId: FieldRef<"Message", 'Int'>
    readonly content: FieldRef<"Message", 'String'>
    readonly createdAt: FieldRef<"Message", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }

  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Message createManyAndReturn
   */
  export type MessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Message updateManyAndReturn
   */
  export type MessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }

  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to delete.
     */
    limit?: number
  }

  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
  }


  /**
   * Model ReferralReward
   */

  export type AggregateReferralReward = {
    _count: ReferralRewardCountAggregateOutputType | null
    _avg: ReferralRewardAvgAggregateOutputType | null
    _sum: ReferralRewardSumAggregateOutputType | null
    _min: ReferralRewardMinAggregateOutputType | null
    _max: ReferralRewardMaxAggregateOutputType | null
  }

  export type ReferralRewardAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    referredUserId: number | null
    amount: number | null
  }

  export type ReferralRewardSumAggregateOutputType = {
    id: number | null
    userId: number | null
    referredUserId: number | null
    amount: number | null
  }

  export type ReferralRewardMinAggregateOutputType = {
    id: number | null
    userId: number | null
    referredUserId: number | null
    amount: number | null
    status: string | null
    createdAt: Date | null
    redeemedAt: Date | null
  }

  export type ReferralRewardMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    referredUserId: number | null
    amount: number | null
    status: string | null
    createdAt: Date | null
    redeemedAt: Date | null
  }

  export type ReferralRewardCountAggregateOutputType = {
    id: number
    userId: number
    referredUserId: number
    amount: number
    status: number
    createdAt: number
    redeemedAt: number
    _all: number
  }


  export type ReferralRewardAvgAggregateInputType = {
    id?: true
    userId?: true
    referredUserId?: true
    amount?: true
  }

  export type ReferralRewardSumAggregateInputType = {
    id?: true
    userId?: true
    referredUserId?: true
    amount?: true
  }

  export type ReferralRewardMinAggregateInputType = {
    id?: true
    userId?: true
    referredUserId?: true
    amount?: true
    status?: true
    createdAt?: true
    redeemedAt?: true
  }

  export type ReferralRewardMaxAggregateInputType = {
    id?: true
    userId?: true
    referredUserId?: true
    amount?: true
    status?: true
    createdAt?: true
    redeemedAt?: true
  }

  export type ReferralRewardCountAggregateInputType = {
    id?: true
    userId?: true
    referredUserId?: true
    amount?: true
    status?: true
    createdAt?: true
    redeemedAt?: true
    _all?: true
  }

  export type ReferralRewardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReferralReward to aggregate.
     */
    where?: ReferralRewardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReferralRewards to fetch.
     */
    orderBy?: ReferralRewardOrderByWithRelationInput | ReferralRewardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReferralRewardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReferralRewards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReferralRewards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReferralRewards
    **/
    _count?: true | ReferralRewardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReferralRewardAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReferralRewardSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReferralRewardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReferralRewardMaxAggregateInputType
  }

  export type GetReferralRewardAggregateType<T extends ReferralRewardAggregateArgs> = {
        [P in keyof T & keyof AggregateReferralReward]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReferralReward[P]>
      : GetScalarType<T[P], AggregateReferralReward[P]>
  }




  export type ReferralRewardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReferralRewardWhereInput
    orderBy?: ReferralRewardOrderByWithAggregationInput | ReferralRewardOrderByWithAggregationInput[]
    by: ReferralRewardScalarFieldEnum[] | ReferralRewardScalarFieldEnum
    having?: ReferralRewardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReferralRewardCountAggregateInputType | true
    _avg?: ReferralRewardAvgAggregateInputType
    _sum?: ReferralRewardSumAggregateInputType
    _min?: ReferralRewardMinAggregateInputType
    _max?: ReferralRewardMaxAggregateInputType
  }

  export type ReferralRewardGroupByOutputType = {
    id: number
    userId: number
    referredUserId: number
    amount: number
    status: string
    createdAt: Date
    redeemedAt: Date | null
    _count: ReferralRewardCountAggregateOutputType | null
    _avg: ReferralRewardAvgAggregateOutputType | null
    _sum: ReferralRewardSumAggregateOutputType | null
    _min: ReferralRewardMinAggregateOutputType | null
    _max: ReferralRewardMaxAggregateOutputType | null
  }

  type GetReferralRewardGroupByPayload<T extends ReferralRewardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReferralRewardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReferralRewardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReferralRewardGroupByOutputType[P]>
            : GetScalarType<T[P], ReferralRewardGroupByOutputType[P]>
        }
      >
    >


  export type ReferralRewardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    referredUserId?: boolean
    amount?: boolean
    status?: boolean
    createdAt?: boolean
    redeemedAt?: boolean
    referrer?: boolean | UserDefaultArgs<ExtArgs>
    referredUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["referralReward"]>

  export type ReferralRewardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    referredUserId?: boolean
    amount?: boolean
    status?: boolean
    createdAt?: boolean
    redeemedAt?: boolean
    referrer?: boolean | UserDefaultArgs<ExtArgs>
    referredUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["referralReward"]>

  export type ReferralRewardSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    referredUserId?: boolean
    amount?: boolean
    status?: boolean
    createdAt?: boolean
    redeemedAt?: boolean
    referrer?: boolean | UserDefaultArgs<ExtArgs>
    referredUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["referralReward"]>

  export type ReferralRewardSelectScalar = {
    id?: boolean
    userId?: boolean
    referredUserId?: boolean
    amount?: boolean
    status?: boolean
    createdAt?: boolean
    redeemedAt?: boolean
  }

  export type ReferralRewardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "referredUserId" | "amount" | "status" | "createdAt" | "redeemedAt", ExtArgs["result"]["referralReward"]>
  export type ReferralRewardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    referrer?: boolean | UserDefaultArgs<ExtArgs>
    referredUser?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReferralRewardIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    referrer?: boolean | UserDefaultArgs<ExtArgs>
    referredUser?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReferralRewardIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    referrer?: boolean | UserDefaultArgs<ExtArgs>
    referredUser?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ReferralRewardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReferralReward"
    objects: {
      referrer: Prisma.$UserPayload<ExtArgs>
      referredUser: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      referredUserId: number
      amount: number
      status: string
      createdAt: Date
      redeemedAt: Date | null
    }, ExtArgs["result"]["referralReward"]>
    composites: {}
  }

  type ReferralRewardGetPayload<S extends boolean | null | undefined | ReferralRewardDefaultArgs> = $Result.GetResult<Prisma.$ReferralRewardPayload, S>

  type ReferralRewardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReferralRewardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReferralRewardCountAggregateInputType | true
    }

  export interface ReferralRewardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReferralReward'], meta: { name: 'ReferralReward' } }
    /**
     * Find zero or one ReferralReward that matches the filter.
     * @param {ReferralRewardFindUniqueArgs} args - Arguments to find a ReferralReward
     * @example
     * // Get one ReferralReward
     * const referralReward = await prisma.referralReward.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReferralRewardFindUniqueArgs>(args: SelectSubset<T, ReferralRewardFindUniqueArgs<ExtArgs>>): Prisma__ReferralRewardClient<$Result.GetResult<Prisma.$ReferralRewardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ReferralReward that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReferralRewardFindUniqueOrThrowArgs} args - Arguments to find a ReferralReward
     * @example
     * // Get one ReferralReward
     * const referralReward = await prisma.referralReward.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReferralRewardFindUniqueOrThrowArgs>(args: SelectSubset<T, ReferralRewardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReferralRewardClient<$Result.GetResult<Prisma.$ReferralRewardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReferralReward that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralRewardFindFirstArgs} args - Arguments to find a ReferralReward
     * @example
     * // Get one ReferralReward
     * const referralReward = await prisma.referralReward.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReferralRewardFindFirstArgs>(args?: SelectSubset<T, ReferralRewardFindFirstArgs<ExtArgs>>): Prisma__ReferralRewardClient<$Result.GetResult<Prisma.$ReferralRewardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReferralReward that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralRewardFindFirstOrThrowArgs} args - Arguments to find a ReferralReward
     * @example
     * // Get one ReferralReward
     * const referralReward = await prisma.referralReward.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReferralRewardFindFirstOrThrowArgs>(args?: SelectSubset<T, ReferralRewardFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReferralRewardClient<$Result.GetResult<Prisma.$ReferralRewardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReferralRewards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralRewardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReferralRewards
     * const referralRewards = await prisma.referralReward.findMany()
     * 
     * // Get first 10 ReferralRewards
     * const referralRewards = await prisma.referralReward.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const referralRewardWithIdOnly = await prisma.referralReward.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReferralRewardFindManyArgs>(args?: SelectSubset<T, ReferralRewardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferralRewardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ReferralReward.
     * @param {ReferralRewardCreateArgs} args - Arguments to create a ReferralReward.
     * @example
     * // Create one ReferralReward
     * const ReferralReward = await prisma.referralReward.create({
     *   data: {
     *     // ... data to create a ReferralReward
     *   }
     * })
     * 
     */
    create<T extends ReferralRewardCreateArgs>(args: SelectSubset<T, ReferralRewardCreateArgs<ExtArgs>>): Prisma__ReferralRewardClient<$Result.GetResult<Prisma.$ReferralRewardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ReferralRewards.
     * @param {ReferralRewardCreateManyArgs} args - Arguments to create many ReferralRewards.
     * @example
     * // Create many ReferralRewards
     * const referralReward = await prisma.referralReward.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReferralRewardCreateManyArgs>(args?: SelectSubset<T, ReferralRewardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ReferralRewards and returns the data saved in the database.
     * @param {ReferralRewardCreateManyAndReturnArgs} args - Arguments to create many ReferralRewards.
     * @example
     * // Create many ReferralRewards
     * const referralReward = await prisma.referralReward.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ReferralRewards and only return the `id`
     * const referralRewardWithIdOnly = await prisma.referralReward.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReferralRewardCreateManyAndReturnArgs>(args?: SelectSubset<T, ReferralRewardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferralRewardPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ReferralReward.
     * @param {ReferralRewardDeleteArgs} args - Arguments to delete one ReferralReward.
     * @example
     * // Delete one ReferralReward
     * const ReferralReward = await prisma.referralReward.delete({
     *   where: {
     *     // ... filter to delete one ReferralReward
     *   }
     * })
     * 
     */
    delete<T extends ReferralRewardDeleteArgs>(args: SelectSubset<T, ReferralRewardDeleteArgs<ExtArgs>>): Prisma__ReferralRewardClient<$Result.GetResult<Prisma.$ReferralRewardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ReferralReward.
     * @param {ReferralRewardUpdateArgs} args - Arguments to update one ReferralReward.
     * @example
     * // Update one ReferralReward
     * const referralReward = await prisma.referralReward.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReferralRewardUpdateArgs>(args: SelectSubset<T, ReferralRewardUpdateArgs<ExtArgs>>): Prisma__ReferralRewardClient<$Result.GetResult<Prisma.$ReferralRewardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ReferralRewards.
     * @param {ReferralRewardDeleteManyArgs} args - Arguments to filter ReferralRewards to delete.
     * @example
     * // Delete a few ReferralRewards
     * const { count } = await prisma.referralReward.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReferralRewardDeleteManyArgs>(args?: SelectSubset<T, ReferralRewardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReferralRewards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralRewardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReferralRewards
     * const referralReward = await prisma.referralReward.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReferralRewardUpdateManyArgs>(args: SelectSubset<T, ReferralRewardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReferralRewards and returns the data updated in the database.
     * @param {ReferralRewardUpdateManyAndReturnArgs} args - Arguments to update many ReferralRewards.
     * @example
     * // Update many ReferralRewards
     * const referralReward = await prisma.referralReward.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ReferralRewards and only return the `id`
     * const referralRewardWithIdOnly = await prisma.referralReward.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReferralRewardUpdateManyAndReturnArgs>(args: SelectSubset<T, ReferralRewardUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferralRewardPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ReferralReward.
     * @param {ReferralRewardUpsertArgs} args - Arguments to update or create a ReferralReward.
     * @example
     * // Update or create a ReferralReward
     * const referralReward = await prisma.referralReward.upsert({
     *   create: {
     *     // ... data to create a ReferralReward
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReferralReward we want to update
     *   }
     * })
     */
    upsert<T extends ReferralRewardUpsertArgs>(args: SelectSubset<T, ReferralRewardUpsertArgs<ExtArgs>>): Prisma__ReferralRewardClient<$Result.GetResult<Prisma.$ReferralRewardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ReferralRewards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralRewardCountArgs} args - Arguments to filter ReferralRewards to count.
     * @example
     * // Count the number of ReferralRewards
     * const count = await prisma.referralReward.count({
     *   where: {
     *     // ... the filter for the ReferralRewards we want to count
     *   }
     * })
    **/
    count<T extends ReferralRewardCountArgs>(
      args?: Subset<T, ReferralRewardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReferralRewardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReferralReward.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralRewardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReferralRewardAggregateArgs>(args: Subset<T, ReferralRewardAggregateArgs>): Prisma.PrismaPromise<GetReferralRewardAggregateType<T>>

    /**
     * Group by ReferralReward.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralRewardGroupByArgs} args - Group by arguments.
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
      T extends ReferralRewardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReferralRewardGroupByArgs['orderBy'] }
        : { orderBy?: ReferralRewardGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReferralRewardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReferralRewardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReferralReward model
   */
  readonly fields: ReferralRewardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReferralReward.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReferralRewardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    referrer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    referredUser<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ReferralReward model
   */
  interface ReferralRewardFieldRefs {
    readonly id: FieldRef<"ReferralReward", 'Int'>
    readonly userId: FieldRef<"ReferralReward", 'Int'>
    readonly referredUserId: FieldRef<"ReferralReward", 'Int'>
    readonly amount: FieldRef<"ReferralReward", 'Float'>
    readonly status: FieldRef<"ReferralReward", 'String'>
    readonly createdAt: FieldRef<"ReferralReward", 'DateTime'>
    readonly redeemedAt: FieldRef<"ReferralReward", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ReferralReward findUnique
   */
  export type ReferralRewardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralReward
     */
    select?: ReferralRewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralReward
     */
    omit?: ReferralRewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralRewardInclude<ExtArgs> | null
    /**
     * Filter, which ReferralReward to fetch.
     */
    where: ReferralRewardWhereUniqueInput
  }

  /**
   * ReferralReward findUniqueOrThrow
   */
  export type ReferralRewardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralReward
     */
    select?: ReferralRewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralReward
     */
    omit?: ReferralRewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralRewardInclude<ExtArgs> | null
    /**
     * Filter, which ReferralReward to fetch.
     */
    where: ReferralRewardWhereUniqueInput
  }

  /**
   * ReferralReward findFirst
   */
  export type ReferralRewardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralReward
     */
    select?: ReferralRewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralReward
     */
    omit?: ReferralRewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralRewardInclude<ExtArgs> | null
    /**
     * Filter, which ReferralReward to fetch.
     */
    where?: ReferralRewardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReferralRewards to fetch.
     */
    orderBy?: ReferralRewardOrderByWithRelationInput | ReferralRewardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReferralRewards.
     */
    cursor?: ReferralRewardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReferralRewards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReferralRewards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReferralRewards.
     */
    distinct?: ReferralRewardScalarFieldEnum | ReferralRewardScalarFieldEnum[]
  }

  /**
   * ReferralReward findFirstOrThrow
   */
  export type ReferralRewardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralReward
     */
    select?: ReferralRewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralReward
     */
    omit?: ReferralRewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralRewardInclude<ExtArgs> | null
    /**
     * Filter, which ReferralReward to fetch.
     */
    where?: ReferralRewardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReferralRewards to fetch.
     */
    orderBy?: ReferralRewardOrderByWithRelationInput | ReferralRewardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReferralRewards.
     */
    cursor?: ReferralRewardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReferralRewards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReferralRewards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReferralRewards.
     */
    distinct?: ReferralRewardScalarFieldEnum | ReferralRewardScalarFieldEnum[]
  }

  /**
   * ReferralReward findMany
   */
  export type ReferralRewardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralReward
     */
    select?: ReferralRewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralReward
     */
    omit?: ReferralRewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralRewardInclude<ExtArgs> | null
    /**
     * Filter, which ReferralRewards to fetch.
     */
    where?: ReferralRewardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReferralRewards to fetch.
     */
    orderBy?: ReferralRewardOrderByWithRelationInput | ReferralRewardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReferralRewards.
     */
    cursor?: ReferralRewardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReferralRewards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReferralRewards.
     */
    skip?: number
    distinct?: ReferralRewardScalarFieldEnum | ReferralRewardScalarFieldEnum[]
  }

  /**
   * ReferralReward create
   */
  export type ReferralRewardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralReward
     */
    select?: ReferralRewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralReward
     */
    omit?: ReferralRewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralRewardInclude<ExtArgs> | null
    /**
     * The data needed to create a ReferralReward.
     */
    data: XOR<ReferralRewardCreateInput, ReferralRewardUncheckedCreateInput>
  }

  /**
   * ReferralReward createMany
   */
  export type ReferralRewardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReferralRewards.
     */
    data: ReferralRewardCreateManyInput | ReferralRewardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReferralReward createManyAndReturn
   */
  export type ReferralRewardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralReward
     */
    select?: ReferralRewardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralReward
     */
    omit?: ReferralRewardOmit<ExtArgs> | null
    /**
     * The data used to create many ReferralRewards.
     */
    data: ReferralRewardCreateManyInput | ReferralRewardCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralRewardIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReferralReward update
   */
  export type ReferralRewardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralReward
     */
    select?: ReferralRewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralReward
     */
    omit?: ReferralRewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralRewardInclude<ExtArgs> | null
    /**
     * The data needed to update a ReferralReward.
     */
    data: XOR<ReferralRewardUpdateInput, ReferralRewardUncheckedUpdateInput>
    /**
     * Choose, which ReferralReward to update.
     */
    where: ReferralRewardWhereUniqueInput
  }

  /**
   * ReferralReward updateMany
   */
  export type ReferralRewardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReferralRewards.
     */
    data: XOR<ReferralRewardUpdateManyMutationInput, ReferralRewardUncheckedUpdateManyInput>
    /**
     * Filter which ReferralRewards to update
     */
    where?: ReferralRewardWhereInput
    /**
     * Limit how many ReferralRewards to update.
     */
    limit?: number
  }

  /**
   * ReferralReward updateManyAndReturn
   */
  export type ReferralRewardUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralReward
     */
    select?: ReferralRewardSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralReward
     */
    omit?: ReferralRewardOmit<ExtArgs> | null
    /**
     * The data used to update ReferralRewards.
     */
    data: XOR<ReferralRewardUpdateManyMutationInput, ReferralRewardUncheckedUpdateManyInput>
    /**
     * Filter which ReferralRewards to update
     */
    where?: ReferralRewardWhereInput
    /**
     * Limit how many ReferralRewards to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralRewardIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReferralReward upsert
   */
  export type ReferralRewardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralReward
     */
    select?: ReferralRewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralReward
     */
    omit?: ReferralRewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralRewardInclude<ExtArgs> | null
    /**
     * The filter to search for the ReferralReward to update in case it exists.
     */
    where: ReferralRewardWhereUniqueInput
    /**
     * In case the ReferralReward found by the `where` argument doesn't exist, create a new ReferralReward with this data.
     */
    create: XOR<ReferralRewardCreateInput, ReferralRewardUncheckedCreateInput>
    /**
     * In case the ReferralReward was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReferralRewardUpdateInput, ReferralRewardUncheckedUpdateInput>
  }

  /**
   * ReferralReward delete
   */
  export type ReferralRewardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralReward
     */
    select?: ReferralRewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralReward
     */
    omit?: ReferralRewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralRewardInclude<ExtArgs> | null
    /**
     * Filter which ReferralReward to delete.
     */
    where: ReferralRewardWhereUniqueInput
  }

  /**
   * ReferralReward deleteMany
   */
  export type ReferralRewardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReferralRewards to delete
     */
    where?: ReferralRewardWhereInput
    /**
     * Limit how many ReferralRewards to delete.
     */
    limit?: number
  }

  /**
   * ReferralReward without action
   */
  export type ReferralRewardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralReward
     */
    select?: ReferralRewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralReward
     */
    omit?: ReferralRewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralRewardInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    relatedId: number | null
  }

  export type NotificationSumAggregateOutputType = {
    id: number | null
    userId: number | null
    relatedId: number | null
  }

  export type NotificationMinAggregateOutputType = {
    id: number | null
    userId: number | null
    type: string | null
    message: string | null
    status: string | null
    relatedId: number | null
    isRead: boolean | null
    createdAt: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    type: string | null
    message: string | null
    status: string | null
    relatedId: number | null
    isRead: boolean | null
    createdAt: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    message: number
    status: number
    relatedId: number
    isRead: number
    createdAt: number
    _all: number
  }


  export type NotificationAvgAggregateInputType = {
    id?: true
    userId?: true
    relatedId?: true
  }

  export type NotificationSumAggregateInputType = {
    id?: true
    userId?: true
    relatedId?: true
  }

  export type NotificationMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    message?: true
    status?: true
    relatedId?: true
    isRead?: true
    createdAt?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    message?: true
    status?: true
    relatedId?: true
    isRead?: true
    createdAt?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    message?: true
    status?: true
    relatedId?: true
    isRead?: true
    createdAt?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _avg?: NotificationAvgAggregateInputType
    _sum?: NotificationSumAggregateInputType
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: number
    userId: number
    type: string
    message: string
    status: string
    relatedId: number | null
    isRead: boolean
    createdAt: Date
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    message?: boolean
    status?: boolean
    relatedId?: boolean
    isRead?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    message?: boolean
    status?: boolean
    relatedId?: boolean
    isRead?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    message?: boolean
    status?: boolean
    relatedId?: boolean
    isRead?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    message?: boolean
    status?: boolean
    relatedId?: boolean
    isRead?: boolean
    createdAt?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "message" | "status" | "relatedId" | "isRead" | "createdAt", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      type: string
      message: string
      status: string
      relatedId: number | null
      isRead: boolean
      createdAt: Date
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.updateManyAndReturn({
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
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
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
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'Int'>
    readonly userId: FieldRef<"Notification", 'Int'>
    readonly type: FieldRef<"Notification", 'String'>
    readonly message: FieldRef<"Notification", 'String'>
    readonly status: FieldRef<"Notification", 'String'>
    readonly relatedId: FieldRef<"Notification", 'Int'>
    readonly isRead: FieldRef<"Notification", 'Boolean'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification updateManyAndReturn
   */
  export type NotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Model PriceAlert
   */

  export type AggregatePriceAlert = {
    _count: PriceAlertCountAggregateOutputType | null
    _avg: PriceAlertAvgAggregateOutputType | null
    _sum: PriceAlertSumAggregateOutputType | null
    _min: PriceAlertMinAggregateOutputType | null
    _max: PriceAlertMaxAggregateOutputType | null
  }

  export type PriceAlertAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    value: number | null
  }

  export type PriceAlertSumAggregateOutputType = {
    id: number | null
    userId: number | null
    value: number | null
  }

  export type PriceAlertMinAggregateOutputType = {
    id: number | null
    userId: number | null
    asset: string | null
    alertType: string | null
    value: number | null
    condition: string | null
    active: boolean | null
    triggeredAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PriceAlertMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    asset: string | null
    alertType: string | null
    value: number | null
    condition: string | null
    active: boolean | null
    triggeredAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PriceAlertCountAggregateOutputType = {
    id: number
    userId: number
    asset: number
    alertType: number
    value: number
    condition: number
    active: number
    triggeredAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PriceAlertAvgAggregateInputType = {
    id?: true
    userId?: true
    value?: true
  }

  export type PriceAlertSumAggregateInputType = {
    id?: true
    userId?: true
    value?: true
  }

  export type PriceAlertMinAggregateInputType = {
    id?: true
    userId?: true
    asset?: true
    alertType?: true
    value?: true
    condition?: true
    active?: true
    triggeredAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PriceAlertMaxAggregateInputType = {
    id?: true
    userId?: true
    asset?: true
    alertType?: true
    value?: true
    condition?: true
    active?: true
    triggeredAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PriceAlertCountAggregateInputType = {
    id?: true
    userId?: true
    asset?: true
    alertType?: true
    value?: true
    condition?: true
    active?: true
    triggeredAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PriceAlertAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PriceAlert to aggregate.
     */
    where?: PriceAlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PriceAlerts to fetch.
     */
    orderBy?: PriceAlertOrderByWithRelationInput | PriceAlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PriceAlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PriceAlerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PriceAlerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PriceAlerts
    **/
    _count?: true | PriceAlertCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PriceAlertAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PriceAlertSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PriceAlertMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PriceAlertMaxAggregateInputType
  }

  export type GetPriceAlertAggregateType<T extends PriceAlertAggregateArgs> = {
        [P in keyof T & keyof AggregatePriceAlert]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePriceAlert[P]>
      : GetScalarType<T[P], AggregatePriceAlert[P]>
  }




  export type PriceAlertGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PriceAlertWhereInput
    orderBy?: PriceAlertOrderByWithAggregationInput | PriceAlertOrderByWithAggregationInput[]
    by: PriceAlertScalarFieldEnum[] | PriceAlertScalarFieldEnum
    having?: PriceAlertScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PriceAlertCountAggregateInputType | true
    _avg?: PriceAlertAvgAggregateInputType
    _sum?: PriceAlertSumAggregateInputType
    _min?: PriceAlertMinAggregateInputType
    _max?: PriceAlertMaxAggregateInputType
  }

  export type PriceAlertGroupByOutputType = {
    id: number
    userId: number
    asset: string
    alertType: string
    value: number
    condition: string
    active: boolean
    triggeredAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: PriceAlertCountAggregateOutputType | null
    _avg: PriceAlertAvgAggregateOutputType | null
    _sum: PriceAlertSumAggregateOutputType | null
    _min: PriceAlertMinAggregateOutputType | null
    _max: PriceAlertMaxAggregateOutputType | null
  }

  type GetPriceAlertGroupByPayload<T extends PriceAlertGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PriceAlertGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PriceAlertGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PriceAlertGroupByOutputType[P]>
            : GetScalarType<T[P], PriceAlertGroupByOutputType[P]>
        }
      >
    >


  export type PriceAlertSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    asset?: boolean
    alertType?: boolean
    value?: boolean
    condition?: boolean
    active?: boolean
    triggeredAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["priceAlert"]>

  export type PriceAlertSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    asset?: boolean
    alertType?: boolean
    value?: boolean
    condition?: boolean
    active?: boolean
    triggeredAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["priceAlert"]>

  export type PriceAlertSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    asset?: boolean
    alertType?: boolean
    value?: boolean
    condition?: boolean
    active?: boolean
    triggeredAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["priceAlert"]>

  export type PriceAlertSelectScalar = {
    id?: boolean
    userId?: boolean
    asset?: boolean
    alertType?: boolean
    value?: boolean
    condition?: boolean
    active?: boolean
    triggeredAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PriceAlertOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "asset" | "alertType" | "value" | "condition" | "active" | "triggeredAt" | "createdAt" | "updatedAt", ExtArgs["result"]["priceAlert"]>
  export type PriceAlertInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PriceAlertIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PriceAlertIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PriceAlertPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PriceAlert"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      asset: string
      alertType: string
      value: number
      condition: string
      active: boolean
      triggeredAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["priceAlert"]>
    composites: {}
  }

  type PriceAlertGetPayload<S extends boolean | null | undefined | PriceAlertDefaultArgs> = $Result.GetResult<Prisma.$PriceAlertPayload, S>

  type PriceAlertCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PriceAlertFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PriceAlertCountAggregateInputType | true
    }

  export interface PriceAlertDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PriceAlert'], meta: { name: 'PriceAlert' } }
    /**
     * Find zero or one PriceAlert that matches the filter.
     * @param {PriceAlertFindUniqueArgs} args - Arguments to find a PriceAlert
     * @example
     * // Get one PriceAlert
     * const priceAlert = await prisma.priceAlert.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PriceAlertFindUniqueArgs>(args: SelectSubset<T, PriceAlertFindUniqueArgs<ExtArgs>>): Prisma__PriceAlertClient<$Result.GetResult<Prisma.$PriceAlertPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PriceAlert that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PriceAlertFindUniqueOrThrowArgs} args - Arguments to find a PriceAlert
     * @example
     * // Get one PriceAlert
     * const priceAlert = await prisma.priceAlert.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PriceAlertFindUniqueOrThrowArgs>(args: SelectSubset<T, PriceAlertFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PriceAlertClient<$Result.GetResult<Prisma.$PriceAlertPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PriceAlert that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceAlertFindFirstArgs} args - Arguments to find a PriceAlert
     * @example
     * // Get one PriceAlert
     * const priceAlert = await prisma.priceAlert.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PriceAlertFindFirstArgs>(args?: SelectSubset<T, PriceAlertFindFirstArgs<ExtArgs>>): Prisma__PriceAlertClient<$Result.GetResult<Prisma.$PriceAlertPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PriceAlert that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceAlertFindFirstOrThrowArgs} args - Arguments to find a PriceAlert
     * @example
     * // Get one PriceAlert
     * const priceAlert = await prisma.priceAlert.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PriceAlertFindFirstOrThrowArgs>(args?: SelectSubset<T, PriceAlertFindFirstOrThrowArgs<ExtArgs>>): Prisma__PriceAlertClient<$Result.GetResult<Prisma.$PriceAlertPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PriceAlerts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceAlertFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PriceAlerts
     * const priceAlerts = await prisma.priceAlert.findMany()
     * 
     * // Get first 10 PriceAlerts
     * const priceAlerts = await prisma.priceAlert.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const priceAlertWithIdOnly = await prisma.priceAlert.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PriceAlertFindManyArgs>(args?: SelectSubset<T, PriceAlertFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PriceAlertPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PriceAlert.
     * @param {PriceAlertCreateArgs} args - Arguments to create a PriceAlert.
     * @example
     * // Create one PriceAlert
     * const PriceAlert = await prisma.priceAlert.create({
     *   data: {
     *     // ... data to create a PriceAlert
     *   }
     * })
     * 
     */
    create<T extends PriceAlertCreateArgs>(args: SelectSubset<T, PriceAlertCreateArgs<ExtArgs>>): Prisma__PriceAlertClient<$Result.GetResult<Prisma.$PriceAlertPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PriceAlerts.
     * @param {PriceAlertCreateManyArgs} args - Arguments to create many PriceAlerts.
     * @example
     * // Create many PriceAlerts
     * const priceAlert = await prisma.priceAlert.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PriceAlertCreateManyArgs>(args?: SelectSubset<T, PriceAlertCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PriceAlerts and returns the data saved in the database.
     * @param {PriceAlertCreateManyAndReturnArgs} args - Arguments to create many PriceAlerts.
     * @example
     * // Create many PriceAlerts
     * const priceAlert = await prisma.priceAlert.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PriceAlerts and only return the `id`
     * const priceAlertWithIdOnly = await prisma.priceAlert.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PriceAlertCreateManyAndReturnArgs>(args?: SelectSubset<T, PriceAlertCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PriceAlertPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PriceAlert.
     * @param {PriceAlertDeleteArgs} args - Arguments to delete one PriceAlert.
     * @example
     * // Delete one PriceAlert
     * const PriceAlert = await prisma.priceAlert.delete({
     *   where: {
     *     // ... filter to delete one PriceAlert
     *   }
     * })
     * 
     */
    delete<T extends PriceAlertDeleteArgs>(args: SelectSubset<T, PriceAlertDeleteArgs<ExtArgs>>): Prisma__PriceAlertClient<$Result.GetResult<Prisma.$PriceAlertPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PriceAlert.
     * @param {PriceAlertUpdateArgs} args - Arguments to update one PriceAlert.
     * @example
     * // Update one PriceAlert
     * const priceAlert = await prisma.priceAlert.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PriceAlertUpdateArgs>(args: SelectSubset<T, PriceAlertUpdateArgs<ExtArgs>>): Prisma__PriceAlertClient<$Result.GetResult<Prisma.$PriceAlertPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PriceAlerts.
     * @param {PriceAlertDeleteManyArgs} args - Arguments to filter PriceAlerts to delete.
     * @example
     * // Delete a few PriceAlerts
     * const { count } = await prisma.priceAlert.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PriceAlertDeleteManyArgs>(args?: SelectSubset<T, PriceAlertDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PriceAlerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceAlertUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PriceAlerts
     * const priceAlert = await prisma.priceAlert.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PriceAlertUpdateManyArgs>(args: SelectSubset<T, PriceAlertUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PriceAlerts and returns the data updated in the database.
     * @param {PriceAlertUpdateManyAndReturnArgs} args - Arguments to update many PriceAlerts.
     * @example
     * // Update many PriceAlerts
     * const priceAlert = await prisma.priceAlert.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PriceAlerts and only return the `id`
     * const priceAlertWithIdOnly = await prisma.priceAlert.updateManyAndReturn({
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
    updateManyAndReturn<T extends PriceAlertUpdateManyAndReturnArgs>(args: SelectSubset<T, PriceAlertUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PriceAlertPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PriceAlert.
     * @param {PriceAlertUpsertArgs} args - Arguments to update or create a PriceAlert.
     * @example
     * // Update or create a PriceAlert
     * const priceAlert = await prisma.priceAlert.upsert({
     *   create: {
     *     // ... data to create a PriceAlert
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PriceAlert we want to update
     *   }
     * })
     */
    upsert<T extends PriceAlertUpsertArgs>(args: SelectSubset<T, PriceAlertUpsertArgs<ExtArgs>>): Prisma__PriceAlertClient<$Result.GetResult<Prisma.$PriceAlertPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PriceAlerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceAlertCountArgs} args - Arguments to filter PriceAlerts to count.
     * @example
     * // Count the number of PriceAlerts
     * const count = await prisma.priceAlert.count({
     *   where: {
     *     // ... the filter for the PriceAlerts we want to count
     *   }
     * })
    **/
    count<T extends PriceAlertCountArgs>(
      args?: Subset<T, PriceAlertCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PriceAlertCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PriceAlert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceAlertAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PriceAlertAggregateArgs>(args: Subset<T, PriceAlertAggregateArgs>): Prisma.PrismaPromise<GetPriceAlertAggregateType<T>>

    /**
     * Group by PriceAlert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceAlertGroupByArgs} args - Group by arguments.
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
      T extends PriceAlertGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PriceAlertGroupByArgs['orderBy'] }
        : { orderBy?: PriceAlertGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PriceAlertGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPriceAlertGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PriceAlert model
   */
  readonly fields: PriceAlertFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PriceAlert.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PriceAlertClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PriceAlert model
   */
  interface PriceAlertFieldRefs {
    readonly id: FieldRef<"PriceAlert", 'Int'>
    readonly userId: FieldRef<"PriceAlert", 'Int'>
    readonly asset: FieldRef<"PriceAlert", 'String'>
    readonly alertType: FieldRef<"PriceAlert", 'String'>
    readonly value: FieldRef<"PriceAlert", 'Float'>
    readonly condition: FieldRef<"PriceAlert", 'String'>
    readonly active: FieldRef<"PriceAlert", 'Boolean'>
    readonly triggeredAt: FieldRef<"PriceAlert", 'DateTime'>
    readonly createdAt: FieldRef<"PriceAlert", 'DateTime'>
    readonly updatedAt: FieldRef<"PriceAlert", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PriceAlert findUnique
   */
  export type PriceAlertFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceAlert
     */
    select?: PriceAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceAlert
     */
    omit?: PriceAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceAlertInclude<ExtArgs> | null
    /**
     * Filter, which PriceAlert to fetch.
     */
    where: PriceAlertWhereUniqueInput
  }

  /**
   * PriceAlert findUniqueOrThrow
   */
  export type PriceAlertFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceAlert
     */
    select?: PriceAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceAlert
     */
    omit?: PriceAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceAlertInclude<ExtArgs> | null
    /**
     * Filter, which PriceAlert to fetch.
     */
    where: PriceAlertWhereUniqueInput
  }

  /**
   * PriceAlert findFirst
   */
  export type PriceAlertFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceAlert
     */
    select?: PriceAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceAlert
     */
    omit?: PriceAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceAlertInclude<ExtArgs> | null
    /**
     * Filter, which PriceAlert to fetch.
     */
    where?: PriceAlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PriceAlerts to fetch.
     */
    orderBy?: PriceAlertOrderByWithRelationInput | PriceAlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PriceAlerts.
     */
    cursor?: PriceAlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PriceAlerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PriceAlerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PriceAlerts.
     */
    distinct?: PriceAlertScalarFieldEnum | PriceAlertScalarFieldEnum[]
  }

  /**
   * PriceAlert findFirstOrThrow
   */
  export type PriceAlertFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceAlert
     */
    select?: PriceAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceAlert
     */
    omit?: PriceAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceAlertInclude<ExtArgs> | null
    /**
     * Filter, which PriceAlert to fetch.
     */
    where?: PriceAlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PriceAlerts to fetch.
     */
    orderBy?: PriceAlertOrderByWithRelationInput | PriceAlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PriceAlerts.
     */
    cursor?: PriceAlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PriceAlerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PriceAlerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PriceAlerts.
     */
    distinct?: PriceAlertScalarFieldEnum | PriceAlertScalarFieldEnum[]
  }

  /**
   * PriceAlert findMany
   */
  export type PriceAlertFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceAlert
     */
    select?: PriceAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceAlert
     */
    omit?: PriceAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceAlertInclude<ExtArgs> | null
    /**
     * Filter, which PriceAlerts to fetch.
     */
    where?: PriceAlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PriceAlerts to fetch.
     */
    orderBy?: PriceAlertOrderByWithRelationInput | PriceAlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PriceAlerts.
     */
    cursor?: PriceAlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PriceAlerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PriceAlerts.
     */
    skip?: number
    distinct?: PriceAlertScalarFieldEnum | PriceAlertScalarFieldEnum[]
  }

  /**
   * PriceAlert create
   */
  export type PriceAlertCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceAlert
     */
    select?: PriceAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceAlert
     */
    omit?: PriceAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceAlertInclude<ExtArgs> | null
    /**
     * The data needed to create a PriceAlert.
     */
    data: XOR<PriceAlertCreateInput, PriceAlertUncheckedCreateInput>
  }

  /**
   * PriceAlert createMany
   */
  export type PriceAlertCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PriceAlerts.
     */
    data: PriceAlertCreateManyInput | PriceAlertCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PriceAlert createManyAndReturn
   */
  export type PriceAlertCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceAlert
     */
    select?: PriceAlertSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PriceAlert
     */
    omit?: PriceAlertOmit<ExtArgs> | null
    /**
     * The data used to create many PriceAlerts.
     */
    data: PriceAlertCreateManyInput | PriceAlertCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceAlertIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PriceAlert update
   */
  export type PriceAlertUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceAlert
     */
    select?: PriceAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceAlert
     */
    omit?: PriceAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceAlertInclude<ExtArgs> | null
    /**
     * The data needed to update a PriceAlert.
     */
    data: XOR<PriceAlertUpdateInput, PriceAlertUncheckedUpdateInput>
    /**
     * Choose, which PriceAlert to update.
     */
    where: PriceAlertWhereUniqueInput
  }

  /**
   * PriceAlert updateMany
   */
  export type PriceAlertUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PriceAlerts.
     */
    data: XOR<PriceAlertUpdateManyMutationInput, PriceAlertUncheckedUpdateManyInput>
    /**
     * Filter which PriceAlerts to update
     */
    where?: PriceAlertWhereInput
    /**
     * Limit how many PriceAlerts to update.
     */
    limit?: number
  }

  /**
   * PriceAlert updateManyAndReturn
   */
  export type PriceAlertUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceAlert
     */
    select?: PriceAlertSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PriceAlert
     */
    omit?: PriceAlertOmit<ExtArgs> | null
    /**
     * The data used to update PriceAlerts.
     */
    data: XOR<PriceAlertUpdateManyMutationInput, PriceAlertUncheckedUpdateManyInput>
    /**
     * Filter which PriceAlerts to update
     */
    where?: PriceAlertWhereInput
    /**
     * Limit how many PriceAlerts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceAlertIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PriceAlert upsert
   */
  export type PriceAlertUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceAlert
     */
    select?: PriceAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceAlert
     */
    omit?: PriceAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceAlertInclude<ExtArgs> | null
    /**
     * The filter to search for the PriceAlert to update in case it exists.
     */
    where: PriceAlertWhereUniqueInput
    /**
     * In case the PriceAlert found by the `where` argument doesn't exist, create a new PriceAlert with this data.
     */
    create: XOR<PriceAlertCreateInput, PriceAlertUncheckedCreateInput>
    /**
     * In case the PriceAlert was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PriceAlertUpdateInput, PriceAlertUncheckedUpdateInput>
  }

  /**
   * PriceAlert delete
   */
  export type PriceAlertDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceAlert
     */
    select?: PriceAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceAlert
     */
    omit?: PriceAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceAlertInclude<ExtArgs> | null
    /**
     * Filter which PriceAlert to delete.
     */
    where: PriceAlertWhereUniqueInput
  }

  /**
   * PriceAlert deleteMany
   */
  export type PriceAlertDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PriceAlerts to delete
     */
    where?: PriceAlertWhereInput
    /**
     * Limit how many PriceAlerts to delete.
     */
    limit?: number
  }

  /**
   * PriceAlert without action
   */
  export type PriceAlertDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceAlert
     */
    select?: PriceAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceAlert
     */
    omit?: PriceAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceAlertInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    username: 'username',
    email: 'email',
    password: 'password',
    phone: 'phone',
    mainBalance: 'mainBalance',
    investmentBalance: 'investmentBalance',
    totalEarn: 'totalEarn',
    totalDeposit: 'totalDeposit',
    totalWithdrawals: 'totalWithdrawals',
    roi: 'roi',
    redeemedRoi: 'redeemedRoi',
    speedInvest: 'speedInvest',
    completed: 'completed',
    interestBalance: 'interestBalance',
    rewardPoints: 'rewardPoints',
    totalReferrals: 'totalReferrals',
    referredById: 'referredById',
    privateKeyHash: 'privateKeyHash',
    termsAcceptedAt: 'termsAcceptedAt',
    termsAcceptedIP: 'termsAcceptedIP',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const DepositScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    amount: 'amount',
    currency: 'currency',
    address: 'address',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DepositScalarFieldEnum = (typeof DepositScalarFieldEnum)[keyof typeof DepositScalarFieldEnum]


  export const InvestmentScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    planName: 'planName',
    planId: 'planId',
    roi: 'roi',
    duration: 'duration',
    durationDays: 'durationDays',
    amount: 'amount',
    startDate: 'startDate',
    endDate: 'endDate',
    maturityDate: 'maturityDate',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type InvestmentScalarFieldEnum = (typeof InvestmentScalarFieldEnum)[keyof typeof InvestmentScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    amount: 'amount',
    description: 'description',
    status: 'status',
    paymentMethod: 'paymentMethod',
    transactionRef: 'transactionRef',
    createdAt: 'createdAt'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const WithdrawalScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    amount: 'amount',
    address: 'address',
    currency: 'currency',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type WithdrawalScalarFieldEnum = (typeof WithdrawalScalarFieldEnum)[keyof typeof WithdrawalScalarFieldEnum]


  export const ReferralScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    code: 'code',
    createdAt: 'createdAt'
  };

  export type ReferralScalarFieldEnum = (typeof ReferralScalarFieldEnum)[keyof typeof ReferralScalarFieldEnum]


  export const RewardLedgerScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    points: 'points',
    description: 'description',
    refId: 'refId',
    createdAt: 'createdAt'
  };

  export type RewardLedgerScalarFieldEnum = (typeof RewardLedgerScalarFieldEnum)[keyof typeof RewardLedgerScalarFieldEnum]


  export const TicketScalarFieldEnum: {
    id: 'id',
    subject: 'subject',
    status: 'status',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TicketScalarFieldEnum = (typeof TicketScalarFieldEnum)[keyof typeof TicketScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    ticketId: 'ticketId',
    senderId: 'senderId',
    content: 'content',
    createdAt: 'createdAt'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const ReferralRewardScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    referredUserId: 'referredUserId',
    amount: 'amount',
    status: 'status',
    createdAt: 'createdAt',
    redeemedAt: 'redeemedAt'
  };

  export type ReferralRewardScalarFieldEnum = (typeof ReferralRewardScalarFieldEnum)[keyof typeof ReferralRewardScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    message: 'message',
    status: 'status',
    relatedId: 'relatedId',
    isRead: 'isRead',
    createdAt: 'createdAt'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const PriceAlertScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    asset: 'asset',
    alertType: 'alertType',
    value: 'value',
    condition: 'condition',
    active: 'active',
    triggeredAt: 'triggeredAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PriceAlertScalarFieldEnum = (typeof PriceAlertScalarFieldEnum)[keyof typeof PriceAlertScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


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
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    mainBalance?: FloatFilter<"User"> | number
    investmentBalance?: FloatFilter<"User"> | number
    totalEarn?: FloatFilter<"User"> | number
    totalDeposit?: FloatFilter<"User"> | number
    totalWithdrawals?: FloatFilter<"User"> | number
    roi?: FloatFilter<"User"> | number
    redeemedRoi?: FloatFilter<"User"> | number
    speedInvest?: FloatFilter<"User"> | number
    completed?: FloatFilter<"User"> | number
    interestBalance?: FloatFilter<"User"> | number
    rewardPoints?: FloatFilter<"User"> | number
    totalReferrals?: IntFilter<"User"> | number
    referredById?: IntNullableFilter<"User"> | number | null
    privateKeyHash?: StringNullableFilter<"User"> | string | null
    termsAcceptedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    termsAcceptedIP?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    deposits?: DepositListRelationFilter
    investments?: InvestmentListRelationFilter
    transactions?: TransactionListRelationFilter
    withdrawals?: WithdrawalListRelationFilter
    referrals?: ReferralListRelationFilter
    referredUsers?: UserListRelationFilter
    referrer?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    rewardLedger?: RewardLedgerListRelationFilter
    referralRewards?: ReferralRewardListRelationFilter
    referralRewardsReceived?: ReferralRewardListRelationFilter
    tickets?: TicketListRelationFilter
    notifications?: NotificationListRelationFilter
    messages?: MessageListRelationFilter
    priceAlerts?: PriceAlertListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrderInput | SortOrder
    mainBalance?: SortOrder
    investmentBalance?: SortOrder
    totalEarn?: SortOrder
    totalDeposit?: SortOrder
    totalWithdrawals?: SortOrder
    roi?: SortOrder
    redeemedRoi?: SortOrder
    speedInvest?: SortOrder
    completed?: SortOrder
    interestBalance?: SortOrder
    rewardPoints?: SortOrder
    totalReferrals?: SortOrder
    referredById?: SortOrderInput | SortOrder
    privateKeyHash?: SortOrderInput | SortOrder
    termsAcceptedAt?: SortOrderInput | SortOrder
    termsAcceptedIP?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    deposits?: DepositOrderByRelationAggregateInput
    investments?: InvestmentOrderByRelationAggregateInput
    transactions?: TransactionOrderByRelationAggregateInput
    withdrawals?: WithdrawalOrderByRelationAggregateInput
    referrals?: ReferralOrderByRelationAggregateInput
    referredUsers?: UserOrderByRelationAggregateInput
    referrer?: UserOrderByWithRelationInput
    rewardLedger?: RewardLedgerOrderByRelationAggregateInput
    referralRewards?: ReferralRewardOrderByRelationAggregateInput
    referralRewardsReceived?: ReferralRewardOrderByRelationAggregateInput
    tickets?: TicketOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
    messages?: MessageOrderByRelationAggregateInput
    priceAlerts?: PriceAlertOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    mainBalance?: FloatFilter<"User"> | number
    investmentBalance?: FloatFilter<"User"> | number
    totalEarn?: FloatFilter<"User"> | number
    totalDeposit?: FloatFilter<"User"> | number
    totalWithdrawals?: FloatFilter<"User"> | number
    roi?: FloatFilter<"User"> | number
    redeemedRoi?: FloatFilter<"User"> | number
    speedInvest?: FloatFilter<"User"> | number
    completed?: FloatFilter<"User"> | number
    interestBalance?: FloatFilter<"User"> | number
    rewardPoints?: FloatFilter<"User"> | number
    totalReferrals?: IntFilter<"User"> | number
    referredById?: IntNullableFilter<"User"> | number | null
    privateKeyHash?: StringNullableFilter<"User"> | string | null
    termsAcceptedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    termsAcceptedIP?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    deposits?: DepositListRelationFilter
    investments?: InvestmentListRelationFilter
    transactions?: TransactionListRelationFilter
    withdrawals?: WithdrawalListRelationFilter
    referrals?: ReferralListRelationFilter
    referredUsers?: UserListRelationFilter
    referrer?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    rewardLedger?: RewardLedgerListRelationFilter
    referralRewards?: ReferralRewardListRelationFilter
    referralRewardsReceived?: ReferralRewardListRelationFilter
    tickets?: TicketListRelationFilter
    notifications?: NotificationListRelationFilter
    messages?: MessageListRelationFilter
    priceAlerts?: PriceAlertListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrderInput | SortOrder
    mainBalance?: SortOrder
    investmentBalance?: SortOrder
    totalEarn?: SortOrder
    totalDeposit?: SortOrder
    totalWithdrawals?: SortOrder
    roi?: SortOrder
    redeemedRoi?: SortOrder
    speedInvest?: SortOrder
    completed?: SortOrder
    interestBalance?: SortOrder
    rewardPoints?: SortOrder
    totalReferrals?: SortOrder
    referredById?: SortOrderInput | SortOrder
    privateKeyHash?: SortOrderInput | SortOrder
    termsAcceptedAt?: SortOrderInput | SortOrder
    termsAcceptedIP?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    mainBalance?: FloatWithAggregatesFilter<"User"> | number
    investmentBalance?: FloatWithAggregatesFilter<"User"> | number
    totalEarn?: FloatWithAggregatesFilter<"User"> | number
    totalDeposit?: FloatWithAggregatesFilter<"User"> | number
    totalWithdrawals?: FloatWithAggregatesFilter<"User"> | number
    roi?: FloatWithAggregatesFilter<"User"> | number
    redeemedRoi?: FloatWithAggregatesFilter<"User"> | number
    speedInvest?: FloatWithAggregatesFilter<"User"> | number
    completed?: FloatWithAggregatesFilter<"User"> | number
    interestBalance?: FloatWithAggregatesFilter<"User"> | number
    rewardPoints?: FloatWithAggregatesFilter<"User"> | number
    totalReferrals?: IntWithAggregatesFilter<"User"> | number
    referredById?: IntNullableWithAggregatesFilter<"User"> | number | null
    privateKeyHash?: StringNullableWithAggregatesFilter<"User"> | string | null
    termsAcceptedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    termsAcceptedIP?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type DepositWhereInput = {
    AND?: DepositWhereInput | DepositWhereInput[]
    OR?: DepositWhereInput[]
    NOT?: DepositWhereInput | DepositWhereInput[]
    id?: IntFilter<"Deposit"> | number
    userId?: IntFilter<"Deposit"> | number
    amount?: FloatFilter<"Deposit"> | number
    currency?: StringFilter<"Deposit"> | string
    address?: StringFilter<"Deposit"> | string
    status?: StringFilter<"Deposit"> | string
    createdAt?: DateTimeFilter<"Deposit"> | Date | string
    updatedAt?: DateTimeFilter<"Deposit"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type DepositOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    address?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type DepositWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DepositWhereInput | DepositWhereInput[]
    OR?: DepositWhereInput[]
    NOT?: DepositWhereInput | DepositWhereInput[]
    userId?: IntFilter<"Deposit"> | number
    amount?: FloatFilter<"Deposit"> | number
    currency?: StringFilter<"Deposit"> | string
    address?: StringFilter<"Deposit"> | string
    status?: StringFilter<"Deposit"> | string
    createdAt?: DateTimeFilter<"Deposit"> | Date | string
    updatedAt?: DateTimeFilter<"Deposit"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type DepositOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    address?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DepositCountOrderByAggregateInput
    _avg?: DepositAvgOrderByAggregateInput
    _max?: DepositMaxOrderByAggregateInput
    _min?: DepositMinOrderByAggregateInput
    _sum?: DepositSumOrderByAggregateInput
  }

  export type DepositScalarWhereWithAggregatesInput = {
    AND?: DepositScalarWhereWithAggregatesInput | DepositScalarWhereWithAggregatesInput[]
    OR?: DepositScalarWhereWithAggregatesInput[]
    NOT?: DepositScalarWhereWithAggregatesInput | DepositScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Deposit"> | number
    userId?: IntWithAggregatesFilter<"Deposit"> | number
    amount?: FloatWithAggregatesFilter<"Deposit"> | number
    currency?: StringWithAggregatesFilter<"Deposit"> | string
    address?: StringWithAggregatesFilter<"Deposit"> | string
    status?: StringWithAggregatesFilter<"Deposit"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Deposit"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Deposit"> | Date | string
  }

  export type InvestmentWhereInput = {
    AND?: InvestmentWhereInput | InvestmentWhereInput[]
    OR?: InvestmentWhereInput[]
    NOT?: InvestmentWhereInput | InvestmentWhereInput[]
    id?: IntFilter<"Investment"> | number
    userId?: IntFilter<"Investment"> | number
    planName?: StringFilter<"Investment"> | string
    planId?: IntFilter<"Investment"> | number
    roi?: FloatFilter<"Investment"> | number
    duration?: StringFilter<"Investment"> | string
    durationDays?: IntFilter<"Investment"> | number
    amount?: FloatFilter<"Investment"> | number
    startDate?: DateTimeFilter<"Investment"> | Date | string
    endDate?: DateTimeNullableFilter<"Investment"> | Date | string | null
    maturityDate?: DateTimeFilter<"Investment"> | Date | string
    status?: StringFilter<"Investment"> | string
    createdAt?: DateTimeFilter<"Investment"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type InvestmentOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    planName?: SortOrder
    planId?: SortOrder
    roi?: SortOrder
    duration?: SortOrder
    durationDays?: SortOrder
    amount?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    maturityDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type InvestmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: InvestmentWhereInput | InvestmentWhereInput[]
    OR?: InvestmentWhereInput[]
    NOT?: InvestmentWhereInput | InvestmentWhereInput[]
    userId?: IntFilter<"Investment"> | number
    planName?: StringFilter<"Investment"> | string
    planId?: IntFilter<"Investment"> | number
    roi?: FloatFilter<"Investment"> | number
    duration?: StringFilter<"Investment"> | string
    durationDays?: IntFilter<"Investment"> | number
    amount?: FloatFilter<"Investment"> | number
    startDate?: DateTimeFilter<"Investment"> | Date | string
    endDate?: DateTimeNullableFilter<"Investment"> | Date | string | null
    maturityDate?: DateTimeFilter<"Investment"> | Date | string
    status?: StringFilter<"Investment"> | string
    createdAt?: DateTimeFilter<"Investment"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type InvestmentOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    planName?: SortOrder
    planId?: SortOrder
    roi?: SortOrder
    duration?: SortOrder
    durationDays?: SortOrder
    amount?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    maturityDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: InvestmentCountOrderByAggregateInput
    _avg?: InvestmentAvgOrderByAggregateInput
    _max?: InvestmentMaxOrderByAggregateInput
    _min?: InvestmentMinOrderByAggregateInput
    _sum?: InvestmentSumOrderByAggregateInput
  }

  export type InvestmentScalarWhereWithAggregatesInput = {
    AND?: InvestmentScalarWhereWithAggregatesInput | InvestmentScalarWhereWithAggregatesInput[]
    OR?: InvestmentScalarWhereWithAggregatesInput[]
    NOT?: InvestmentScalarWhereWithAggregatesInput | InvestmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Investment"> | number
    userId?: IntWithAggregatesFilter<"Investment"> | number
    planName?: StringWithAggregatesFilter<"Investment"> | string
    planId?: IntWithAggregatesFilter<"Investment"> | number
    roi?: FloatWithAggregatesFilter<"Investment"> | number
    duration?: StringWithAggregatesFilter<"Investment"> | string
    durationDays?: IntWithAggregatesFilter<"Investment"> | number
    amount?: FloatWithAggregatesFilter<"Investment"> | number
    startDate?: DateTimeWithAggregatesFilter<"Investment"> | Date | string
    endDate?: DateTimeNullableWithAggregatesFilter<"Investment"> | Date | string | null
    maturityDate?: DateTimeWithAggregatesFilter<"Investment"> | Date | string
    status?: StringWithAggregatesFilter<"Investment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Investment"> | Date | string
  }

  export type TransactionWhereInput = {
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    id?: IntFilter<"Transaction"> | number
    userId?: IntFilter<"Transaction"> | number
    type?: StringNullableFilter<"Transaction"> | string | null
    amount?: FloatFilter<"Transaction"> | number
    description?: StringNullableFilter<"Transaction"> | string | null
    status?: StringFilter<"Transaction"> | string
    paymentMethod?: StringNullableFilter<"Transaction"> | string | null
    transactionRef?: StringNullableFilter<"Transaction"> | string | null
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TransactionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrderInput | SortOrder
    amount?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    paymentMethod?: SortOrderInput | SortOrder
    transactionRef?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type TransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    userId?: IntFilter<"Transaction"> | number
    type?: StringNullableFilter<"Transaction"> | string | null
    amount?: FloatFilter<"Transaction"> | number
    description?: StringNullableFilter<"Transaction"> | string | null
    status?: StringFilter<"Transaction"> | string
    paymentMethod?: StringNullableFilter<"Transaction"> | string | null
    transactionRef?: StringNullableFilter<"Transaction"> | string | null
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type TransactionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrderInput | SortOrder
    amount?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    paymentMethod?: SortOrderInput | SortOrder
    transactionRef?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: TransactionCountOrderByAggregateInput
    _avg?: TransactionAvgOrderByAggregateInput
    _max?: TransactionMaxOrderByAggregateInput
    _min?: TransactionMinOrderByAggregateInput
    _sum?: TransactionSumOrderByAggregateInput
  }

  export type TransactionScalarWhereWithAggregatesInput = {
    AND?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    OR?: TransactionScalarWhereWithAggregatesInput[]
    NOT?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Transaction"> | number
    userId?: IntWithAggregatesFilter<"Transaction"> | number
    type?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    amount?: FloatWithAggregatesFilter<"Transaction"> | number
    description?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    status?: StringWithAggregatesFilter<"Transaction"> | string
    paymentMethod?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    transactionRef?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
  }

  export type WithdrawalWhereInput = {
    AND?: WithdrawalWhereInput | WithdrawalWhereInput[]
    OR?: WithdrawalWhereInput[]
    NOT?: WithdrawalWhereInput | WithdrawalWhereInput[]
    id?: IntFilter<"Withdrawal"> | number
    userId?: IntFilter<"Withdrawal"> | number
    amount?: FloatFilter<"Withdrawal"> | number
    address?: StringNullableFilter<"Withdrawal"> | string | null
    currency?: StringNullableFilter<"Withdrawal"> | string | null
    status?: StringFilter<"Withdrawal"> | string
    createdAt?: DateTimeFilter<"Withdrawal"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type WithdrawalOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    address?: SortOrderInput | SortOrder
    currency?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type WithdrawalWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: WithdrawalWhereInput | WithdrawalWhereInput[]
    OR?: WithdrawalWhereInput[]
    NOT?: WithdrawalWhereInput | WithdrawalWhereInput[]
    userId?: IntFilter<"Withdrawal"> | number
    amount?: FloatFilter<"Withdrawal"> | number
    address?: StringNullableFilter<"Withdrawal"> | string | null
    currency?: StringNullableFilter<"Withdrawal"> | string | null
    status?: StringFilter<"Withdrawal"> | string
    createdAt?: DateTimeFilter<"Withdrawal"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type WithdrawalOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    address?: SortOrderInput | SortOrder
    currency?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: WithdrawalCountOrderByAggregateInput
    _avg?: WithdrawalAvgOrderByAggregateInput
    _max?: WithdrawalMaxOrderByAggregateInput
    _min?: WithdrawalMinOrderByAggregateInput
    _sum?: WithdrawalSumOrderByAggregateInput
  }

  export type WithdrawalScalarWhereWithAggregatesInput = {
    AND?: WithdrawalScalarWhereWithAggregatesInput | WithdrawalScalarWhereWithAggregatesInput[]
    OR?: WithdrawalScalarWhereWithAggregatesInput[]
    NOT?: WithdrawalScalarWhereWithAggregatesInput | WithdrawalScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Withdrawal"> | number
    userId?: IntWithAggregatesFilter<"Withdrawal"> | number
    amount?: FloatWithAggregatesFilter<"Withdrawal"> | number
    address?: StringNullableWithAggregatesFilter<"Withdrawal"> | string | null
    currency?: StringNullableWithAggregatesFilter<"Withdrawal"> | string | null
    status?: StringWithAggregatesFilter<"Withdrawal"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Withdrawal"> | Date | string
  }

  export type ReferralWhereInput = {
    AND?: ReferralWhereInput | ReferralWhereInput[]
    OR?: ReferralWhereInput[]
    NOT?: ReferralWhereInput | ReferralWhereInput[]
    id?: IntFilter<"Referral"> | number
    userId?: IntFilter<"Referral"> | number
    code?: StringFilter<"Referral"> | string
    createdAt?: DateTimeFilter<"Referral"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ReferralOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ReferralWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    code?: string
    AND?: ReferralWhereInput | ReferralWhereInput[]
    OR?: ReferralWhereInput[]
    NOT?: ReferralWhereInput | ReferralWhereInput[]
    userId?: IntFilter<"Referral"> | number
    createdAt?: DateTimeFilter<"Referral"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "code">

  export type ReferralOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
    _count?: ReferralCountOrderByAggregateInput
    _avg?: ReferralAvgOrderByAggregateInput
    _max?: ReferralMaxOrderByAggregateInput
    _min?: ReferralMinOrderByAggregateInput
    _sum?: ReferralSumOrderByAggregateInput
  }

  export type ReferralScalarWhereWithAggregatesInput = {
    AND?: ReferralScalarWhereWithAggregatesInput | ReferralScalarWhereWithAggregatesInput[]
    OR?: ReferralScalarWhereWithAggregatesInput[]
    NOT?: ReferralScalarWhereWithAggregatesInput | ReferralScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Referral"> | number
    userId?: IntWithAggregatesFilter<"Referral"> | number
    code?: StringWithAggregatesFilter<"Referral"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Referral"> | Date | string
  }

  export type RewardLedgerWhereInput = {
    AND?: RewardLedgerWhereInput | RewardLedgerWhereInput[]
    OR?: RewardLedgerWhereInput[]
    NOT?: RewardLedgerWhereInput | RewardLedgerWhereInput[]
    id?: IntFilter<"RewardLedger"> | number
    userId?: IntFilter<"RewardLedger"> | number
    type?: StringFilter<"RewardLedger"> | string
    points?: FloatFilter<"RewardLedger"> | number
    description?: StringNullableFilter<"RewardLedger"> | string | null
    refId?: IntNullableFilter<"RewardLedger"> | number | null
    createdAt?: DateTimeFilter<"RewardLedger"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RewardLedgerOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    points?: SortOrder
    description?: SortOrderInput | SortOrder
    refId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type RewardLedgerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RewardLedgerWhereInput | RewardLedgerWhereInput[]
    OR?: RewardLedgerWhereInput[]
    NOT?: RewardLedgerWhereInput | RewardLedgerWhereInput[]
    userId?: IntFilter<"RewardLedger"> | number
    type?: StringFilter<"RewardLedger"> | string
    points?: FloatFilter<"RewardLedger"> | number
    description?: StringNullableFilter<"RewardLedger"> | string | null
    refId?: IntNullableFilter<"RewardLedger"> | number | null
    createdAt?: DateTimeFilter<"RewardLedger"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type RewardLedgerOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    points?: SortOrder
    description?: SortOrderInput | SortOrder
    refId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: RewardLedgerCountOrderByAggregateInput
    _avg?: RewardLedgerAvgOrderByAggregateInput
    _max?: RewardLedgerMaxOrderByAggregateInput
    _min?: RewardLedgerMinOrderByAggregateInput
    _sum?: RewardLedgerSumOrderByAggregateInput
  }

  export type RewardLedgerScalarWhereWithAggregatesInput = {
    AND?: RewardLedgerScalarWhereWithAggregatesInput | RewardLedgerScalarWhereWithAggregatesInput[]
    OR?: RewardLedgerScalarWhereWithAggregatesInput[]
    NOT?: RewardLedgerScalarWhereWithAggregatesInput | RewardLedgerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RewardLedger"> | number
    userId?: IntWithAggregatesFilter<"RewardLedger"> | number
    type?: StringWithAggregatesFilter<"RewardLedger"> | string
    points?: FloatWithAggregatesFilter<"RewardLedger"> | number
    description?: StringNullableWithAggregatesFilter<"RewardLedger"> | string | null
    refId?: IntNullableWithAggregatesFilter<"RewardLedger"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"RewardLedger"> | Date | string
  }

  export type TicketWhereInput = {
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    id?: IntFilter<"Ticket"> | number
    subject?: StringFilter<"Ticket"> | string
    status?: StringFilter<"Ticket"> | string
    userId?: IntFilter<"Ticket"> | number
    createdAt?: DateTimeFilter<"Ticket"> | Date | string
    updatedAt?: DateTimeFilter<"Ticket"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    messages?: MessageListRelationFilter
  }

  export type TicketOrderByWithRelationInput = {
    id?: SortOrder
    subject?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    messages?: MessageOrderByRelationAggregateInput
  }

  export type TicketWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    subject?: StringFilter<"Ticket"> | string
    status?: StringFilter<"Ticket"> | string
    userId?: IntFilter<"Ticket"> | number
    createdAt?: DateTimeFilter<"Ticket"> | Date | string
    updatedAt?: DateTimeFilter<"Ticket"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    messages?: MessageListRelationFilter
  }, "id">

  export type TicketOrderByWithAggregationInput = {
    id?: SortOrder
    subject?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TicketCountOrderByAggregateInput
    _avg?: TicketAvgOrderByAggregateInput
    _max?: TicketMaxOrderByAggregateInput
    _min?: TicketMinOrderByAggregateInput
    _sum?: TicketSumOrderByAggregateInput
  }

  export type TicketScalarWhereWithAggregatesInput = {
    AND?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    OR?: TicketScalarWhereWithAggregatesInput[]
    NOT?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Ticket"> | number
    subject?: StringWithAggregatesFilter<"Ticket"> | string
    status?: StringWithAggregatesFilter<"Ticket"> | string
    userId?: IntWithAggregatesFilter<"Ticket"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Ticket"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Ticket"> | Date | string
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    id?: IntFilter<"Message"> | number
    ticketId?: IntFilter<"Message"> | number
    senderId?: IntFilter<"Message"> | number
    content?: StringFilter<"Message"> | string
    createdAt?: DateTimeFilter<"Message"> | Date | string
    ticket?: XOR<TicketScalarRelationFilter, TicketWhereInput>
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    ticketId?: SortOrder
    senderId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    ticket?: TicketOrderByWithRelationInput
    sender?: UserOrderByWithRelationInput
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    ticketId?: IntFilter<"Message"> | number
    senderId?: IntFilter<"Message"> | number
    content?: StringFilter<"Message"> | string
    createdAt?: DateTimeFilter<"Message"> | Date | string
    ticket?: XOR<TicketScalarRelationFilter, TicketWhereInput>
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    ticketId?: SortOrder
    senderId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    _count?: MessageCountOrderByAggregateInput
    _avg?: MessageAvgOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
    _sum?: MessageSumOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Message"> | number
    ticketId?: IntWithAggregatesFilter<"Message"> | number
    senderId?: IntWithAggregatesFilter<"Message"> | number
    content?: StringWithAggregatesFilter<"Message"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
  }

  export type ReferralRewardWhereInput = {
    AND?: ReferralRewardWhereInput | ReferralRewardWhereInput[]
    OR?: ReferralRewardWhereInput[]
    NOT?: ReferralRewardWhereInput | ReferralRewardWhereInput[]
    id?: IntFilter<"ReferralReward"> | number
    userId?: IntFilter<"ReferralReward"> | number
    referredUserId?: IntFilter<"ReferralReward"> | number
    amount?: FloatFilter<"ReferralReward"> | number
    status?: StringFilter<"ReferralReward"> | string
    createdAt?: DateTimeFilter<"ReferralReward"> | Date | string
    redeemedAt?: DateTimeNullableFilter<"ReferralReward"> | Date | string | null
    referrer?: XOR<UserScalarRelationFilter, UserWhereInput>
    referredUser?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ReferralRewardOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    referredUserId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    redeemedAt?: SortOrderInput | SortOrder
    referrer?: UserOrderByWithRelationInput
    referredUser?: UserOrderByWithRelationInput
  }

  export type ReferralRewardWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReferralRewardWhereInput | ReferralRewardWhereInput[]
    OR?: ReferralRewardWhereInput[]
    NOT?: ReferralRewardWhereInput | ReferralRewardWhereInput[]
    userId?: IntFilter<"ReferralReward"> | number
    referredUserId?: IntFilter<"ReferralReward"> | number
    amount?: FloatFilter<"ReferralReward"> | number
    status?: StringFilter<"ReferralReward"> | string
    createdAt?: DateTimeFilter<"ReferralReward"> | Date | string
    redeemedAt?: DateTimeNullableFilter<"ReferralReward"> | Date | string | null
    referrer?: XOR<UserScalarRelationFilter, UserWhereInput>
    referredUser?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ReferralRewardOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    referredUserId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    redeemedAt?: SortOrderInput | SortOrder
    _count?: ReferralRewardCountOrderByAggregateInput
    _avg?: ReferralRewardAvgOrderByAggregateInput
    _max?: ReferralRewardMaxOrderByAggregateInput
    _min?: ReferralRewardMinOrderByAggregateInput
    _sum?: ReferralRewardSumOrderByAggregateInput
  }

  export type ReferralRewardScalarWhereWithAggregatesInput = {
    AND?: ReferralRewardScalarWhereWithAggregatesInput | ReferralRewardScalarWhereWithAggregatesInput[]
    OR?: ReferralRewardScalarWhereWithAggregatesInput[]
    NOT?: ReferralRewardScalarWhereWithAggregatesInput | ReferralRewardScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ReferralReward"> | number
    userId?: IntWithAggregatesFilter<"ReferralReward"> | number
    referredUserId?: IntWithAggregatesFilter<"ReferralReward"> | number
    amount?: FloatWithAggregatesFilter<"ReferralReward"> | number
    status?: StringWithAggregatesFilter<"ReferralReward"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ReferralReward"> | Date | string
    redeemedAt?: DateTimeNullableWithAggregatesFilter<"ReferralReward"> | Date | string | null
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: IntFilter<"Notification"> | number
    userId?: IntFilter<"Notification"> | number
    type?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    status?: StringFilter<"Notification"> | string
    relatedId?: IntNullableFilter<"Notification"> | number | null
    isRead?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    message?: SortOrder
    status?: SortOrder
    relatedId?: SortOrderInput | SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    userId?: IntFilter<"Notification"> | number
    type?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    status?: StringFilter<"Notification"> | string
    relatedId?: IntNullableFilter<"Notification"> | number | null
    isRead?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    message?: SortOrder
    status?: SortOrder
    relatedId?: SortOrderInput | SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _avg?: NotificationAvgOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
    _sum?: NotificationSumOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Notification"> | number
    userId?: IntWithAggregatesFilter<"Notification"> | number
    type?: StringWithAggregatesFilter<"Notification"> | string
    message?: StringWithAggregatesFilter<"Notification"> | string
    status?: StringWithAggregatesFilter<"Notification"> | string
    relatedId?: IntNullableWithAggregatesFilter<"Notification"> | number | null
    isRead?: BoolWithAggregatesFilter<"Notification"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
  }

  export type PriceAlertWhereInput = {
    AND?: PriceAlertWhereInput | PriceAlertWhereInput[]
    OR?: PriceAlertWhereInput[]
    NOT?: PriceAlertWhereInput | PriceAlertWhereInput[]
    id?: IntFilter<"PriceAlert"> | number
    userId?: IntFilter<"PriceAlert"> | number
    asset?: StringFilter<"PriceAlert"> | string
    alertType?: StringFilter<"PriceAlert"> | string
    value?: FloatFilter<"PriceAlert"> | number
    condition?: StringFilter<"PriceAlert"> | string
    active?: BoolFilter<"PriceAlert"> | boolean
    triggeredAt?: DateTimeNullableFilter<"PriceAlert"> | Date | string | null
    createdAt?: DateTimeFilter<"PriceAlert"> | Date | string
    updatedAt?: DateTimeFilter<"PriceAlert"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PriceAlertOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    asset?: SortOrder
    alertType?: SortOrder
    value?: SortOrder
    condition?: SortOrder
    active?: SortOrder
    triggeredAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PriceAlertWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PriceAlertWhereInput | PriceAlertWhereInput[]
    OR?: PriceAlertWhereInput[]
    NOT?: PriceAlertWhereInput | PriceAlertWhereInput[]
    userId?: IntFilter<"PriceAlert"> | number
    asset?: StringFilter<"PriceAlert"> | string
    alertType?: StringFilter<"PriceAlert"> | string
    value?: FloatFilter<"PriceAlert"> | number
    condition?: StringFilter<"PriceAlert"> | string
    active?: BoolFilter<"PriceAlert"> | boolean
    triggeredAt?: DateTimeNullableFilter<"PriceAlert"> | Date | string | null
    createdAt?: DateTimeFilter<"PriceAlert"> | Date | string
    updatedAt?: DateTimeFilter<"PriceAlert"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PriceAlertOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    asset?: SortOrder
    alertType?: SortOrder
    value?: SortOrder
    condition?: SortOrder
    active?: SortOrder
    triggeredAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PriceAlertCountOrderByAggregateInput
    _avg?: PriceAlertAvgOrderByAggregateInput
    _max?: PriceAlertMaxOrderByAggregateInput
    _min?: PriceAlertMinOrderByAggregateInput
    _sum?: PriceAlertSumOrderByAggregateInput
  }

  export type PriceAlertScalarWhereWithAggregatesInput = {
    AND?: PriceAlertScalarWhereWithAggregatesInput | PriceAlertScalarWhereWithAggregatesInput[]
    OR?: PriceAlertScalarWhereWithAggregatesInput[]
    NOT?: PriceAlertScalarWhereWithAggregatesInput | PriceAlertScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PriceAlert"> | number
    userId?: IntWithAggregatesFilter<"PriceAlert"> | number
    asset?: StringWithAggregatesFilter<"PriceAlert"> | string
    alertType?: StringWithAggregatesFilter<"PriceAlert"> | string
    value?: FloatWithAggregatesFilter<"PriceAlert"> | number
    condition?: StringWithAggregatesFilter<"PriceAlert"> | string
    active?: BoolWithAggregatesFilter<"PriceAlert"> | boolean
    triggeredAt?: DateTimeNullableWithAggregatesFilter<"PriceAlert"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PriceAlert"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PriceAlert"> | Date | string
  }

  export type UserCreateInput = {
    firstName: string
    lastName: string
    username: string
    email: string
    password: string
    phone?: string | null
    mainBalance?: number
    investmentBalance?: number
    totalEarn?: number
    totalDeposit?: number
    totalWithdrawals?: number
    roi?: number
    redeemedRoi?: number
    speedInvest?: number
    completed?: number
    interestBalance?: number
    rewardPoints?: number
    totalReferrals?: number
    privateKeyHash?: string | null
    termsAcceptedAt?: Date | string | null
    termsAcceptedIP?: string | null
    createdAt?: Date | string
    deposits?: DepositCreateNestedManyWithoutUserInput
    investments?: InvestmentCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    withdrawals?: WithdrawalCreateNestedManyWithoutUserInput
    referrals?: ReferralCreateNestedManyWithoutUserInput
    referredUsers?: UserCreateNestedManyWithoutReferrerInput
    referrer?: UserCreateNestedOneWithoutReferredUsersInput
    rewardLedger?: RewardLedgerCreateNestedManyWithoutUserInput
    referralRewards?: ReferralRewardCreateNestedManyWithoutReferrerInput
    referralRewardsReceived?: ReferralRewardCreateNestedManyWithoutReferredUserInput
    tickets?: TicketCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutSenderInput
    priceAlerts?: PriceAlertCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    firstName: string
    lastName: string
    username: string
    email: string
    password: string
    phone?: string | null
    mainBalance?: number
    investmentBalance?: number
    totalEarn?: number
    totalDeposit?: number
    totalWithdrawals?: number
    roi?: number
    redeemedRoi?: number
    speedInvest?: number
    completed?: number
    interestBalance?: number
    rewardPoints?: number
    totalReferrals?: number
    referredById?: number | null
    privateKeyHash?: string | null
    termsAcceptedAt?: Date | string | null
    termsAcceptedIP?: string | null
    createdAt?: Date | string
    deposits?: DepositUncheckedCreateNestedManyWithoutUserInput
    investments?: InvestmentUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    withdrawals?: WithdrawalUncheckedCreateNestedManyWithoutUserInput
    referrals?: ReferralUncheckedCreateNestedManyWithoutUserInput
    referredUsers?: UserUncheckedCreateNestedManyWithoutReferrerInput
    rewardLedger?: RewardLedgerUncheckedCreateNestedManyWithoutUserInput
    referralRewards?: ReferralRewardUncheckedCreateNestedManyWithoutReferrerInput
    referralRewardsReceived?: ReferralRewardUncheckedCreateNestedManyWithoutReferredUserInput
    tickets?: TicketUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    priceAlerts?: PriceAlertUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    mainBalance?: FloatFieldUpdateOperationsInput | number
    investmentBalance?: FloatFieldUpdateOperationsInput | number
    totalEarn?: FloatFieldUpdateOperationsInput | number
    totalDeposit?: FloatFieldUpdateOperationsInput | number
    totalWithdrawals?: FloatFieldUpdateOperationsInput | number
    roi?: FloatFieldUpdateOperationsInput | number
    redeemedRoi?: FloatFieldUpdateOperationsInput | number
    speedInvest?: FloatFieldUpdateOperationsInput | number
    completed?: FloatFieldUpdateOperationsInput | number
    interestBalance?: FloatFieldUpdateOperationsInput | number
    rewardPoints?: FloatFieldUpdateOperationsInput | number
    totalReferrals?: IntFieldUpdateOperationsInput | number
    privateKeyHash?: NullableStringFieldUpdateOperationsInput | string | null
    termsAcceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    termsAcceptedIP?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deposits?: DepositUpdateManyWithoutUserNestedInput
    investments?: InvestmentUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    withdrawals?: WithdrawalUpdateManyWithoutUserNestedInput
    referrals?: ReferralUpdateManyWithoutUserNestedInput
    referredUsers?: UserUpdateManyWithoutReferrerNestedInput
    referrer?: UserUpdateOneWithoutReferredUsersNestedInput
    rewardLedger?: RewardLedgerUpdateManyWithoutUserNestedInput
    referralRewards?: ReferralRewardUpdateManyWithoutReferrerNestedInput
    referralRewardsReceived?: ReferralRewardUpdateManyWithoutReferredUserNestedInput
    tickets?: TicketUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    priceAlerts?: PriceAlertUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    mainBalance?: FloatFieldUpdateOperationsInput | number
    investmentBalance?: FloatFieldUpdateOperationsInput | number
    totalEarn?: FloatFieldUpdateOperationsInput | number
    totalDeposit?: FloatFieldUpdateOperationsInput | number
    totalWithdrawals?: FloatFieldUpdateOperationsInput | number
    roi?: FloatFieldUpdateOperationsInput | number
    redeemedRoi?: FloatFieldUpdateOperationsInput | number
    speedInvest?: FloatFieldUpdateOperationsInput | number
    completed?: FloatFieldUpdateOperationsInput | number
    interestBalance?: FloatFieldUpdateOperationsInput | number
    rewardPoints?: FloatFieldUpdateOperationsInput | number
    totalReferrals?: IntFieldUpdateOperationsInput | number
    referredById?: NullableIntFieldUpdateOperationsInput | number | null
    privateKeyHash?: NullableStringFieldUpdateOperationsInput | string | null
    termsAcceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    termsAcceptedIP?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deposits?: DepositUncheckedUpdateManyWithoutUserNestedInput
    investments?: InvestmentUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    withdrawals?: WithdrawalUncheckedUpdateManyWithoutUserNestedInput
    referrals?: ReferralUncheckedUpdateManyWithoutUserNestedInput
    referredUsers?: UserUncheckedUpdateManyWithoutReferrerNestedInput
    rewardLedger?: RewardLedgerUncheckedUpdateManyWithoutUserNestedInput
    referralRewards?: ReferralRewardUncheckedUpdateManyWithoutReferrerNestedInput
    referralRewardsReceived?: ReferralRewardUncheckedUpdateManyWithoutReferredUserNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    priceAlerts?: PriceAlertUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    firstName: string
    lastName: string
    username: string
    email: string
    password: string
    phone?: string | null
    mainBalance?: number
    investmentBalance?: number
    totalEarn?: number
    totalDeposit?: number
    totalWithdrawals?: number
    roi?: number
    redeemedRoi?: number
    speedInvest?: number
    completed?: number
    interestBalance?: number
    rewardPoints?: number
    totalReferrals?: number
    referredById?: number | null
    privateKeyHash?: string | null
    termsAcceptedAt?: Date | string | null
    termsAcceptedIP?: string | null
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    mainBalance?: FloatFieldUpdateOperationsInput | number
    investmentBalance?: FloatFieldUpdateOperationsInput | number
    totalEarn?: FloatFieldUpdateOperationsInput | number
    totalDeposit?: FloatFieldUpdateOperationsInput | number
    totalWithdrawals?: FloatFieldUpdateOperationsInput | number
    roi?: FloatFieldUpdateOperationsInput | number
    redeemedRoi?: FloatFieldUpdateOperationsInput | number
    speedInvest?: FloatFieldUpdateOperationsInput | number
    completed?: FloatFieldUpdateOperationsInput | number
    interestBalance?: FloatFieldUpdateOperationsInput | number
    rewardPoints?: FloatFieldUpdateOperationsInput | number
    totalReferrals?: IntFieldUpdateOperationsInput | number
    privateKeyHash?: NullableStringFieldUpdateOperationsInput | string | null
    termsAcceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    termsAcceptedIP?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    mainBalance?: FloatFieldUpdateOperationsInput | number
    investmentBalance?: FloatFieldUpdateOperationsInput | number
    totalEarn?: FloatFieldUpdateOperationsInput | number
    totalDeposit?: FloatFieldUpdateOperationsInput | number
    totalWithdrawals?: FloatFieldUpdateOperationsInput | number
    roi?: FloatFieldUpdateOperationsInput | number
    redeemedRoi?: FloatFieldUpdateOperationsInput | number
    speedInvest?: FloatFieldUpdateOperationsInput | number
    completed?: FloatFieldUpdateOperationsInput | number
    interestBalance?: FloatFieldUpdateOperationsInput | number
    rewardPoints?: FloatFieldUpdateOperationsInput | number
    totalReferrals?: IntFieldUpdateOperationsInput | number
    referredById?: NullableIntFieldUpdateOperationsInput | number | null
    privateKeyHash?: NullableStringFieldUpdateOperationsInput | string | null
    termsAcceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    termsAcceptedIP?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepositCreateInput = {
    amount: number
    currency: string
    address: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDepositsInput
  }

  export type DepositUncheckedCreateInput = {
    id?: number
    userId: number
    amount: number
    currency: string
    address: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DepositUpdateInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDepositsNestedInput
  }

  export type DepositUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepositCreateManyInput = {
    id?: number
    userId: number
    amount: number
    currency: string
    address: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DepositUpdateManyMutationInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepositUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvestmentCreateInput = {
    planName: string
    planId: number
    roi: number
    duration: string
    durationDays: number
    amount: number
    startDate?: Date | string
    endDate?: Date | string | null
    maturityDate: Date | string
    status?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutInvestmentsInput
  }

  export type InvestmentUncheckedCreateInput = {
    id?: number
    userId: number
    planName: string
    planId: number
    roi: number
    duration: string
    durationDays: number
    amount: number
    startDate?: Date | string
    endDate?: Date | string | null
    maturityDate: Date | string
    status?: string
    createdAt?: Date | string
  }

  export type InvestmentUpdateInput = {
    planName?: StringFieldUpdateOperationsInput | string
    planId?: IntFieldUpdateOperationsInput | number
    roi?: FloatFieldUpdateOperationsInput | number
    duration?: StringFieldUpdateOperationsInput | string
    durationDays?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maturityDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutInvestmentsNestedInput
  }

  export type InvestmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    planName?: StringFieldUpdateOperationsInput | string
    planId?: IntFieldUpdateOperationsInput | number
    roi?: FloatFieldUpdateOperationsInput | number
    duration?: StringFieldUpdateOperationsInput | string
    durationDays?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maturityDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvestmentCreateManyInput = {
    id?: number
    userId: number
    planName: string
    planId: number
    roi: number
    duration: string
    durationDays: number
    amount: number
    startDate?: Date | string
    endDate?: Date | string | null
    maturityDate: Date | string
    status?: string
    createdAt?: Date | string
  }

  export type InvestmentUpdateManyMutationInput = {
    planName?: StringFieldUpdateOperationsInput | string
    planId?: IntFieldUpdateOperationsInput | number
    roi?: FloatFieldUpdateOperationsInput | number
    duration?: StringFieldUpdateOperationsInput | string
    durationDays?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maturityDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvestmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    planName?: StringFieldUpdateOperationsInput | string
    planId?: IntFieldUpdateOperationsInput | number
    roi?: FloatFieldUpdateOperationsInput | number
    duration?: StringFieldUpdateOperationsInput | string
    durationDays?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maturityDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateInput = {
    type?: string | null
    amount: number
    description?: string | null
    status?: string
    paymentMethod?: string | null
    transactionRef?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateInput = {
    id?: number
    userId: number
    type?: string | null
    amount: number
    description?: string | null
    status?: string
    paymentMethod?: string | null
    transactionRef?: string | null
    createdAt?: Date | string
  }

  export type TransactionUpdateInput = {
    type?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    transactionRef?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    type?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    transactionRef?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateManyInput = {
    id?: number
    userId: number
    type?: string | null
    amount: number
    description?: string | null
    status?: string
    paymentMethod?: string | null
    transactionRef?: string | null
    createdAt?: Date | string
  }

  export type TransactionUpdateManyMutationInput = {
    type?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    transactionRef?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    type?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    transactionRef?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WithdrawalCreateInput = {
    amount: number
    address?: string | null
    currency?: string | null
    status?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutWithdrawalsInput
  }

  export type WithdrawalUncheckedCreateInput = {
    id?: number
    userId: number
    amount: number
    address?: string | null
    currency?: string | null
    status?: string
    createdAt?: Date | string
  }

  export type WithdrawalUpdateInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWithdrawalsNestedInput
  }

  export type WithdrawalUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WithdrawalCreateManyInput = {
    id?: number
    userId: number
    amount: number
    address?: string | null
    currency?: string | null
    status?: string
    createdAt?: Date | string
  }

  export type WithdrawalUpdateManyMutationInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WithdrawalUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferralCreateInput = {
    code: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutReferralsInput
  }

  export type ReferralUncheckedCreateInput = {
    id?: number
    userId: number
    code: string
    createdAt?: Date | string
  }

  export type ReferralUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReferralsNestedInput
  }

  export type ReferralUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferralCreateManyInput = {
    id?: number
    userId: number
    code: string
    createdAt?: Date | string
  }

  export type ReferralUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferralUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RewardLedgerCreateInput = {
    type: string
    points: number
    description?: string | null
    refId?: number | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutRewardLedgerInput
  }

  export type RewardLedgerUncheckedCreateInput = {
    id?: number
    userId: number
    type: string
    points: number
    description?: string | null
    refId?: number | null
    createdAt?: Date | string
  }

  export type RewardLedgerUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    points?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    refId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRewardLedgerNestedInput
  }

  export type RewardLedgerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    points?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    refId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RewardLedgerCreateManyInput = {
    id?: number
    userId: number
    type: string
    points: number
    description?: string | null
    refId?: number | null
    createdAt?: Date | string
  }

  export type RewardLedgerUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    points?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    refId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RewardLedgerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    points?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    refId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketCreateInput = {
    subject: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTicketsInput
    messages?: MessageCreateNestedManyWithoutTicketInput
  }

  export type TicketUncheckedCreateInput = {
    id?: number
    subject: string
    status?: string
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketUpdateInput = {
    subject?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTicketsNestedInput
    messages?: MessageUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    subject?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type TicketCreateManyInput = {
    id?: number
    subject: string
    status?: string
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TicketUpdateManyMutationInput = {
    subject?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    subject?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateInput = {
    content: string
    createdAt?: Date | string
    ticket: TicketCreateNestedOneWithoutMessagesInput
    sender: UserCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateInput = {
    id?: number
    ticketId: number
    senderId: number
    content: string
    createdAt?: Date | string
  }

  export type MessageUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket?: TicketUpdateOneRequiredWithoutMessagesNestedInput
    sender?: UserUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    ticketId?: IntFieldUpdateOperationsInput | number
    senderId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateManyInput = {
    id?: number
    ticketId: number
    senderId: number
    content: string
    createdAt?: Date | string
  }

  export type MessageUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ticketId?: IntFieldUpdateOperationsInput | number
    senderId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferralRewardCreateInput = {
    amount: number
    status?: string
    createdAt?: Date | string
    redeemedAt?: Date | string | null
    referrer: UserCreateNestedOneWithoutReferralRewardsInput
    referredUser: UserCreateNestedOneWithoutReferralRewardsReceivedInput
  }

  export type ReferralRewardUncheckedCreateInput = {
    id?: number
    userId: number
    referredUserId: number
    amount: number
    status?: string
    createdAt?: Date | string
    redeemedAt?: Date | string | null
  }

  export type ReferralRewardUpdateInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    redeemedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    referrer?: UserUpdateOneRequiredWithoutReferralRewardsNestedInput
    referredUser?: UserUpdateOneRequiredWithoutReferralRewardsReceivedNestedInput
  }

  export type ReferralRewardUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    referredUserId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    redeemedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReferralRewardCreateManyInput = {
    id?: number
    userId: number
    referredUserId: number
    amount: number
    status?: string
    createdAt?: Date | string
    redeemedAt?: Date | string | null
  }

  export type ReferralRewardUpdateManyMutationInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    redeemedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReferralRewardUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    referredUserId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    redeemedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type NotificationCreateInput = {
    type: string
    message: string
    status?: string
    relatedId?: number | null
    isRead?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: number
    userId: number
    type: string
    message: string
    status?: string
    relatedId?: number | null
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    relatedId?: NullableIntFieldUpdateOperationsInput | number | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    relatedId?: NullableIntFieldUpdateOperationsInput | number | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyInput = {
    id?: number
    userId: number
    type: string
    message: string
    status?: string
    relatedId?: number | null
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    relatedId?: NullableIntFieldUpdateOperationsInput | number | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    relatedId?: NullableIntFieldUpdateOperationsInput | number | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceAlertCreateInput = {
    asset: string
    alertType: string
    value: number
    condition: string
    active?: boolean
    triggeredAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPriceAlertsInput
  }

  export type PriceAlertUncheckedCreateInput = {
    id?: number
    userId: number
    asset: string
    alertType: string
    value: number
    condition: string
    active?: boolean
    triggeredAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PriceAlertUpdateInput = {
    asset?: StringFieldUpdateOperationsInput | string
    alertType?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    condition?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    triggeredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPriceAlertsNestedInput
  }

  export type PriceAlertUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    asset?: StringFieldUpdateOperationsInput | string
    alertType?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    condition?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    triggeredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceAlertCreateManyInput = {
    id?: number
    userId: number
    asset: string
    alertType: string
    value: number
    condition: string
    active?: boolean
    triggeredAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PriceAlertUpdateManyMutationInput = {
    asset?: StringFieldUpdateOperationsInput | string
    alertType?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    condition?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    triggeredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceAlertUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    asset?: StringFieldUpdateOperationsInput | string
    alertType?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    condition?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    triggeredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DepositListRelationFilter = {
    every?: DepositWhereInput
    some?: DepositWhereInput
    none?: DepositWhereInput
  }

  export type InvestmentListRelationFilter = {
    every?: InvestmentWhereInput
    some?: InvestmentWhereInput
    none?: InvestmentWhereInput
  }

  export type TransactionListRelationFilter = {
    every?: TransactionWhereInput
    some?: TransactionWhereInput
    none?: TransactionWhereInput
  }

  export type WithdrawalListRelationFilter = {
    every?: WithdrawalWhereInput
    some?: WithdrawalWhereInput
    none?: WithdrawalWhereInput
  }

  export type ReferralListRelationFilter = {
    every?: ReferralWhereInput
    some?: ReferralWhereInput
    none?: ReferralWhereInput
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type RewardLedgerListRelationFilter = {
    every?: RewardLedgerWhereInput
    some?: RewardLedgerWhereInput
    none?: RewardLedgerWhereInput
  }

  export type ReferralRewardListRelationFilter = {
    every?: ReferralRewardWhereInput
    some?: ReferralRewardWhereInput
    none?: ReferralRewardWhereInput
  }

  export type TicketListRelationFilter = {
    every?: TicketWhereInput
    some?: TicketWhereInput
    none?: TicketWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type PriceAlertListRelationFilter = {
    every?: PriceAlertWhereInput
    some?: PriceAlertWhereInput
    none?: PriceAlertWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DepositOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InvestmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WithdrawalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReferralOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RewardLedgerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReferralRewardOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TicketOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PriceAlertOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    mainBalance?: SortOrder
    investmentBalance?: SortOrder
    totalEarn?: SortOrder
    totalDeposit?: SortOrder
    totalWithdrawals?: SortOrder
    roi?: SortOrder
    redeemedRoi?: SortOrder
    speedInvest?: SortOrder
    completed?: SortOrder
    interestBalance?: SortOrder
    rewardPoints?: SortOrder
    totalReferrals?: SortOrder
    referredById?: SortOrder
    privateKeyHash?: SortOrder
    termsAcceptedAt?: SortOrder
    termsAcceptedIP?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    mainBalance?: SortOrder
    investmentBalance?: SortOrder
    totalEarn?: SortOrder
    totalDeposit?: SortOrder
    totalWithdrawals?: SortOrder
    roi?: SortOrder
    redeemedRoi?: SortOrder
    speedInvest?: SortOrder
    completed?: SortOrder
    interestBalance?: SortOrder
    rewardPoints?: SortOrder
    totalReferrals?: SortOrder
    referredById?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    mainBalance?: SortOrder
    investmentBalance?: SortOrder
    totalEarn?: SortOrder
    totalDeposit?: SortOrder
    totalWithdrawals?: SortOrder
    roi?: SortOrder
    redeemedRoi?: SortOrder
    speedInvest?: SortOrder
    completed?: SortOrder
    interestBalance?: SortOrder
    rewardPoints?: SortOrder
    totalReferrals?: SortOrder
    referredById?: SortOrder
    privateKeyHash?: SortOrder
    termsAcceptedAt?: SortOrder
    termsAcceptedIP?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    mainBalance?: SortOrder
    investmentBalance?: SortOrder
    totalEarn?: SortOrder
    totalDeposit?: SortOrder
    totalWithdrawals?: SortOrder
    roi?: SortOrder
    redeemedRoi?: SortOrder
    speedInvest?: SortOrder
    completed?: SortOrder
    interestBalance?: SortOrder
    rewardPoints?: SortOrder
    totalReferrals?: SortOrder
    referredById?: SortOrder
    privateKeyHash?: SortOrder
    termsAcceptedAt?: SortOrder
    termsAcceptedIP?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    mainBalance?: SortOrder
    investmentBalance?: SortOrder
    totalEarn?: SortOrder
    totalDeposit?: SortOrder
    totalWithdrawals?: SortOrder
    roi?: SortOrder
    redeemedRoi?: SortOrder
    speedInvest?: SortOrder
    completed?: SortOrder
    interestBalance?: SortOrder
    rewardPoints?: SortOrder
    totalReferrals?: SortOrder
    referredById?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type DepositCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    address?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DepositAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
  }

  export type DepositMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    address?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DepositMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    address?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DepositSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
  }

  export type InvestmentCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    planName?: SortOrder
    planId?: SortOrder
    roi?: SortOrder
    duration?: SortOrder
    durationDays?: SortOrder
    amount?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    maturityDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type InvestmentAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    planId?: SortOrder
    roi?: SortOrder
    durationDays?: SortOrder
    amount?: SortOrder
  }

  export type InvestmentMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    planName?: SortOrder
    planId?: SortOrder
    roi?: SortOrder
    duration?: SortOrder
    durationDays?: SortOrder
    amount?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    maturityDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type InvestmentMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    planName?: SortOrder
    planId?: SortOrder
    roi?: SortOrder
    duration?: SortOrder
    durationDays?: SortOrder
    amount?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    maturityDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type InvestmentSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    planId?: SortOrder
    roi?: SortOrder
    durationDays?: SortOrder
    amount?: SortOrder
  }

  export type TransactionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    status?: SortOrder
    paymentMethod?: SortOrder
    transactionRef?: SortOrder
    createdAt?: SortOrder
  }

  export type TransactionAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
  }

  export type TransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    status?: SortOrder
    paymentMethod?: SortOrder
    transactionRef?: SortOrder
    createdAt?: SortOrder
  }

  export type TransactionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    status?: SortOrder
    paymentMethod?: SortOrder
    transactionRef?: SortOrder
    createdAt?: SortOrder
  }

  export type TransactionSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
  }

  export type WithdrawalCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    address?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type WithdrawalAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
  }

  export type WithdrawalMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    address?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type WithdrawalMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    address?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type WithdrawalSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
  }

  export type ReferralCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
  }

  export type ReferralAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ReferralMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
  }

  export type ReferralMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
  }

  export type ReferralSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type RewardLedgerCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    points?: SortOrder
    description?: SortOrder
    refId?: SortOrder
    createdAt?: SortOrder
  }

  export type RewardLedgerAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    points?: SortOrder
    refId?: SortOrder
  }

  export type RewardLedgerMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    points?: SortOrder
    description?: SortOrder
    refId?: SortOrder
    createdAt?: SortOrder
  }

  export type RewardLedgerMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    points?: SortOrder
    description?: SortOrder
    refId?: SortOrder
    createdAt?: SortOrder
  }

  export type RewardLedgerSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    points?: SortOrder
    refId?: SortOrder
  }

  export type TicketCountOrderByAggregateInput = {
    id?: SortOrder
    subject?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TicketAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type TicketMaxOrderByAggregateInput = {
    id?: SortOrder
    subject?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TicketMinOrderByAggregateInput = {
    id?: SortOrder
    subject?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TicketSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type TicketScalarRelationFilter = {
    is?: TicketWhereInput
    isNot?: TicketWhereInput
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    senderId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type MessageAvgOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    senderId?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    senderId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    senderId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type MessageSumOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    senderId?: SortOrder
  }

  export type ReferralRewardCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    referredUserId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    redeemedAt?: SortOrder
  }

  export type ReferralRewardAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    referredUserId?: SortOrder
    amount?: SortOrder
  }

  export type ReferralRewardMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    referredUserId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    redeemedAt?: SortOrder
  }

  export type ReferralRewardMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    referredUserId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    redeemedAt?: SortOrder
  }

  export type ReferralRewardSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    referredUserId?: SortOrder
    amount?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    message?: SortOrder
    status?: SortOrder
    relatedId?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    relatedId?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    message?: SortOrder
    status?: SortOrder
    relatedId?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    message?: SortOrder
    status?: SortOrder
    relatedId?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    relatedId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type PriceAlertCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    asset?: SortOrder
    alertType?: SortOrder
    value?: SortOrder
    condition?: SortOrder
    active?: SortOrder
    triggeredAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PriceAlertAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    value?: SortOrder
  }

  export type PriceAlertMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    asset?: SortOrder
    alertType?: SortOrder
    value?: SortOrder
    condition?: SortOrder
    active?: SortOrder
    triggeredAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PriceAlertMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    asset?: SortOrder
    alertType?: SortOrder
    value?: SortOrder
    condition?: SortOrder
    active?: SortOrder
    triggeredAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PriceAlertSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    value?: SortOrder
  }

  export type DepositCreateNestedManyWithoutUserInput = {
    create?: XOR<DepositCreateWithoutUserInput, DepositUncheckedCreateWithoutUserInput> | DepositCreateWithoutUserInput[] | DepositUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DepositCreateOrConnectWithoutUserInput | DepositCreateOrConnectWithoutUserInput[]
    createMany?: DepositCreateManyUserInputEnvelope
    connect?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
  }

  export type InvestmentCreateNestedManyWithoutUserInput = {
    create?: XOR<InvestmentCreateWithoutUserInput, InvestmentUncheckedCreateWithoutUserInput> | InvestmentCreateWithoutUserInput[] | InvestmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InvestmentCreateOrConnectWithoutUserInput | InvestmentCreateOrConnectWithoutUserInput[]
    createMany?: InvestmentCreateManyUserInputEnvelope
    connect?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type WithdrawalCreateNestedManyWithoutUserInput = {
    create?: XOR<WithdrawalCreateWithoutUserInput, WithdrawalUncheckedCreateWithoutUserInput> | WithdrawalCreateWithoutUserInput[] | WithdrawalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WithdrawalCreateOrConnectWithoutUserInput | WithdrawalCreateOrConnectWithoutUserInput[]
    createMany?: WithdrawalCreateManyUserInputEnvelope
    connect?: WithdrawalWhereUniqueInput | WithdrawalWhereUniqueInput[]
  }

  export type ReferralCreateNestedManyWithoutUserInput = {
    create?: XOR<ReferralCreateWithoutUserInput, ReferralUncheckedCreateWithoutUserInput> | ReferralCreateWithoutUserInput[] | ReferralUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReferralCreateOrConnectWithoutUserInput | ReferralCreateOrConnectWithoutUserInput[]
    createMany?: ReferralCreateManyUserInputEnvelope
    connect?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutReferrerInput = {
    create?: XOR<UserCreateWithoutReferrerInput, UserUncheckedCreateWithoutReferrerInput> | UserCreateWithoutReferrerInput[] | UserUncheckedCreateWithoutReferrerInput[]
    connectOrCreate?: UserCreateOrConnectWithoutReferrerInput | UserCreateOrConnectWithoutReferrerInput[]
    createMany?: UserCreateManyReferrerInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutReferredUsersInput = {
    create?: XOR<UserCreateWithoutReferredUsersInput, UserUncheckedCreateWithoutReferredUsersInput>
    connectOrCreate?: UserCreateOrConnectWithoutReferredUsersInput
    connect?: UserWhereUniqueInput
  }

  export type RewardLedgerCreateNestedManyWithoutUserInput = {
    create?: XOR<RewardLedgerCreateWithoutUserInput, RewardLedgerUncheckedCreateWithoutUserInput> | RewardLedgerCreateWithoutUserInput[] | RewardLedgerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RewardLedgerCreateOrConnectWithoutUserInput | RewardLedgerCreateOrConnectWithoutUserInput[]
    createMany?: RewardLedgerCreateManyUserInputEnvelope
    connect?: RewardLedgerWhereUniqueInput | RewardLedgerWhereUniqueInput[]
  }

  export type ReferralRewardCreateNestedManyWithoutReferrerInput = {
    create?: XOR<ReferralRewardCreateWithoutReferrerInput, ReferralRewardUncheckedCreateWithoutReferrerInput> | ReferralRewardCreateWithoutReferrerInput[] | ReferralRewardUncheckedCreateWithoutReferrerInput[]
    connectOrCreate?: ReferralRewardCreateOrConnectWithoutReferrerInput | ReferralRewardCreateOrConnectWithoutReferrerInput[]
    createMany?: ReferralRewardCreateManyReferrerInputEnvelope
    connect?: ReferralRewardWhereUniqueInput | ReferralRewardWhereUniqueInput[]
  }

  export type ReferralRewardCreateNestedManyWithoutReferredUserInput = {
    create?: XOR<ReferralRewardCreateWithoutReferredUserInput, ReferralRewardUncheckedCreateWithoutReferredUserInput> | ReferralRewardCreateWithoutReferredUserInput[] | ReferralRewardUncheckedCreateWithoutReferredUserInput[]
    connectOrCreate?: ReferralRewardCreateOrConnectWithoutReferredUserInput | ReferralRewardCreateOrConnectWithoutReferredUserInput[]
    createMany?: ReferralRewardCreateManyReferredUserInputEnvelope
    connect?: ReferralRewardWhereUniqueInput | ReferralRewardWhereUniqueInput[]
  }

  export type TicketCreateNestedManyWithoutUserInput = {
    create?: XOR<TicketCreateWithoutUserInput, TicketUncheckedCreateWithoutUserInput> | TicketCreateWithoutUserInput[] | TicketUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutUserInput | TicketCreateOrConnectWithoutUserInput[]
    createMany?: TicketCreateManyUserInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type PriceAlertCreateNestedManyWithoutUserInput = {
    create?: XOR<PriceAlertCreateWithoutUserInput, PriceAlertUncheckedCreateWithoutUserInput> | PriceAlertCreateWithoutUserInput[] | PriceAlertUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PriceAlertCreateOrConnectWithoutUserInput | PriceAlertCreateOrConnectWithoutUserInput[]
    createMany?: PriceAlertCreateManyUserInputEnvelope
    connect?: PriceAlertWhereUniqueInput | PriceAlertWhereUniqueInput[]
  }

  export type DepositUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DepositCreateWithoutUserInput, DepositUncheckedCreateWithoutUserInput> | DepositCreateWithoutUserInput[] | DepositUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DepositCreateOrConnectWithoutUserInput | DepositCreateOrConnectWithoutUserInput[]
    createMany?: DepositCreateManyUserInputEnvelope
    connect?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
  }

  export type InvestmentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<InvestmentCreateWithoutUserInput, InvestmentUncheckedCreateWithoutUserInput> | InvestmentCreateWithoutUserInput[] | InvestmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InvestmentCreateOrConnectWithoutUserInput | InvestmentCreateOrConnectWithoutUserInput[]
    createMany?: InvestmentCreateManyUserInputEnvelope
    connect?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type WithdrawalUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WithdrawalCreateWithoutUserInput, WithdrawalUncheckedCreateWithoutUserInput> | WithdrawalCreateWithoutUserInput[] | WithdrawalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WithdrawalCreateOrConnectWithoutUserInput | WithdrawalCreateOrConnectWithoutUserInput[]
    createMany?: WithdrawalCreateManyUserInputEnvelope
    connect?: WithdrawalWhereUniqueInput | WithdrawalWhereUniqueInput[]
  }

  export type ReferralUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReferralCreateWithoutUserInput, ReferralUncheckedCreateWithoutUserInput> | ReferralCreateWithoutUserInput[] | ReferralUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReferralCreateOrConnectWithoutUserInput | ReferralCreateOrConnectWithoutUserInput[]
    createMany?: ReferralCreateManyUserInputEnvelope
    connect?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutReferrerInput = {
    create?: XOR<UserCreateWithoutReferrerInput, UserUncheckedCreateWithoutReferrerInput> | UserCreateWithoutReferrerInput[] | UserUncheckedCreateWithoutReferrerInput[]
    connectOrCreate?: UserCreateOrConnectWithoutReferrerInput | UserCreateOrConnectWithoutReferrerInput[]
    createMany?: UserCreateManyReferrerInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type RewardLedgerUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RewardLedgerCreateWithoutUserInput, RewardLedgerUncheckedCreateWithoutUserInput> | RewardLedgerCreateWithoutUserInput[] | RewardLedgerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RewardLedgerCreateOrConnectWithoutUserInput | RewardLedgerCreateOrConnectWithoutUserInput[]
    createMany?: RewardLedgerCreateManyUserInputEnvelope
    connect?: RewardLedgerWhereUniqueInput | RewardLedgerWhereUniqueInput[]
  }

  export type ReferralRewardUncheckedCreateNestedManyWithoutReferrerInput = {
    create?: XOR<ReferralRewardCreateWithoutReferrerInput, ReferralRewardUncheckedCreateWithoutReferrerInput> | ReferralRewardCreateWithoutReferrerInput[] | ReferralRewardUncheckedCreateWithoutReferrerInput[]
    connectOrCreate?: ReferralRewardCreateOrConnectWithoutReferrerInput | ReferralRewardCreateOrConnectWithoutReferrerInput[]
    createMany?: ReferralRewardCreateManyReferrerInputEnvelope
    connect?: ReferralRewardWhereUniqueInput | ReferralRewardWhereUniqueInput[]
  }

  export type ReferralRewardUncheckedCreateNestedManyWithoutReferredUserInput = {
    create?: XOR<ReferralRewardCreateWithoutReferredUserInput, ReferralRewardUncheckedCreateWithoutReferredUserInput> | ReferralRewardCreateWithoutReferredUserInput[] | ReferralRewardUncheckedCreateWithoutReferredUserInput[]
    connectOrCreate?: ReferralRewardCreateOrConnectWithoutReferredUserInput | ReferralRewardCreateOrConnectWithoutReferredUserInput[]
    createMany?: ReferralRewardCreateManyReferredUserInputEnvelope
    connect?: ReferralRewardWhereUniqueInput | ReferralRewardWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TicketCreateWithoutUserInput, TicketUncheckedCreateWithoutUserInput> | TicketCreateWithoutUserInput[] | TicketUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutUserInput | TicketCreateOrConnectWithoutUserInput[]
    createMany?: TicketCreateManyUserInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type PriceAlertUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PriceAlertCreateWithoutUserInput, PriceAlertUncheckedCreateWithoutUserInput> | PriceAlertCreateWithoutUserInput[] | PriceAlertUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PriceAlertCreateOrConnectWithoutUserInput | PriceAlertCreateOrConnectWithoutUserInput[]
    createMany?: PriceAlertCreateManyUserInputEnvelope
    connect?: PriceAlertWhereUniqueInput | PriceAlertWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DepositUpdateManyWithoutUserNestedInput = {
    create?: XOR<DepositCreateWithoutUserInput, DepositUncheckedCreateWithoutUserInput> | DepositCreateWithoutUserInput[] | DepositUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DepositCreateOrConnectWithoutUserInput | DepositCreateOrConnectWithoutUserInput[]
    upsert?: DepositUpsertWithWhereUniqueWithoutUserInput | DepositUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DepositCreateManyUserInputEnvelope
    set?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
    disconnect?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
    delete?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
    connect?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
    update?: DepositUpdateWithWhereUniqueWithoutUserInput | DepositUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DepositUpdateManyWithWhereWithoutUserInput | DepositUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DepositScalarWhereInput | DepositScalarWhereInput[]
  }

  export type InvestmentUpdateManyWithoutUserNestedInput = {
    create?: XOR<InvestmentCreateWithoutUserInput, InvestmentUncheckedCreateWithoutUserInput> | InvestmentCreateWithoutUserInput[] | InvestmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InvestmentCreateOrConnectWithoutUserInput | InvestmentCreateOrConnectWithoutUserInput[]
    upsert?: InvestmentUpsertWithWhereUniqueWithoutUserInput | InvestmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: InvestmentCreateManyUserInputEnvelope
    set?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    disconnect?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    delete?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    connect?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    update?: InvestmentUpdateWithWhereUniqueWithoutUserInput | InvestmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: InvestmentUpdateManyWithWhereWithoutUserInput | InvestmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: InvestmentScalarWhereInput | InvestmentScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutUserInput | TransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutUserInput | TransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutUserInput | TransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type WithdrawalUpdateManyWithoutUserNestedInput = {
    create?: XOR<WithdrawalCreateWithoutUserInput, WithdrawalUncheckedCreateWithoutUserInput> | WithdrawalCreateWithoutUserInput[] | WithdrawalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WithdrawalCreateOrConnectWithoutUserInput | WithdrawalCreateOrConnectWithoutUserInput[]
    upsert?: WithdrawalUpsertWithWhereUniqueWithoutUserInput | WithdrawalUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WithdrawalCreateManyUserInputEnvelope
    set?: WithdrawalWhereUniqueInput | WithdrawalWhereUniqueInput[]
    disconnect?: WithdrawalWhereUniqueInput | WithdrawalWhereUniqueInput[]
    delete?: WithdrawalWhereUniqueInput | WithdrawalWhereUniqueInput[]
    connect?: WithdrawalWhereUniqueInput | WithdrawalWhereUniqueInput[]
    update?: WithdrawalUpdateWithWhereUniqueWithoutUserInput | WithdrawalUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WithdrawalUpdateManyWithWhereWithoutUserInput | WithdrawalUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WithdrawalScalarWhereInput | WithdrawalScalarWhereInput[]
  }

  export type ReferralUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReferralCreateWithoutUserInput, ReferralUncheckedCreateWithoutUserInput> | ReferralCreateWithoutUserInput[] | ReferralUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReferralCreateOrConnectWithoutUserInput | ReferralCreateOrConnectWithoutUserInput[]
    upsert?: ReferralUpsertWithWhereUniqueWithoutUserInput | ReferralUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReferralCreateManyUserInputEnvelope
    set?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
    disconnect?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
    delete?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
    connect?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
    update?: ReferralUpdateWithWhereUniqueWithoutUserInput | ReferralUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReferralUpdateManyWithWhereWithoutUserInput | ReferralUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReferralScalarWhereInput | ReferralScalarWhereInput[]
  }

  export type UserUpdateManyWithoutReferrerNestedInput = {
    create?: XOR<UserCreateWithoutReferrerInput, UserUncheckedCreateWithoutReferrerInput> | UserCreateWithoutReferrerInput[] | UserUncheckedCreateWithoutReferrerInput[]
    connectOrCreate?: UserCreateOrConnectWithoutReferrerInput | UserCreateOrConnectWithoutReferrerInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutReferrerInput | UserUpsertWithWhereUniqueWithoutReferrerInput[]
    createMany?: UserCreateManyReferrerInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutReferrerInput | UserUpdateWithWhereUniqueWithoutReferrerInput[]
    updateMany?: UserUpdateManyWithWhereWithoutReferrerInput | UserUpdateManyWithWhereWithoutReferrerInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUpdateOneWithoutReferredUsersNestedInput = {
    create?: XOR<UserCreateWithoutReferredUsersInput, UserUncheckedCreateWithoutReferredUsersInput>
    connectOrCreate?: UserCreateOrConnectWithoutReferredUsersInput
    upsert?: UserUpsertWithoutReferredUsersInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReferredUsersInput, UserUpdateWithoutReferredUsersInput>, UserUncheckedUpdateWithoutReferredUsersInput>
  }

  export type RewardLedgerUpdateManyWithoutUserNestedInput = {
    create?: XOR<RewardLedgerCreateWithoutUserInput, RewardLedgerUncheckedCreateWithoutUserInput> | RewardLedgerCreateWithoutUserInput[] | RewardLedgerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RewardLedgerCreateOrConnectWithoutUserInput | RewardLedgerCreateOrConnectWithoutUserInput[]
    upsert?: RewardLedgerUpsertWithWhereUniqueWithoutUserInput | RewardLedgerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RewardLedgerCreateManyUserInputEnvelope
    set?: RewardLedgerWhereUniqueInput | RewardLedgerWhereUniqueInput[]
    disconnect?: RewardLedgerWhereUniqueInput | RewardLedgerWhereUniqueInput[]
    delete?: RewardLedgerWhereUniqueInput | RewardLedgerWhereUniqueInput[]
    connect?: RewardLedgerWhereUniqueInput | RewardLedgerWhereUniqueInput[]
    update?: RewardLedgerUpdateWithWhereUniqueWithoutUserInput | RewardLedgerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RewardLedgerUpdateManyWithWhereWithoutUserInput | RewardLedgerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RewardLedgerScalarWhereInput | RewardLedgerScalarWhereInput[]
  }

  export type ReferralRewardUpdateManyWithoutReferrerNestedInput = {
    create?: XOR<ReferralRewardCreateWithoutReferrerInput, ReferralRewardUncheckedCreateWithoutReferrerInput> | ReferralRewardCreateWithoutReferrerInput[] | ReferralRewardUncheckedCreateWithoutReferrerInput[]
    connectOrCreate?: ReferralRewardCreateOrConnectWithoutReferrerInput | ReferralRewardCreateOrConnectWithoutReferrerInput[]
    upsert?: ReferralRewardUpsertWithWhereUniqueWithoutReferrerInput | ReferralRewardUpsertWithWhereUniqueWithoutReferrerInput[]
    createMany?: ReferralRewardCreateManyReferrerInputEnvelope
    set?: ReferralRewardWhereUniqueInput | ReferralRewardWhereUniqueInput[]
    disconnect?: ReferralRewardWhereUniqueInput | ReferralRewardWhereUniqueInput[]
    delete?: ReferralRewardWhereUniqueInput | ReferralRewardWhereUniqueInput[]
    connect?: ReferralRewardWhereUniqueInput | ReferralRewardWhereUniqueInput[]
    update?: ReferralRewardUpdateWithWhereUniqueWithoutReferrerInput | ReferralRewardUpdateWithWhereUniqueWithoutReferrerInput[]
    updateMany?: ReferralRewardUpdateManyWithWhereWithoutReferrerInput | ReferralRewardUpdateManyWithWhereWithoutReferrerInput[]
    deleteMany?: ReferralRewardScalarWhereInput | ReferralRewardScalarWhereInput[]
  }

  export type ReferralRewardUpdateManyWithoutReferredUserNestedInput = {
    create?: XOR<ReferralRewardCreateWithoutReferredUserInput, ReferralRewardUncheckedCreateWithoutReferredUserInput> | ReferralRewardCreateWithoutReferredUserInput[] | ReferralRewardUncheckedCreateWithoutReferredUserInput[]
    connectOrCreate?: ReferralRewardCreateOrConnectWithoutReferredUserInput | ReferralRewardCreateOrConnectWithoutReferredUserInput[]
    upsert?: ReferralRewardUpsertWithWhereUniqueWithoutReferredUserInput | ReferralRewardUpsertWithWhereUniqueWithoutReferredUserInput[]
    createMany?: ReferralRewardCreateManyReferredUserInputEnvelope
    set?: ReferralRewardWhereUniqueInput | ReferralRewardWhereUniqueInput[]
    disconnect?: ReferralRewardWhereUniqueInput | ReferralRewardWhereUniqueInput[]
    delete?: ReferralRewardWhereUniqueInput | ReferralRewardWhereUniqueInput[]
    connect?: ReferralRewardWhereUniqueInput | ReferralRewardWhereUniqueInput[]
    update?: ReferralRewardUpdateWithWhereUniqueWithoutReferredUserInput | ReferralRewardUpdateWithWhereUniqueWithoutReferredUserInput[]
    updateMany?: ReferralRewardUpdateManyWithWhereWithoutReferredUserInput | ReferralRewardUpdateManyWithWhereWithoutReferredUserInput[]
    deleteMany?: ReferralRewardScalarWhereInput | ReferralRewardScalarWhereInput[]
  }

  export type TicketUpdateManyWithoutUserNestedInput = {
    create?: XOR<TicketCreateWithoutUserInput, TicketUncheckedCreateWithoutUserInput> | TicketCreateWithoutUserInput[] | TicketUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutUserInput | TicketCreateOrConnectWithoutUserInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutUserInput | TicketUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TicketCreateManyUserInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutUserInput | TicketUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutUserInput | TicketUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSenderInput | MessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSenderInput | MessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSenderInput | MessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type PriceAlertUpdateManyWithoutUserNestedInput = {
    create?: XOR<PriceAlertCreateWithoutUserInput, PriceAlertUncheckedCreateWithoutUserInput> | PriceAlertCreateWithoutUserInput[] | PriceAlertUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PriceAlertCreateOrConnectWithoutUserInput | PriceAlertCreateOrConnectWithoutUserInput[]
    upsert?: PriceAlertUpsertWithWhereUniqueWithoutUserInput | PriceAlertUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PriceAlertCreateManyUserInputEnvelope
    set?: PriceAlertWhereUniqueInput | PriceAlertWhereUniqueInput[]
    disconnect?: PriceAlertWhereUniqueInput | PriceAlertWhereUniqueInput[]
    delete?: PriceAlertWhereUniqueInput | PriceAlertWhereUniqueInput[]
    connect?: PriceAlertWhereUniqueInput | PriceAlertWhereUniqueInput[]
    update?: PriceAlertUpdateWithWhereUniqueWithoutUserInput | PriceAlertUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PriceAlertUpdateManyWithWhereWithoutUserInput | PriceAlertUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PriceAlertScalarWhereInput | PriceAlertScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DepositUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DepositCreateWithoutUserInput, DepositUncheckedCreateWithoutUserInput> | DepositCreateWithoutUserInput[] | DepositUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DepositCreateOrConnectWithoutUserInput | DepositCreateOrConnectWithoutUserInput[]
    upsert?: DepositUpsertWithWhereUniqueWithoutUserInput | DepositUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DepositCreateManyUserInputEnvelope
    set?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
    disconnect?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
    delete?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
    connect?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
    update?: DepositUpdateWithWhereUniqueWithoutUserInput | DepositUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DepositUpdateManyWithWhereWithoutUserInput | DepositUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DepositScalarWhereInput | DepositScalarWhereInput[]
  }

  export type InvestmentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<InvestmentCreateWithoutUserInput, InvestmentUncheckedCreateWithoutUserInput> | InvestmentCreateWithoutUserInput[] | InvestmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InvestmentCreateOrConnectWithoutUserInput | InvestmentCreateOrConnectWithoutUserInput[]
    upsert?: InvestmentUpsertWithWhereUniqueWithoutUserInput | InvestmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: InvestmentCreateManyUserInputEnvelope
    set?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    disconnect?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    delete?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    connect?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    update?: InvestmentUpdateWithWhereUniqueWithoutUserInput | InvestmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: InvestmentUpdateManyWithWhereWithoutUserInput | InvestmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: InvestmentScalarWhereInput | InvestmentScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutUserInput | TransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutUserInput | TransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutUserInput | TransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type WithdrawalUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WithdrawalCreateWithoutUserInput, WithdrawalUncheckedCreateWithoutUserInput> | WithdrawalCreateWithoutUserInput[] | WithdrawalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WithdrawalCreateOrConnectWithoutUserInput | WithdrawalCreateOrConnectWithoutUserInput[]
    upsert?: WithdrawalUpsertWithWhereUniqueWithoutUserInput | WithdrawalUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WithdrawalCreateManyUserInputEnvelope
    set?: WithdrawalWhereUniqueInput | WithdrawalWhereUniqueInput[]
    disconnect?: WithdrawalWhereUniqueInput | WithdrawalWhereUniqueInput[]
    delete?: WithdrawalWhereUniqueInput | WithdrawalWhereUniqueInput[]
    connect?: WithdrawalWhereUniqueInput | WithdrawalWhereUniqueInput[]
    update?: WithdrawalUpdateWithWhereUniqueWithoutUserInput | WithdrawalUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WithdrawalUpdateManyWithWhereWithoutUserInput | WithdrawalUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WithdrawalScalarWhereInput | WithdrawalScalarWhereInput[]
  }

  export type ReferralUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReferralCreateWithoutUserInput, ReferralUncheckedCreateWithoutUserInput> | ReferralCreateWithoutUserInput[] | ReferralUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReferralCreateOrConnectWithoutUserInput | ReferralCreateOrConnectWithoutUserInput[]
    upsert?: ReferralUpsertWithWhereUniqueWithoutUserInput | ReferralUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReferralCreateManyUserInputEnvelope
    set?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
    disconnect?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
    delete?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
    connect?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
    update?: ReferralUpdateWithWhereUniqueWithoutUserInput | ReferralUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReferralUpdateManyWithWhereWithoutUserInput | ReferralUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReferralScalarWhereInput | ReferralScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutReferrerNestedInput = {
    create?: XOR<UserCreateWithoutReferrerInput, UserUncheckedCreateWithoutReferrerInput> | UserCreateWithoutReferrerInput[] | UserUncheckedCreateWithoutReferrerInput[]
    connectOrCreate?: UserCreateOrConnectWithoutReferrerInput | UserCreateOrConnectWithoutReferrerInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutReferrerInput | UserUpsertWithWhereUniqueWithoutReferrerInput[]
    createMany?: UserCreateManyReferrerInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutReferrerInput | UserUpdateWithWhereUniqueWithoutReferrerInput[]
    updateMany?: UserUpdateManyWithWhereWithoutReferrerInput | UserUpdateManyWithWhereWithoutReferrerInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type RewardLedgerUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RewardLedgerCreateWithoutUserInput, RewardLedgerUncheckedCreateWithoutUserInput> | RewardLedgerCreateWithoutUserInput[] | RewardLedgerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RewardLedgerCreateOrConnectWithoutUserInput | RewardLedgerCreateOrConnectWithoutUserInput[]
    upsert?: RewardLedgerUpsertWithWhereUniqueWithoutUserInput | RewardLedgerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RewardLedgerCreateManyUserInputEnvelope
    set?: RewardLedgerWhereUniqueInput | RewardLedgerWhereUniqueInput[]
    disconnect?: RewardLedgerWhereUniqueInput | RewardLedgerWhereUniqueInput[]
    delete?: RewardLedgerWhereUniqueInput | RewardLedgerWhereUniqueInput[]
    connect?: RewardLedgerWhereUniqueInput | RewardLedgerWhereUniqueInput[]
    update?: RewardLedgerUpdateWithWhereUniqueWithoutUserInput | RewardLedgerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RewardLedgerUpdateManyWithWhereWithoutUserInput | RewardLedgerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RewardLedgerScalarWhereInput | RewardLedgerScalarWhereInput[]
  }

  export type ReferralRewardUncheckedUpdateManyWithoutReferrerNestedInput = {
    create?: XOR<ReferralRewardCreateWithoutReferrerInput, ReferralRewardUncheckedCreateWithoutReferrerInput> | ReferralRewardCreateWithoutReferrerInput[] | ReferralRewardUncheckedCreateWithoutReferrerInput[]
    connectOrCreate?: ReferralRewardCreateOrConnectWithoutReferrerInput | ReferralRewardCreateOrConnectWithoutReferrerInput[]
    upsert?: ReferralRewardUpsertWithWhereUniqueWithoutReferrerInput | ReferralRewardUpsertWithWhereUniqueWithoutReferrerInput[]
    createMany?: ReferralRewardCreateManyReferrerInputEnvelope
    set?: ReferralRewardWhereUniqueInput | ReferralRewardWhereUniqueInput[]
    disconnect?: ReferralRewardWhereUniqueInput | ReferralRewardWhereUniqueInput[]
    delete?: ReferralRewardWhereUniqueInput | ReferralRewardWhereUniqueInput[]
    connect?: ReferralRewardWhereUniqueInput | ReferralRewardWhereUniqueInput[]
    update?: ReferralRewardUpdateWithWhereUniqueWithoutReferrerInput | ReferralRewardUpdateWithWhereUniqueWithoutReferrerInput[]
    updateMany?: ReferralRewardUpdateManyWithWhereWithoutReferrerInput | ReferralRewardUpdateManyWithWhereWithoutReferrerInput[]
    deleteMany?: ReferralRewardScalarWhereInput | ReferralRewardScalarWhereInput[]
  }

  export type ReferralRewardUncheckedUpdateManyWithoutReferredUserNestedInput = {
    create?: XOR<ReferralRewardCreateWithoutReferredUserInput, ReferralRewardUncheckedCreateWithoutReferredUserInput> | ReferralRewardCreateWithoutReferredUserInput[] | ReferralRewardUncheckedCreateWithoutReferredUserInput[]
    connectOrCreate?: ReferralRewardCreateOrConnectWithoutReferredUserInput | ReferralRewardCreateOrConnectWithoutReferredUserInput[]
    upsert?: ReferralRewardUpsertWithWhereUniqueWithoutReferredUserInput | ReferralRewardUpsertWithWhereUniqueWithoutReferredUserInput[]
    createMany?: ReferralRewardCreateManyReferredUserInputEnvelope
    set?: ReferralRewardWhereUniqueInput | ReferralRewardWhereUniqueInput[]
    disconnect?: ReferralRewardWhereUniqueInput | ReferralRewardWhereUniqueInput[]
    delete?: ReferralRewardWhereUniqueInput | ReferralRewardWhereUniqueInput[]
    connect?: ReferralRewardWhereUniqueInput | ReferralRewardWhereUniqueInput[]
    update?: ReferralRewardUpdateWithWhereUniqueWithoutReferredUserInput | ReferralRewardUpdateWithWhereUniqueWithoutReferredUserInput[]
    updateMany?: ReferralRewardUpdateManyWithWhereWithoutReferredUserInput | ReferralRewardUpdateManyWithWhereWithoutReferredUserInput[]
    deleteMany?: ReferralRewardScalarWhereInput | ReferralRewardScalarWhereInput[]
  }

  export type TicketUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TicketCreateWithoutUserInput, TicketUncheckedCreateWithoutUserInput> | TicketCreateWithoutUserInput[] | TicketUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutUserInput | TicketCreateOrConnectWithoutUserInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutUserInput | TicketUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TicketCreateManyUserInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutUserInput | TicketUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutUserInput | TicketUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSenderInput | MessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSenderInput | MessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSenderInput | MessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type PriceAlertUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PriceAlertCreateWithoutUserInput, PriceAlertUncheckedCreateWithoutUserInput> | PriceAlertCreateWithoutUserInput[] | PriceAlertUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PriceAlertCreateOrConnectWithoutUserInput | PriceAlertCreateOrConnectWithoutUserInput[]
    upsert?: PriceAlertUpsertWithWhereUniqueWithoutUserInput | PriceAlertUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PriceAlertCreateManyUserInputEnvelope
    set?: PriceAlertWhereUniqueInput | PriceAlertWhereUniqueInput[]
    disconnect?: PriceAlertWhereUniqueInput | PriceAlertWhereUniqueInput[]
    delete?: PriceAlertWhereUniqueInput | PriceAlertWhereUniqueInput[]
    connect?: PriceAlertWhereUniqueInput | PriceAlertWhereUniqueInput[]
    update?: PriceAlertUpdateWithWhereUniqueWithoutUserInput | PriceAlertUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PriceAlertUpdateManyWithWhereWithoutUserInput | PriceAlertUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PriceAlertScalarWhereInput | PriceAlertScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutDepositsInput = {
    create?: XOR<UserCreateWithoutDepositsInput, UserUncheckedCreateWithoutDepositsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDepositsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutDepositsNestedInput = {
    create?: XOR<UserCreateWithoutDepositsInput, UserUncheckedCreateWithoutDepositsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDepositsInput
    upsert?: UserUpsertWithoutDepositsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDepositsInput, UserUpdateWithoutDepositsInput>, UserUncheckedUpdateWithoutDepositsInput>
  }

  export type UserCreateNestedOneWithoutInvestmentsInput = {
    create?: XOR<UserCreateWithoutInvestmentsInput, UserUncheckedCreateWithoutInvestmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutInvestmentsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutInvestmentsNestedInput = {
    create?: XOR<UserCreateWithoutInvestmentsInput, UserUncheckedCreateWithoutInvestmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutInvestmentsInput
    upsert?: UserUpsertWithoutInvestmentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInvestmentsInput, UserUpdateWithoutInvestmentsInput>, UserUncheckedUpdateWithoutInvestmentsInput>
  }

  export type UserCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput
    upsert?: UserUpsertWithoutTransactionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTransactionsInput, UserUpdateWithoutTransactionsInput>, UserUncheckedUpdateWithoutTransactionsInput>
  }

  export type UserCreateNestedOneWithoutWithdrawalsInput = {
    create?: XOR<UserCreateWithoutWithdrawalsInput, UserUncheckedCreateWithoutWithdrawalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWithdrawalsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutWithdrawalsNestedInput = {
    create?: XOR<UserCreateWithoutWithdrawalsInput, UserUncheckedCreateWithoutWithdrawalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWithdrawalsInput
    upsert?: UserUpsertWithoutWithdrawalsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWithdrawalsInput, UserUpdateWithoutWithdrawalsInput>, UserUncheckedUpdateWithoutWithdrawalsInput>
  }

  export type UserCreateNestedOneWithoutReferralsInput = {
    create?: XOR<UserCreateWithoutReferralsInput, UserUncheckedCreateWithoutReferralsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReferralsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutReferralsNestedInput = {
    create?: XOR<UserCreateWithoutReferralsInput, UserUncheckedCreateWithoutReferralsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReferralsInput
    upsert?: UserUpsertWithoutReferralsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReferralsInput, UserUpdateWithoutReferralsInput>, UserUncheckedUpdateWithoutReferralsInput>
  }

  export type UserCreateNestedOneWithoutRewardLedgerInput = {
    create?: XOR<UserCreateWithoutRewardLedgerInput, UserUncheckedCreateWithoutRewardLedgerInput>
    connectOrCreate?: UserCreateOrConnectWithoutRewardLedgerInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutRewardLedgerNestedInput = {
    create?: XOR<UserCreateWithoutRewardLedgerInput, UserUncheckedCreateWithoutRewardLedgerInput>
    connectOrCreate?: UserCreateOrConnectWithoutRewardLedgerInput
    upsert?: UserUpsertWithoutRewardLedgerInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRewardLedgerInput, UserUpdateWithoutRewardLedgerInput>, UserUncheckedUpdateWithoutRewardLedgerInput>
  }

  export type UserCreateNestedOneWithoutTicketsInput = {
    create?: XOR<UserCreateWithoutTicketsInput, UserUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTicketsInput
    connect?: UserWhereUniqueInput
  }

  export type MessageCreateNestedManyWithoutTicketInput = {
    create?: XOR<MessageCreateWithoutTicketInput, MessageUncheckedCreateWithoutTicketInput> | MessageCreateWithoutTicketInput[] | MessageUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutTicketInput | MessageCreateOrConnectWithoutTicketInput[]
    createMany?: MessageCreateManyTicketInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutTicketInput = {
    create?: XOR<MessageCreateWithoutTicketInput, MessageUncheckedCreateWithoutTicketInput> | MessageCreateWithoutTicketInput[] | MessageUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutTicketInput | MessageCreateOrConnectWithoutTicketInput[]
    createMany?: MessageCreateManyTicketInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutTicketsNestedInput = {
    create?: XOR<UserCreateWithoutTicketsInput, UserUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTicketsInput
    upsert?: UserUpsertWithoutTicketsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTicketsInput, UserUpdateWithoutTicketsInput>, UserUncheckedUpdateWithoutTicketsInput>
  }

  export type MessageUpdateManyWithoutTicketNestedInput = {
    create?: XOR<MessageCreateWithoutTicketInput, MessageUncheckedCreateWithoutTicketInput> | MessageCreateWithoutTicketInput[] | MessageUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutTicketInput | MessageCreateOrConnectWithoutTicketInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutTicketInput | MessageUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: MessageCreateManyTicketInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutTicketInput | MessageUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutTicketInput | MessageUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutTicketNestedInput = {
    create?: XOR<MessageCreateWithoutTicketInput, MessageUncheckedCreateWithoutTicketInput> | MessageCreateWithoutTicketInput[] | MessageUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutTicketInput | MessageCreateOrConnectWithoutTicketInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutTicketInput | MessageUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: MessageCreateManyTicketInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutTicketInput | MessageUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutTicketInput | MessageUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type TicketCreateNestedOneWithoutMessagesInput = {
    create?: XOR<TicketCreateWithoutMessagesInput, TicketUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: TicketCreateOrConnectWithoutMessagesInput
    connect?: TicketWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMessagesInput = {
    create?: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type TicketUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<TicketCreateWithoutMessagesInput, TicketUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: TicketCreateOrConnectWithoutMessagesInput
    upsert?: TicketUpsertWithoutMessagesInput
    connect?: TicketWhereUniqueInput
    update?: XOR<XOR<TicketUpdateToOneWithWhereWithoutMessagesInput, TicketUpdateWithoutMessagesInput>, TicketUncheckedUpdateWithoutMessagesInput>
  }

  export type UserUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesInput
    upsert?: UserUpsertWithoutMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMessagesInput, UserUpdateWithoutMessagesInput>, UserUncheckedUpdateWithoutMessagesInput>
  }

  export type UserCreateNestedOneWithoutReferralRewardsInput = {
    create?: XOR<UserCreateWithoutReferralRewardsInput, UserUncheckedCreateWithoutReferralRewardsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReferralRewardsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReferralRewardsReceivedInput = {
    create?: XOR<UserCreateWithoutReferralRewardsReceivedInput, UserUncheckedCreateWithoutReferralRewardsReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutReferralRewardsReceivedInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutReferralRewardsNestedInput = {
    create?: XOR<UserCreateWithoutReferralRewardsInput, UserUncheckedCreateWithoutReferralRewardsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReferralRewardsInput
    upsert?: UserUpsertWithoutReferralRewardsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReferralRewardsInput, UserUpdateWithoutReferralRewardsInput>, UserUncheckedUpdateWithoutReferralRewardsInput>
  }

  export type UserUpdateOneRequiredWithoutReferralRewardsReceivedNestedInput = {
    create?: XOR<UserCreateWithoutReferralRewardsReceivedInput, UserUncheckedCreateWithoutReferralRewardsReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutReferralRewardsReceivedInput
    upsert?: UserUpsertWithoutReferralRewardsReceivedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReferralRewardsReceivedInput, UserUpdateWithoutReferralRewardsReceivedInput>, UserUncheckedUpdateWithoutReferralRewardsReceivedInput>
  }

  export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    upsert?: UserUpsertWithoutNotificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationsInput, UserUpdateWithoutNotificationsInput>, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserCreateNestedOneWithoutPriceAlertsInput = {
    create?: XOR<UserCreateWithoutPriceAlertsInput, UserUncheckedCreateWithoutPriceAlertsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPriceAlertsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPriceAlertsNestedInput = {
    create?: XOR<UserCreateWithoutPriceAlertsInput, UserUncheckedCreateWithoutPriceAlertsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPriceAlertsInput
    upsert?: UserUpsertWithoutPriceAlertsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPriceAlertsInput, UserUpdateWithoutPriceAlertsInput>, UserUncheckedUpdateWithoutPriceAlertsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DepositCreateWithoutUserInput = {
    amount: number
    currency: string
    address: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DepositUncheckedCreateWithoutUserInput = {
    id?: number
    amount: number
    currency: string
    address: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DepositCreateOrConnectWithoutUserInput = {
    where: DepositWhereUniqueInput
    create: XOR<DepositCreateWithoutUserInput, DepositUncheckedCreateWithoutUserInput>
  }

  export type DepositCreateManyUserInputEnvelope = {
    data: DepositCreateManyUserInput | DepositCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type InvestmentCreateWithoutUserInput = {
    planName: string
    planId: number
    roi: number
    duration: string
    durationDays: number
    amount: number
    startDate?: Date | string
    endDate?: Date | string | null
    maturityDate: Date | string
    status?: string
    createdAt?: Date | string
  }

  export type InvestmentUncheckedCreateWithoutUserInput = {
    id?: number
    planName: string
    planId: number
    roi: number
    duration: string
    durationDays: number
    amount: number
    startDate?: Date | string
    endDate?: Date | string | null
    maturityDate: Date | string
    status?: string
    createdAt?: Date | string
  }

  export type InvestmentCreateOrConnectWithoutUserInput = {
    where: InvestmentWhereUniqueInput
    create: XOR<InvestmentCreateWithoutUserInput, InvestmentUncheckedCreateWithoutUserInput>
  }

  export type InvestmentCreateManyUserInputEnvelope = {
    data: InvestmentCreateManyUserInput | InvestmentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TransactionCreateWithoutUserInput = {
    type?: string | null
    amount: number
    description?: string | null
    status?: string
    paymentMethod?: string | null
    transactionRef?: string | null
    createdAt?: Date | string
  }

  export type TransactionUncheckedCreateWithoutUserInput = {
    id?: number
    type?: string | null
    amount: number
    description?: string | null
    status?: string
    paymentMethod?: string | null
    transactionRef?: string | null
    createdAt?: Date | string
  }

  export type TransactionCreateOrConnectWithoutUserInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput>
  }

  export type TransactionCreateManyUserInputEnvelope = {
    data: TransactionCreateManyUserInput | TransactionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WithdrawalCreateWithoutUserInput = {
    amount: number
    address?: string | null
    currency?: string | null
    status?: string
    createdAt?: Date | string
  }

  export type WithdrawalUncheckedCreateWithoutUserInput = {
    id?: number
    amount: number
    address?: string | null
    currency?: string | null
    status?: string
    createdAt?: Date | string
  }

  export type WithdrawalCreateOrConnectWithoutUserInput = {
    where: WithdrawalWhereUniqueInput
    create: XOR<WithdrawalCreateWithoutUserInput, WithdrawalUncheckedCreateWithoutUserInput>
  }

  export type WithdrawalCreateManyUserInputEnvelope = {
    data: WithdrawalCreateManyUserInput | WithdrawalCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReferralCreateWithoutUserInput = {
    code: string
    createdAt?: Date | string
  }

  export type ReferralUncheckedCreateWithoutUserInput = {
    id?: number
    code: string
    createdAt?: Date | string
  }

  export type ReferralCreateOrConnectWithoutUserInput = {
    where: ReferralWhereUniqueInput
    create: XOR<ReferralCreateWithoutUserInput, ReferralUncheckedCreateWithoutUserInput>
  }

  export type ReferralCreateManyUserInputEnvelope = {
    data: ReferralCreateManyUserInput | ReferralCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutReferrerInput = {
    firstName: string
    lastName: string
    username: string
    email: string
    password: string
    phone?: string | null
    mainBalance?: number
    investmentBalance?: number
    totalEarn?: number
    totalDeposit?: number
    totalWithdrawals?: number
    roi?: number
    redeemedRoi?: number
    speedInvest?: number
    completed?: number
    interestBalance?: number
    rewardPoints?: number
    totalReferrals?: number
    privateKeyHash?: string | null
    termsAcceptedAt?: Date | string | null
    termsAcceptedIP?: string | null
    createdAt?: Date | string
    deposits?: DepositCreateNestedManyWithoutUserInput
    investments?: InvestmentCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    withdrawals?: WithdrawalCreateNestedManyWithoutUserInput
    referrals?: ReferralCreateNestedManyWithoutUserInput
    referredUsers?: UserCreateNestedManyWithoutReferrerInput
    rewardLedger?: RewardLedgerCreateNestedManyWithoutUserInput
    referralRewards?: ReferralRewardCreateNestedManyWithoutReferrerInput
    referralRewardsReceived?: ReferralRewardCreateNestedManyWithoutReferredUserInput
    tickets?: TicketCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutSenderInput
    priceAlerts?: PriceAlertCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReferrerInput = {
    id?: number
    firstName: string
    lastName: string
    username: string
    email: string
    password: string
    phone?: string | null
    mainBalance?: number
    investmentBalance?: number
    totalEarn?: number
    totalDeposit?: number
    totalWithdrawals?: number
    roi?: number
    redeemedRoi?: number
    speedInvest?: number
    completed?: number
    interestBalance?: number
    rewardPoints?: number
    totalReferrals?: number
    privateKeyHash?: string | null
    termsAcceptedAt?: Date | string | null
    termsAcceptedIP?: string | null
    createdAt?: Date | string
    deposits?: DepositUncheckedCreateNestedManyWithoutUserInput
    investments?: InvestmentUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    withdrawals?: WithdrawalUncheckedCreateNestedManyWithoutUserInput
    referrals?: ReferralUncheckedCreateNestedManyWithoutUserInput
    referredUsers?: UserUncheckedCreateNestedManyWithoutReferrerInput
    rewardLedger?: RewardLedgerUncheckedCreateNestedManyWithoutUserInput
    referralRewards?: ReferralRewardUncheckedCreateNestedManyWithoutReferrerInput
    referralRewardsReceived?: ReferralRewardUncheckedCreateNestedManyWithoutReferredUserInput
    tickets?: TicketUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    priceAlerts?: PriceAlertUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReferrerInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReferrerInput, UserUncheckedCreateWithoutReferrerInput>
  }

  export type UserCreateManyReferrerInputEnvelope = {
    data: UserCreateManyReferrerInput | UserCreateManyReferrerInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutReferredUsersInput = {
    firstName: string
    lastName: string
    username: string
    email: string
    password: string
    phone?: string | null
    mainBalance?: number
    investmentBalance?: number
    totalEarn?: number
    totalDeposit?: number
    totalWithdrawals?: number
    roi?: number
    redeemedRoi?: number
    speedInvest?: number
    completed?: number
    interestBalance?: number
    rewardPoints?: number
    totalReferrals?: number
    privateKeyHash?: string | null
    termsAcceptedAt?: Date | string | null
    termsAcceptedIP?: string | null
    createdAt?: Date | string
    deposits?: DepositCreateNestedManyWithoutUserInput
    investments?: InvestmentCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    withdrawals?: WithdrawalCreateNestedManyWithoutUserInput
    referrals?: ReferralCreateNestedManyWithoutUserInput
    referrer?: UserCreateNestedOneWithoutReferredUsersInput
    rewardLedger?: RewardLedgerCreateNestedManyWithoutUserInput
    referralRewards?: ReferralRewardCreateNestedManyWithoutReferrerInput
    referralRewardsReceived?: ReferralRewardCreateNestedManyWithoutReferredUserInput
    tickets?: TicketCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutSenderInput
    priceAlerts?: PriceAlertCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReferredUsersInput = {
    id?: number
    firstName: string
    lastName: string
    username: string
    email: string
    password: string
    phone?: string | null
    mainBalance?: number
    investmentBalance?: number
    totalEarn?: number
    totalDeposit?: number
    totalWithdrawals?: number
    roi?: number
    redeemedRoi?: number
    speedInvest?: number
    completed?: number
    interestBalance?: number
    rewardPoints?: number
    totalReferrals?: number
    referredById?: number | null
    privateKeyHash?: string | null
    termsAcceptedAt?: Date | string | null
    termsAcceptedIP?: string | null
    createdAt?: Date | string
    deposits?: DepositUncheckedCreateNestedManyWithoutUserInput
    investments?: InvestmentUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    withdrawals?: WithdrawalUncheckedCreateNestedManyWithoutUserInput
    referrals?: ReferralUncheckedCreateNestedManyWithoutUserInput
    rewardLedger?: RewardLedgerUncheckedCreateNestedManyWithoutUserInput
    referralRewards?: ReferralRewardUncheckedCreateNestedManyWithoutReferrerInput
    referralRewardsReceived?: ReferralRewardUncheckedCreateNestedManyWithoutReferredUserInput
    tickets?: TicketUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    priceAlerts?: PriceAlertUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReferredUsersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReferredUsersInput, UserUncheckedCreateWithoutReferredUsersInput>
  }

  export type RewardLedgerCreateWithoutUserInput = {
    type: string
    points: number
    description?: string | null
    refId?: number | null
    createdAt?: Date | string
  }

  export type RewardLedgerUncheckedCreateWithoutUserInput = {
    id?: number
    type: string
    points: number
    description?: string | null
    refId?: number | null
    createdAt?: Date | string
  }

  export type RewardLedgerCreateOrConnectWithoutUserInput = {
    where: RewardLedgerWhereUniqueInput
    create: XOR<RewardLedgerCreateWithoutUserInput, RewardLedgerUncheckedCreateWithoutUserInput>
  }

  export type RewardLedgerCreateManyUserInputEnvelope = {
    data: RewardLedgerCreateManyUserInput | RewardLedgerCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReferralRewardCreateWithoutReferrerInput = {
    amount: number
    status?: string
    createdAt?: Date | string
    redeemedAt?: Date | string | null
    referredUser: UserCreateNestedOneWithoutReferralRewardsReceivedInput
  }

  export type ReferralRewardUncheckedCreateWithoutReferrerInput = {
    id?: number
    referredUserId: number
    amount: number
    status?: string
    createdAt?: Date | string
    redeemedAt?: Date | string | null
  }

  export type ReferralRewardCreateOrConnectWithoutReferrerInput = {
    where: ReferralRewardWhereUniqueInput
    create: XOR<ReferralRewardCreateWithoutReferrerInput, ReferralRewardUncheckedCreateWithoutReferrerInput>
  }

  export type ReferralRewardCreateManyReferrerInputEnvelope = {
    data: ReferralRewardCreateManyReferrerInput | ReferralRewardCreateManyReferrerInput[]
    skipDuplicates?: boolean
  }

  export type ReferralRewardCreateWithoutReferredUserInput = {
    amount: number
    status?: string
    createdAt?: Date | string
    redeemedAt?: Date | string | null
    referrer: UserCreateNestedOneWithoutReferralRewardsInput
  }

  export type ReferralRewardUncheckedCreateWithoutReferredUserInput = {
    id?: number
    userId: number
    amount: number
    status?: string
    createdAt?: Date | string
    redeemedAt?: Date | string | null
  }

  export type ReferralRewardCreateOrConnectWithoutReferredUserInput = {
    where: ReferralRewardWhereUniqueInput
    create: XOR<ReferralRewardCreateWithoutReferredUserInput, ReferralRewardUncheckedCreateWithoutReferredUserInput>
  }

  export type ReferralRewardCreateManyReferredUserInputEnvelope = {
    data: ReferralRewardCreateManyReferredUserInput | ReferralRewardCreateManyReferredUserInput[]
    skipDuplicates?: boolean
  }

  export type TicketCreateWithoutUserInput = {
    subject: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageCreateNestedManyWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutUserInput = {
    id?: number
    subject: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutUserInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutUserInput, TicketUncheckedCreateWithoutUserInput>
  }

  export type TicketCreateManyUserInputEnvelope = {
    data: TicketCreateManyUserInput | TicketCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutUserInput = {
    type: string
    message: string
    status?: string
    relatedId?: number | null
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationUncheckedCreateWithoutUserInput = {
    id?: number
    type: string
    message: string
    status?: string
    relatedId?: number | null
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationCreateOrConnectWithoutUserInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationCreateManyUserInputEnvelope = {
    data: NotificationCreateManyUserInput | NotificationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutSenderInput = {
    content: string
    createdAt?: Date | string
    ticket: TicketCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateWithoutSenderInput = {
    id?: number
    ticketId: number
    content: string
    createdAt?: Date | string
  }

  export type MessageCreateOrConnectWithoutSenderInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageCreateManySenderInputEnvelope = {
    data: MessageCreateManySenderInput | MessageCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type PriceAlertCreateWithoutUserInput = {
    asset: string
    alertType: string
    value: number
    condition: string
    active?: boolean
    triggeredAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PriceAlertUncheckedCreateWithoutUserInput = {
    id?: number
    asset: string
    alertType: string
    value: number
    condition: string
    active?: boolean
    triggeredAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PriceAlertCreateOrConnectWithoutUserInput = {
    where: PriceAlertWhereUniqueInput
    create: XOR<PriceAlertCreateWithoutUserInput, PriceAlertUncheckedCreateWithoutUserInput>
  }

  export type PriceAlertCreateManyUserInputEnvelope = {
    data: PriceAlertCreateManyUserInput | PriceAlertCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DepositUpsertWithWhereUniqueWithoutUserInput = {
    where: DepositWhereUniqueInput
    update: XOR<DepositUpdateWithoutUserInput, DepositUncheckedUpdateWithoutUserInput>
    create: XOR<DepositCreateWithoutUserInput, DepositUncheckedCreateWithoutUserInput>
  }

  export type DepositUpdateWithWhereUniqueWithoutUserInput = {
    where: DepositWhereUniqueInput
    data: XOR<DepositUpdateWithoutUserInput, DepositUncheckedUpdateWithoutUserInput>
  }

  export type DepositUpdateManyWithWhereWithoutUserInput = {
    where: DepositScalarWhereInput
    data: XOR<DepositUpdateManyMutationInput, DepositUncheckedUpdateManyWithoutUserInput>
  }

  export type DepositScalarWhereInput = {
    AND?: DepositScalarWhereInput | DepositScalarWhereInput[]
    OR?: DepositScalarWhereInput[]
    NOT?: DepositScalarWhereInput | DepositScalarWhereInput[]
    id?: IntFilter<"Deposit"> | number
    userId?: IntFilter<"Deposit"> | number
    amount?: FloatFilter<"Deposit"> | number
    currency?: StringFilter<"Deposit"> | string
    address?: StringFilter<"Deposit"> | string
    status?: StringFilter<"Deposit"> | string
    createdAt?: DateTimeFilter<"Deposit"> | Date | string
    updatedAt?: DateTimeFilter<"Deposit"> | Date | string
  }

  export type InvestmentUpsertWithWhereUniqueWithoutUserInput = {
    where: InvestmentWhereUniqueInput
    update: XOR<InvestmentUpdateWithoutUserInput, InvestmentUncheckedUpdateWithoutUserInput>
    create: XOR<InvestmentCreateWithoutUserInput, InvestmentUncheckedCreateWithoutUserInput>
  }

  export type InvestmentUpdateWithWhereUniqueWithoutUserInput = {
    where: InvestmentWhereUniqueInput
    data: XOR<InvestmentUpdateWithoutUserInput, InvestmentUncheckedUpdateWithoutUserInput>
  }

  export type InvestmentUpdateManyWithWhereWithoutUserInput = {
    where: InvestmentScalarWhereInput
    data: XOR<InvestmentUpdateManyMutationInput, InvestmentUncheckedUpdateManyWithoutUserInput>
  }

  export type InvestmentScalarWhereInput = {
    AND?: InvestmentScalarWhereInput | InvestmentScalarWhereInput[]
    OR?: InvestmentScalarWhereInput[]
    NOT?: InvestmentScalarWhereInput | InvestmentScalarWhereInput[]
    id?: IntFilter<"Investment"> | number
    userId?: IntFilter<"Investment"> | number
    planName?: StringFilter<"Investment"> | string
    planId?: IntFilter<"Investment"> | number
    roi?: FloatFilter<"Investment"> | number
    duration?: StringFilter<"Investment"> | string
    durationDays?: IntFilter<"Investment"> | number
    amount?: FloatFilter<"Investment"> | number
    startDate?: DateTimeFilter<"Investment"> | Date | string
    endDate?: DateTimeNullableFilter<"Investment"> | Date | string | null
    maturityDate?: DateTimeFilter<"Investment"> | Date | string
    status?: StringFilter<"Investment"> | string
    createdAt?: DateTimeFilter<"Investment"> | Date | string
  }

  export type TransactionUpsertWithWhereUniqueWithoutUserInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutUserInput, TransactionUncheckedUpdateWithoutUserInput>
    create: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutUserInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutUserInput, TransactionUncheckedUpdateWithoutUserInput>
  }

  export type TransactionUpdateManyWithWhereWithoutUserInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutUserInput>
  }

  export type TransactionScalarWhereInput = {
    AND?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    OR?: TransactionScalarWhereInput[]
    NOT?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    id?: IntFilter<"Transaction"> | number
    userId?: IntFilter<"Transaction"> | number
    type?: StringNullableFilter<"Transaction"> | string | null
    amount?: FloatFilter<"Transaction"> | number
    description?: StringNullableFilter<"Transaction"> | string | null
    status?: StringFilter<"Transaction"> | string
    paymentMethod?: StringNullableFilter<"Transaction"> | string | null
    transactionRef?: StringNullableFilter<"Transaction"> | string | null
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
  }

  export type WithdrawalUpsertWithWhereUniqueWithoutUserInput = {
    where: WithdrawalWhereUniqueInput
    update: XOR<WithdrawalUpdateWithoutUserInput, WithdrawalUncheckedUpdateWithoutUserInput>
    create: XOR<WithdrawalCreateWithoutUserInput, WithdrawalUncheckedCreateWithoutUserInput>
  }

  export type WithdrawalUpdateWithWhereUniqueWithoutUserInput = {
    where: WithdrawalWhereUniqueInput
    data: XOR<WithdrawalUpdateWithoutUserInput, WithdrawalUncheckedUpdateWithoutUserInput>
  }

  export type WithdrawalUpdateManyWithWhereWithoutUserInput = {
    where: WithdrawalScalarWhereInput
    data: XOR<WithdrawalUpdateManyMutationInput, WithdrawalUncheckedUpdateManyWithoutUserInput>
  }

  export type WithdrawalScalarWhereInput = {
    AND?: WithdrawalScalarWhereInput | WithdrawalScalarWhereInput[]
    OR?: WithdrawalScalarWhereInput[]
    NOT?: WithdrawalScalarWhereInput | WithdrawalScalarWhereInput[]
    id?: IntFilter<"Withdrawal"> | number
    userId?: IntFilter<"Withdrawal"> | number
    amount?: FloatFilter<"Withdrawal"> | number
    address?: StringNullableFilter<"Withdrawal"> | string | null
    currency?: StringNullableFilter<"Withdrawal"> | string | null
    status?: StringFilter<"Withdrawal"> | string
    createdAt?: DateTimeFilter<"Withdrawal"> | Date | string
  }

  export type ReferralUpsertWithWhereUniqueWithoutUserInput = {
    where: ReferralWhereUniqueInput
    update: XOR<ReferralUpdateWithoutUserInput, ReferralUncheckedUpdateWithoutUserInput>
    create: XOR<ReferralCreateWithoutUserInput, ReferralUncheckedCreateWithoutUserInput>
  }

  export type ReferralUpdateWithWhereUniqueWithoutUserInput = {
    where: ReferralWhereUniqueInput
    data: XOR<ReferralUpdateWithoutUserInput, ReferralUncheckedUpdateWithoutUserInput>
  }

  export type ReferralUpdateManyWithWhereWithoutUserInput = {
    where: ReferralScalarWhereInput
    data: XOR<ReferralUpdateManyMutationInput, ReferralUncheckedUpdateManyWithoutUserInput>
  }

  export type ReferralScalarWhereInput = {
    AND?: ReferralScalarWhereInput | ReferralScalarWhereInput[]
    OR?: ReferralScalarWhereInput[]
    NOT?: ReferralScalarWhereInput | ReferralScalarWhereInput[]
    id?: IntFilter<"Referral"> | number
    userId?: IntFilter<"Referral"> | number
    code?: StringFilter<"Referral"> | string
    createdAt?: DateTimeFilter<"Referral"> | Date | string
  }

  export type UserUpsertWithWhereUniqueWithoutReferrerInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutReferrerInput, UserUncheckedUpdateWithoutReferrerInput>
    create: XOR<UserCreateWithoutReferrerInput, UserUncheckedCreateWithoutReferrerInput>
  }

  export type UserUpdateWithWhereUniqueWithoutReferrerInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutReferrerInput, UserUncheckedUpdateWithoutReferrerInput>
  }

  export type UserUpdateManyWithWhereWithoutReferrerInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutReferrerInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    mainBalance?: FloatFilter<"User"> | number
    investmentBalance?: FloatFilter<"User"> | number
    totalEarn?: FloatFilter<"User"> | number
    totalDeposit?: FloatFilter<"User"> | number
    totalWithdrawals?: FloatFilter<"User"> | number
    roi?: FloatFilter<"User"> | number
    redeemedRoi?: FloatFilter<"User"> | number
    speedInvest?: FloatFilter<"User"> | number
    completed?: FloatFilter<"User"> | number
    interestBalance?: FloatFilter<"User"> | number
    rewardPoints?: FloatFilter<"User"> | number
    totalReferrals?: IntFilter<"User"> | number
    referredById?: IntNullableFilter<"User"> | number | null
    privateKeyHash?: StringNullableFilter<"User"> | string | null
    termsAcceptedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    termsAcceptedIP?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserUpsertWithoutReferredUsersInput = {
    update: XOR<UserUpdateWithoutReferredUsersInput, UserUncheckedUpdateWithoutReferredUsersInput>
    create: XOR<UserCreateWithoutReferredUsersInput, UserUncheckedCreateWithoutReferredUsersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReferredUsersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReferredUsersInput, UserUncheckedUpdateWithoutReferredUsersInput>
  }

  export type UserUpdateWithoutReferredUsersInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    mainBalance?: FloatFieldUpdateOperationsInput | number
    investmentBalance?: FloatFieldUpdateOperationsInput | number
    totalEarn?: FloatFieldUpdateOperationsInput | number
    totalDeposit?: FloatFieldUpdateOperationsInput | number
    totalWithdrawals?: FloatFieldUpdateOperationsInput | number
    roi?: FloatFieldUpdateOperationsInput | number
    redeemedRoi?: FloatFieldUpdateOperationsInput | number
    speedInvest?: FloatFieldUpdateOperationsInput | number
    completed?: FloatFieldUpdateOperationsInput | number
    interestBalance?: FloatFieldUpdateOperationsInput | number
    rewardPoints?: FloatFieldUpdateOperationsInput | number
    totalReferrals?: IntFieldUpdateOperationsInput | number
    privateKeyHash?: NullableStringFieldUpdateOperationsInput | string | null
    termsAcceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    termsAcceptedIP?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deposits?: DepositUpdateManyWithoutUserNestedInput
    investments?: InvestmentUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    withdrawals?: WithdrawalUpdateManyWithoutUserNestedInput
    referrals?: ReferralUpdateManyWithoutUserNestedInput
    referrer?: UserUpdateOneWithoutReferredUsersNestedInput
    rewardLedger?: RewardLedgerUpdateManyWithoutUserNestedInput
    referralRewards?: ReferralRewardUpdateManyWithoutReferrerNestedInput
    referralRewardsReceived?: ReferralRewardUpdateManyWithoutReferredUserNestedInput
    tickets?: TicketUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    priceAlerts?: PriceAlertUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReferredUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    mainBalance?: FloatFieldUpdateOperationsInput | number
    investmentBalance?: FloatFieldUpdateOperationsInput | number
    totalEarn?: FloatFieldUpdateOperationsInput | number
    totalDeposit?: FloatFieldUpdateOperationsInput | number
    totalWithdrawals?: FloatFieldUpdateOperationsInput | number
    roi?: FloatFieldUpdateOperationsInput | number
    redeemedRoi?: FloatFieldUpdateOperationsInput | number
    speedInvest?: FloatFieldUpdateOperationsInput | number
    completed?: FloatFieldUpdateOperationsInput | number
    interestBalance?: FloatFieldUpdateOperationsInput | number
    rewardPoints?: FloatFieldUpdateOperationsInput | number
    totalReferrals?: IntFieldUpdateOperationsInput | number
    referredById?: NullableIntFieldUpdateOperationsInput | number | null
    privateKeyHash?: NullableStringFieldUpdateOperationsInput | string | null
    termsAcceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    termsAcceptedIP?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deposits?: DepositUncheckedUpdateManyWithoutUserNestedInput
    investments?: InvestmentUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    withdrawals?: WithdrawalUncheckedUpdateManyWithoutUserNestedInput
    referrals?: ReferralUncheckedUpdateManyWithoutUserNestedInput
    rewardLedger?: RewardLedgerUncheckedUpdateManyWithoutUserNestedInput
    referralRewards?: ReferralRewardUncheckedUpdateManyWithoutReferrerNestedInput
    referralRewardsReceived?: ReferralRewardUncheckedUpdateManyWithoutReferredUserNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    priceAlerts?: PriceAlertUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RewardLedgerUpsertWithWhereUniqueWithoutUserInput = {
    where: RewardLedgerWhereUniqueInput
    update: XOR<RewardLedgerUpdateWithoutUserInput, RewardLedgerUncheckedUpdateWithoutUserInput>
    create: XOR<RewardLedgerCreateWithoutUserInput, RewardLedgerUncheckedCreateWithoutUserInput>
  }

  export type RewardLedgerUpdateWithWhereUniqueWithoutUserInput = {
    where: RewardLedgerWhereUniqueInput
    data: XOR<RewardLedgerUpdateWithoutUserInput, RewardLedgerUncheckedUpdateWithoutUserInput>
  }

  export type RewardLedgerUpdateManyWithWhereWithoutUserInput = {
    where: RewardLedgerScalarWhereInput
    data: XOR<RewardLedgerUpdateManyMutationInput, RewardLedgerUncheckedUpdateManyWithoutUserInput>
  }

  export type RewardLedgerScalarWhereInput = {
    AND?: RewardLedgerScalarWhereInput | RewardLedgerScalarWhereInput[]
    OR?: RewardLedgerScalarWhereInput[]
    NOT?: RewardLedgerScalarWhereInput | RewardLedgerScalarWhereInput[]
    id?: IntFilter<"RewardLedger"> | number
    userId?: IntFilter<"RewardLedger"> | number
    type?: StringFilter<"RewardLedger"> | string
    points?: FloatFilter<"RewardLedger"> | number
    description?: StringNullableFilter<"RewardLedger"> | string | null
    refId?: IntNullableFilter<"RewardLedger"> | number | null
    createdAt?: DateTimeFilter<"RewardLedger"> | Date | string
  }

  export type ReferralRewardUpsertWithWhereUniqueWithoutReferrerInput = {
    where: ReferralRewardWhereUniqueInput
    update: XOR<ReferralRewardUpdateWithoutReferrerInput, ReferralRewardUncheckedUpdateWithoutReferrerInput>
    create: XOR<ReferralRewardCreateWithoutReferrerInput, ReferralRewardUncheckedCreateWithoutReferrerInput>
  }

  export type ReferralRewardUpdateWithWhereUniqueWithoutReferrerInput = {
    where: ReferralRewardWhereUniqueInput
    data: XOR<ReferralRewardUpdateWithoutReferrerInput, ReferralRewardUncheckedUpdateWithoutReferrerInput>
  }

  export type ReferralRewardUpdateManyWithWhereWithoutReferrerInput = {
    where: ReferralRewardScalarWhereInput
    data: XOR<ReferralRewardUpdateManyMutationInput, ReferralRewardUncheckedUpdateManyWithoutReferrerInput>
  }

  export type ReferralRewardScalarWhereInput = {
    AND?: ReferralRewardScalarWhereInput | ReferralRewardScalarWhereInput[]
    OR?: ReferralRewardScalarWhereInput[]
    NOT?: ReferralRewardScalarWhereInput | ReferralRewardScalarWhereInput[]
    id?: IntFilter<"ReferralReward"> | number
    userId?: IntFilter<"ReferralReward"> | number
    referredUserId?: IntFilter<"ReferralReward"> | number
    amount?: FloatFilter<"ReferralReward"> | number
    status?: StringFilter<"ReferralReward"> | string
    createdAt?: DateTimeFilter<"ReferralReward"> | Date | string
    redeemedAt?: DateTimeNullableFilter<"ReferralReward"> | Date | string | null
  }

  export type ReferralRewardUpsertWithWhereUniqueWithoutReferredUserInput = {
    where: ReferralRewardWhereUniqueInput
    update: XOR<ReferralRewardUpdateWithoutReferredUserInput, ReferralRewardUncheckedUpdateWithoutReferredUserInput>
    create: XOR<ReferralRewardCreateWithoutReferredUserInput, ReferralRewardUncheckedCreateWithoutReferredUserInput>
  }

  export type ReferralRewardUpdateWithWhereUniqueWithoutReferredUserInput = {
    where: ReferralRewardWhereUniqueInput
    data: XOR<ReferralRewardUpdateWithoutReferredUserInput, ReferralRewardUncheckedUpdateWithoutReferredUserInput>
  }

  export type ReferralRewardUpdateManyWithWhereWithoutReferredUserInput = {
    where: ReferralRewardScalarWhereInput
    data: XOR<ReferralRewardUpdateManyMutationInput, ReferralRewardUncheckedUpdateManyWithoutReferredUserInput>
  }

  export type TicketUpsertWithWhereUniqueWithoutUserInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutUserInput, TicketUncheckedUpdateWithoutUserInput>
    create: XOR<TicketCreateWithoutUserInput, TicketUncheckedCreateWithoutUserInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutUserInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutUserInput, TicketUncheckedUpdateWithoutUserInput>
  }

  export type TicketUpdateManyWithWhereWithoutUserInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutUserInput>
  }

  export type TicketScalarWhereInput = {
    AND?: TicketScalarWhereInput | TicketScalarWhereInput[]
    OR?: TicketScalarWhereInput[]
    NOT?: TicketScalarWhereInput | TicketScalarWhereInput[]
    id?: IntFilter<"Ticket"> | number
    subject?: StringFilter<"Ticket"> | string
    status?: StringFilter<"Ticket"> | string
    userId?: IntFilter<"Ticket"> | number
    createdAt?: DateTimeFilter<"Ticket"> | Date | string
    updatedAt?: DateTimeFilter<"Ticket"> | Date | string
  }

  export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
  }

  export type NotificationUpdateManyWithWhereWithoutUserInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: IntFilter<"Notification"> | number
    userId?: IntFilter<"Notification"> | number
    type?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    status?: StringFilter<"Notification"> | string
    relatedId?: IntNullableFilter<"Notification"> | number | null
    isRead?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
  }

  export type MessageUpsertWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
  }

  export type MessageUpdateManyWithWhereWithoutSenderInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutSenderInput>
  }

  export type MessageScalarWhereInput = {
    AND?: MessageScalarWhereInput | MessageScalarWhereInput[]
    OR?: MessageScalarWhereInput[]
    NOT?: MessageScalarWhereInput | MessageScalarWhereInput[]
    id?: IntFilter<"Message"> | number
    ticketId?: IntFilter<"Message"> | number
    senderId?: IntFilter<"Message"> | number
    content?: StringFilter<"Message"> | string
    createdAt?: DateTimeFilter<"Message"> | Date | string
  }

  export type PriceAlertUpsertWithWhereUniqueWithoutUserInput = {
    where: PriceAlertWhereUniqueInput
    update: XOR<PriceAlertUpdateWithoutUserInput, PriceAlertUncheckedUpdateWithoutUserInput>
    create: XOR<PriceAlertCreateWithoutUserInput, PriceAlertUncheckedCreateWithoutUserInput>
  }

  export type PriceAlertUpdateWithWhereUniqueWithoutUserInput = {
    where: PriceAlertWhereUniqueInput
    data: XOR<PriceAlertUpdateWithoutUserInput, PriceAlertUncheckedUpdateWithoutUserInput>
  }

  export type PriceAlertUpdateManyWithWhereWithoutUserInput = {
    where: PriceAlertScalarWhereInput
    data: XOR<PriceAlertUpdateManyMutationInput, PriceAlertUncheckedUpdateManyWithoutUserInput>
  }

  export type PriceAlertScalarWhereInput = {
    AND?: PriceAlertScalarWhereInput | PriceAlertScalarWhereInput[]
    OR?: PriceAlertScalarWhereInput[]
    NOT?: PriceAlertScalarWhereInput | PriceAlertScalarWhereInput[]
    id?: IntFilter<"PriceAlert"> | number
    userId?: IntFilter<"PriceAlert"> | number
    asset?: StringFilter<"PriceAlert"> | string
    alertType?: StringFilter<"PriceAlert"> | string
    value?: FloatFilter<"PriceAlert"> | number
    condition?: StringFilter<"PriceAlert"> | string
    active?: BoolFilter<"PriceAlert"> | boolean
    triggeredAt?: DateTimeNullableFilter<"PriceAlert"> | Date | string | null
    createdAt?: DateTimeFilter<"PriceAlert"> | Date | string
    updatedAt?: DateTimeFilter<"PriceAlert"> | Date | string
  }

  export type UserCreateWithoutDepositsInput = {
    firstName: string
    lastName: string
    username: string
    email: string
    password: string
    phone?: string | null
    mainBalance?: number
    investmentBalance?: number
    totalEarn?: number
    totalDeposit?: number
    totalWithdrawals?: number
    roi?: number
    redeemedRoi?: number
    speedInvest?: number
    completed?: number
    interestBalance?: number
    rewardPoints?: number
    totalReferrals?: number
    privateKeyHash?: string | null
    termsAcceptedAt?: Date | string | null
    termsAcceptedIP?: string | null
    createdAt?: Date | string
    investments?: InvestmentCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    withdrawals?: WithdrawalCreateNestedManyWithoutUserInput
    referrals?: ReferralCreateNestedManyWithoutUserInput
    referredUsers?: UserCreateNestedManyWithoutReferrerInput
    referrer?: UserCreateNestedOneWithoutReferredUsersInput
    rewardLedger?: RewardLedgerCreateNestedManyWithoutUserInput
    referralRewards?: ReferralRewardCreateNestedManyWithoutReferrerInput
    referralRewardsReceived?: ReferralRewardCreateNestedManyWithoutReferredUserInput
    tickets?: TicketCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutSenderInput
    priceAlerts?: PriceAlertCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDepositsInput = {
    id?: number
    firstName: string
    lastName: string
    username: string
    email: string
    password: string
    phone?: string | null
    mainBalance?: number
    investmentBalance?: number
    totalEarn?: number
    totalDeposit?: number
    totalWithdrawals?: number
    roi?: number
    redeemedRoi?: number
    speedInvest?: number
    completed?: number
    interestBalance?: number
    rewardPoints?: number
    totalReferrals?: number
    referredById?: number | null
    privateKeyHash?: string | null
    termsAcceptedAt?: Date | string | null
    termsAcceptedIP?: string | null
    createdAt?: Date | string
    investments?: InvestmentUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    withdrawals?: WithdrawalUncheckedCreateNestedManyWithoutUserInput
    referrals?: ReferralUncheckedCreateNestedManyWithoutUserInput
    referredUsers?: UserUncheckedCreateNestedManyWithoutReferrerInput
    rewardLedger?: RewardLedgerUncheckedCreateNestedManyWithoutUserInput
    referralRewards?: ReferralRewardUncheckedCreateNestedManyWithoutReferrerInput
    referralRewardsReceived?: ReferralRewardUncheckedCreateNestedManyWithoutReferredUserInput
    tickets?: TicketUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    priceAlerts?: PriceAlertUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDepositsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDepositsInput, UserUncheckedCreateWithoutDepositsInput>
  }

  export type UserUpsertWithoutDepositsInput = {
    update: XOR<UserUpdateWithoutDepositsInput, UserUncheckedUpdateWithoutDepositsInput>
    create: XOR<UserCreateWithoutDepositsInput, UserUncheckedCreateWithoutDepositsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDepositsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDepositsInput, UserUncheckedUpdateWithoutDepositsInput>
  }

  export type UserUpdateWithoutDepositsInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    mainBalance?: FloatFieldUpdateOperationsInput | number
    investmentBalance?: FloatFieldUpdateOperationsInput | number
    totalEarn?: FloatFieldUpdateOperationsInput | number
    totalDeposit?: FloatFieldUpdateOperationsInput | number
    totalWithdrawals?: FloatFieldUpdateOperationsInput | number
    roi?: FloatFieldUpdateOperationsInput | number
    redeemedRoi?: FloatFieldUpdateOperationsInput | number
    speedInvest?: FloatFieldUpdateOperationsInput | number
    completed?: FloatFieldUpdateOperationsInput | number
    interestBalance?: FloatFieldUpdateOperationsInput | number
    rewardPoints?: FloatFieldUpdateOperationsInput | number
    totalReferrals?: IntFieldUpdateOperationsInput | number
    privateKeyHash?: NullableStringFieldUpdateOperationsInput | string | null
    termsAcceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    termsAcceptedIP?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    investments?: InvestmentUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    withdrawals?: WithdrawalUpdateManyWithoutUserNestedInput
    referrals?: ReferralUpdateManyWithoutUserNestedInput
    referredUsers?: UserUpdateManyWithoutReferrerNestedInput
    referrer?: UserUpdateOneWithoutReferredUsersNestedInput
    rewardLedger?: RewardLedgerUpdateManyWithoutUserNestedInput
    referralRewards?: ReferralRewardUpdateManyWithoutReferrerNestedInput
    referralRewardsReceived?: ReferralRewardUpdateManyWithoutReferredUserNestedInput
    tickets?: TicketUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    priceAlerts?: PriceAlertUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDepositsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    mainBalance?: FloatFieldUpdateOperationsInput | number
    investmentBalance?: FloatFieldUpdateOperationsInput | number
    totalEarn?: FloatFieldUpdateOperationsInput | number
    totalDeposit?: FloatFieldUpdateOperationsInput | number
    totalWithdrawals?: FloatFieldUpdateOperationsInput | number
    roi?: FloatFieldUpdateOperationsInput | number
    redeemedRoi?: FloatFieldUpdateOperationsInput | number
    speedInvest?: FloatFieldUpdateOperationsInput | number
    completed?: FloatFieldUpdateOperationsInput | number
    interestBalance?: FloatFieldUpdateOperationsInput | number
    rewardPoints?: FloatFieldUpdateOperationsInput | number
    totalReferrals?: IntFieldUpdateOperationsInput | number
    referredById?: NullableIntFieldUpdateOperationsInput | number | null
    privateKeyHash?: NullableStringFieldUpdateOperationsInput | string | null
    termsAcceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    termsAcceptedIP?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    investments?: InvestmentUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    withdrawals?: WithdrawalUncheckedUpdateManyWithoutUserNestedInput
    referrals?: ReferralUncheckedUpdateManyWithoutUserNestedInput
    referredUsers?: UserUncheckedUpdateManyWithoutReferrerNestedInput
    rewardLedger?: RewardLedgerUncheckedUpdateManyWithoutUserNestedInput
    referralRewards?: ReferralRewardUncheckedUpdateManyWithoutReferrerNestedInput
    referralRewardsReceived?: ReferralRewardUncheckedUpdateManyWithoutReferredUserNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    priceAlerts?: PriceAlertUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutInvestmentsInput = {
    firstName: string
    lastName: string
    username: string
    email: string
    password: string
    phone?: string | null
    mainBalance?: number
    investmentBalance?: number
    totalEarn?: number
    totalDeposit?: number
    totalWithdrawals?: number
    roi?: number
    redeemedRoi?: number
    speedInvest?: number
    completed?: number
    interestBalance?: number
    rewardPoints?: number
    totalReferrals?: number
    privateKeyHash?: string | null
    termsAcceptedAt?: Date | string | null
    termsAcceptedIP?: string | null
    createdAt?: Date | string
    deposits?: DepositCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    withdrawals?: WithdrawalCreateNestedManyWithoutUserInput
    referrals?: ReferralCreateNestedManyWithoutUserInput
    referredUsers?: UserCreateNestedManyWithoutReferrerInput
    referrer?: UserCreateNestedOneWithoutReferredUsersInput
    rewardLedger?: RewardLedgerCreateNestedManyWithoutUserInput
    referralRewards?: ReferralRewardCreateNestedManyWithoutReferrerInput
    referralRewardsReceived?: ReferralRewardCreateNestedManyWithoutReferredUserInput
    tickets?: TicketCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutSenderInput
    priceAlerts?: PriceAlertCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutInvestmentsInput = {
    id?: number
    firstName: string
    lastName: string
    username: string
    email: string
    password: string
    phone?: string | null
    mainBalance?: number
    investmentBalance?: number
    totalEarn?: number
    totalDeposit?: number
    totalWithdrawals?: number
    roi?: number
    redeemedRoi?: number
    speedInvest?: number
    completed?: number
    interestBalance?: number
    rewardPoints?: number
    totalReferrals?: number
    referredById?: number | null
    privateKeyHash?: string | null
    termsAcceptedAt?: Date | string | null
    termsAcceptedIP?: string | null
    createdAt?: Date | string
    deposits?: DepositUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    withdrawals?: WithdrawalUncheckedCreateNestedManyWithoutUserInput
    referrals?: ReferralUncheckedCreateNestedManyWithoutUserInput
    referredUsers?: UserUncheckedCreateNestedManyWithoutReferrerInput
    rewardLedger?: RewardLedgerUncheckedCreateNestedManyWithoutUserInput
    referralRewards?: ReferralRewardUncheckedCreateNestedManyWithoutReferrerInput
    referralRewardsReceived?: ReferralRewardUncheckedCreateNestedManyWithoutReferredUserInput
    tickets?: TicketUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    priceAlerts?: PriceAlertUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutInvestmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInvestmentsInput, UserUncheckedCreateWithoutInvestmentsInput>
  }

  export type UserUpsertWithoutInvestmentsInput = {
    update: XOR<UserUpdateWithoutInvestmentsInput, UserUncheckedUpdateWithoutInvestmentsInput>
    create: XOR<UserCreateWithoutInvestmentsInput, UserUncheckedCreateWithoutInvestmentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInvestmentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInvestmentsInput, UserUncheckedUpdateWithoutInvestmentsInput>
  }

  export type UserUpdateWithoutInvestmentsInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    mainBalance?: FloatFieldUpdateOperationsInput | number
    investmentBalance?: FloatFieldUpdateOperationsInput | number
    totalEarn?: FloatFieldUpdateOperationsInput | number
    totalDeposit?: FloatFieldUpdateOperationsInput | number
    totalWithdrawals?: FloatFieldUpdateOperationsInput | number
    roi?: FloatFieldUpdateOperationsInput | number
    redeemedRoi?: FloatFieldUpdateOperationsInput | number
    speedInvest?: FloatFieldUpdateOperationsInput | number
    completed?: FloatFieldUpdateOperationsInput | number
    interestBalance?: FloatFieldUpdateOperationsInput | number
    rewardPoints?: FloatFieldUpdateOperationsInput | number
    totalReferrals?: IntFieldUpdateOperationsInput | number
    privateKeyHash?: NullableStringFieldUpdateOperationsInput | string | null
    termsAcceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    termsAcceptedIP?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deposits?: DepositUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    withdrawals?: WithdrawalUpdateManyWithoutUserNestedInput
    referrals?: ReferralUpdateManyWithoutUserNestedInput
    referredUsers?: UserUpdateManyWithoutReferrerNestedInput
    referrer?: UserUpdateOneWithoutReferredUsersNestedInput
    rewardLedger?: RewardLedgerUpdateManyWithoutUserNestedInput
    referralRewards?: ReferralRewardUpdateManyWithoutReferrerNestedInput
    referralRewardsReceived?: ReferralRewardUpdateManyWithoutReferredUserNestedInput
    tickets?: TicketUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    priceAlerts?: PriceAlertUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutInvestmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    mainBalance?: FloatFieldUpdateOperationsInput | number
    investmentBalance?: FloatFieldUpdateOperationsInput | number
    totalEarn?: FloatFieldUpdateOperationsInput | number
    totalDeposit?: FloatFieldUpdateOperationsInput | number
    totalWithdrawals?: FloatFieldUpdateOperationsInput | number
    roi?: FloatFieldUpdateOperationsInput | number
    redeemedRoi?: FloatFieldUpdateOperationsInput | number
    speedInvest?: FloatFieldUpdateOperationsInput | number
    completed?: FloatFieldUpdateOperationsInput | number
    interestBalance?: FloatFieldUpdateOperationsInput | number
    rewardPoints?: FloatFieldUpdateOperationsInput | number
    totalReferrals?: IntFieldUpdateOperationsInput | number
    referredById?: NullableIntFieldUpdateOperationsInput | number | null
    privateKeyHash?: NullableStringFieldUpdateOperationsInput | string | null
    termsAcceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    termsAcceptedIP?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deposits?: DepositUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    withdrawals?: WithdrawalUncheckedUpdateManyWithoutUserNestedInput
    referrals?: ReferralUncheckedUpdateManyWithoutUserNestedInput
    referredUsers?: UserUncheckedUpdateManyWithoutReferrerNestedInput
    rewardLedger?: RewardLedgerUncheckedUpdateManyWithoutUserNestedInput
    referralRewards?: ReferralRewardUncheckedUpdateManyWithoutReferrerNestedInput
    referralRewardsReceived?: ReferralRewardUncheckedUpdateManyWithoutReferredUserNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    priceAlerts?: PriceAlertUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutTransactionsInput = {
    firstName: string
    lastName: string
    username: string
    email: string
    password: string
    phone?: string | null
    mainBalance?: number
    investmentBalance?: number
    totalEarn?: number
    totalDeposit?: number
    totalWithdrawals?: number
    roi?: number
    redeemedRoi?: number
    speedInvest?: number
    completed?: number
    interestBalance?: number
    rewardPoints?: number
    totalReferrals?: number
    privateKeyHash?: string | null
    termsAcceptedAt?: Date | string | null
    termsAcceptedIP?: string | null
    createdAt?: Date | string
    deposits?: DepositCreateNestedManyWithoutUserInput
    investments?: InvestmentCreateNestedManyWithoutUserInput
    withdrawals?: WithdrawalCreateNestedManyWithoutUserInput
    referrals?: ReferralCreateNestedManyWithoutUserInput
    referredUsers?: UserCreateNestedManyWithoutReferrerInput
    referrer?: UserCreateNestedOneWithoutReferredUsersInput
    rewardLedger?: RewardLedgerCreateNestedManyWithoutUserInput
    referralRewards?: ReferralRewardCreateNestedManyWithoutReferrerInput
    referralRewardsReceived?: ReferralRewardCreateNestedManyWithoutReferredUserInput
    tickets?: TicketCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutSenderInput
    priceAlerts?: PriceAlertCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTransactionsInput = {
    id?: number
    firstName: string
    lastName: string
    username: string
    email: string
    password: string
    phone?: string | null
    mainBalance?: number
    investmentBalance?: number
    totalEarn?: number
    totalDeposit?: number
    totalWithdrawals?: number
    roi?: number
    redeemedRoi?: number
    speedInvest?: number
    completed?: number
    interestBalance?: number
    rewardPoints?: number
    totalReferrals?: number
    referredById?: number | null
    privateKeyHash?: string | null
    termsAcceptedAt?: Date | string | null
    termsAcceptedIP?: string | null
    createdAt?: Date | string
    deposits?: DepositUncheckedCreateNestedManyWithoutUserInput
    investments?: InvestmentUncheckedCreateNestedManyWithoutUserInput
    withdrawals?: WithdrawalUncheckedCreateNestedManyWithoutUserInput
    referrals?: ReferralUncheckedCreateNestedManyWithoutUserInput
    referredUsers?: UserUncheckedCreateNestedManyWithoutReferrerInput
    rewardLedger?: RewardLedgerUncheckedCreateNestedManyWithoutUserInput
    referralRewards?: ReferralRewardUncheckedCreateNestedManyWithoutReferrerInput
    referralRewardsReceived?: ReferralRewardUncheckedCreateNestedManyWithoutReferredUserInput
    tickets?: TicketUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    priceAlerts?: PriceAlertUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTransactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
  }

  export type UserUpsertWithoutTransactionsInput = {
    update: XOR<UserUpdateWithoutTransactionsInput, UserUncheckedUpdateWithoutTransactionsInput>
    create: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTransactionsInput, UserUncheckedUpdateWithoutTransactionsInput>
  }

  export type UserUpdateWithoutTransactionsInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    mainBalance?: FloatFieldUpdateOperationsInput | number
    investmentBalance?: FloatFieldUpdateOperationsInput | number
    totalEarn?: FloatFieldUpdateOperationsInput | number
    totalDeposit?: FloatFieldUpdateOperationsInput | number
    totalWithdrawals?: FloatFieldUpdateOperationsInput | number
    roi?: FloatFieldUpdateOperationsInput | number
    redeemedRoi?: FloatFieldUpdateOperationsInput | number
    speedInvest?: FloatFieldUpdateOperationsInput | number
    completed?: FloatFieldUpdateOperationsInput | number
    interestBalance?: FloatFieldUpdateOperationsInput | number
    rewardPoints?: FloatFieldUpdateOperationsInput | number
    totalReferrals?: IntFieldUpdateOperationsInput | number
    privateKeyHash?: NullableStringFieldUpdateOperationsInput | string | null
    termsAcceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    termsAcceptedIP?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deposits?: DepositUpdateManyWithoutUserNestedInput
    investments?: InvestmentUpdateManyWithoutUserNestedInput
    withdrawals?: WithdrawalUpdateManyWithoutUserNestedInput
    referrals?: ReferralUpdateManyWithoutUserNestedInput
    referredUsers?: UserUpdateManyWithoutReferrerNestedInput
    referrer?: UserUpdateOneWithoutReferredUsersNestedInput
    rewardLedger?: RewardLedgerUpdateManyWithoutUserNestedInput
    referralRewards?: ReferralRewardUpdateManyWithoutReferrerNestedInput
    referralRewardsReceived?: ReferralRewardUpdateManyWithoutReferredUserNestedInput
    tickets?: TicketUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    priceAlerts?: PriceAlertUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    mainBalance?: FloatFieldUpdateOperationsInput | number
    investmentBalance?: FloatFieldUpdateOperationsInput | number
    totalEarn?: FloatFieldUpdateOperationsInput | number
    totalDeposit?: FloatFieldUpdateOperationsInput | number
    totalWithdrawals?: FloatFieldUpdateOperationsInput | number
    roi?: FloatFieldUpdateOperationsInput | number
    redeemedRoi?: FloatFieldUpdateOperationsInput | number
    speedInvest?: FloatFieldUpdateOperationsInput | number
    completed?: FloatFieldUpdateOperationsInput | number
    interestBalance?: FloatFieldUpdateOperationsInput | number
    rewardPoints?: FloatFieldUpdateOperationsInput | number
    totalReferrals?: IntFieldUpdateOperationsInput | number
    referredById?: NullableIntFieldUpdateOperationsInput | number | null
    privateKeyHash?: NullableStringFieldUpdateOperationsInput | string | null
    termsAcceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    termsAcceptedIP?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deposits?: DepositUncheckedUpdateManyWithoutUserNestedInput
    investments?: InvestmentUncheckedUpdateManyWithoutUserNestedInput
    withdrawals?: WithdrawalUncheckedUpdateManyWithoutUserNestedInput
    referrals?: ReferralUncheckedUpdateManyWithoutUserNestedInput
    referredUsers?: UserUncheckedUpdateManyWithoutReferrerNestedInput
    rewardLedger?: RewardLedgerUncheckedUpdateManyWithoutUserNestedInput
    referralRewards?: ReferralRewardUncheckedUpdateManyWithoutReferrerNestedInput
    referralRewardsReceived?: ReferralRewardUncheckedUpdateManyWithoutReferredUserNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    priceAlerts?: PriceAlertUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutWithdrawalsInput = {
    firstName: string
    lastName: string
    username: string
    email: string
    password: string
    phone?: string | null
    mainBalance?: number
    investmentBalance?: number
    totalEarn?: number
    totalDeposit?: number
    totalWithdrawals?: number
    roi?: number
    redeemedRoi?: number
    speedInvest?: number
    completed?: number
    interestBalance?: number
    rewardPoints?: number
    totalReferrals?: number
    privateKeyHash?: string | null
    termsAcceptedAt?: Date | string | null
    termsAcceptedIP?: string | null
    createdAt?: Date | string
    deposits?: DepositCreateNestedManyWithoutUserInput
    investments?: InvestmentCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    referrals?: ReferralCreateNestedManyWithoutUserInput
    referredUsers?: UserCreateNestedManyWithoutReferrerInput
    referrer?: UserCreateNestedOneWithoutReferredUsersInput
    rewardLedger?: RewardLedgerCreateNestedManyWithoutUserInput
    referralRewards?: ReferralRewardCreateNestedManyWithoutReferrerInput
    referralRewardsReceived?: ReferralRewardCreateNestedManyWithoutReferredUserInput
    tickets?: TicketCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutSenderInput
    priceAlerts?: PriceAlertCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWithdrawalsInput = {
    id?: number
    firstName: string
    lastName: string
    username: string
    email: string
    password: string
    phone?: string | null
    mainBalance?: number
    investmentBalance?: number
    totalEarn?: number
    totalDeposit?: number
    totalWithdrawals?: number
    roi?: number
    redeemedRoi?: number
    speedInvest?: number
    completed?: number
    interestBalance?: number
    rewardPoints?: number
    totalReferrals?: number
    referredById?: number | null
    privateKeyHash?: string | null
    termsAcceptedAt?: Date | string | null
    termsAcceptedIP?: string | null
    createdAt?: Date | string
    deposits?: DepositUncheckedCreateNestedManyWithoutUserInput
    investments?: InvestmentUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    referrals?: ReferralUncheckedCreateNestedManyWithoutUserInput
    referredUsers?: UserUncheckedCreateNestedManyWithoutReferrerInput
    rewardLedger?: RewardLedgerUncheckedCreateNestedManyWithoutUserInput
    referralRewards?: ReferralRewardUncheckedCreateNestedManyWithoutReferrerInput
    referralRewardsReceived?: ReferralRewardUncheckedCreateNestedManyWithoutReferredUserInput
    tickets?: TicketUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    priceAlerts?: PriceAlertUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWithdrawalsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWithdrawalsInput, UserUncheckedCreateWithoutWithdrawalsInput>
  }

  export type UserUpsertWithoutWithdrawalsInput = {
    update: XOR<UserUpdateWithoutWithdrawalsInput, UserUncheckedUpdateWithoutWithdrawalsInput>
    create: XOR<UserCreateWithoutWithdrawalsInput, UserUncheckedCreateWithoutWithdrawalsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWithdrawalsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWithdrawalsInput, UserUncheckedUpdateWithoutWithdrawalsInput>
  }

  export type UserUpdateWithoutWithdrawalsInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    mainBalance?: FloatFieldUpdateOperationsInput | number
    investmentBalance?: FloatFieldUpdateOperationsInput | number
    totalEarn?: FloatFieldUpdateOperationsInput | number
    totalDeposit?: FloatFieldUpdateOperationsInput | number
    totalWithdrawals?: FloatFieldUpdateOperationsInput | number
    roi?: FloatFieldUpdateOperationsInput | number
    redeemedRoi?: FloatFieldUpdateOperationsInput | number
    speedInvest?: FloatFieldUpdateOperationsInput | number
    completed?: FloatFieldUpdateOperationsInput | number
    interestBalance?: FloatFieldUpdateOperationsInput | number
    rewardPoints?: FloatFieldUpdateOperationsInput | number
    totalReferrals?: IntFieldUpdateOperationsInput | number
    privateKeyHash?: NullableStringFieldUpdateOperationsInput | string | null
    termsAcceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    termsAcceptedIP?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deposits?: DepositUpdateManyWithoutUserNestedInput
    investments?: InvestmentUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    referrals?: ReferralUpdateManyWithoutUserNestedInput
    referredUsers?: UserUpdateManyWithoutReferrerNestedInput
    referrer?: UserUpdateOneWithoutReferredUsersNestedInput
    rewardLedger?: RewardLedgerUpdateManyWithoutUserNestedInput
    referralRewards?: ReferralRewardUpdateManyWithoutReferrerNestedInput
    referralRewardsReceived?: ReferralRewardUpdateManyWithoutReferredUserNestedInput
    tickets?: TicketUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    priceAlerts?: PriceAlertUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWithdrawalsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    mainBalance?: FloatFieldUpdateOperationsInput | number
    investmentBalance?: FloatFieldUpdateOperationsInput | number
    totalEarn?: FloatFieldUpdateOperationsInput | number
    totalDeposit?: FloatFieldUpdateOperationsInput | number
    totalWithdrawals?: FloatFieldUpdateOperationsInput | number
    roi?: FloatFieldUpdateOperationsInput | number
    redeemedRoi?: FloatFieldUpdateOperationsInput | number
    speedInvest?: FloatFieldUpdateOperationsInput | number
    completed?: FloatFieldUpdateOperationsInput | number
    interestBalance?: FloatFieldUpdateOperationsInput | number
    rewardPoints?: FloatFieldUpdateOperationsInput | number
    totalReferrals?: IntFieldUpdateOperationsInput | number
    referredById?: NullableIntFieldUpdateOperationsInput | number | null
    privateKeyHash?: NullableStringFieldUpdateOperationsInput | string | null
    termsAcceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    termsAcceptedIP?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deposits?: DepositUncheckedUpdateManyWithoutUserNestedInput
    investments?: InvestmentUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    referrals?: ReferralUncheckedUpdateManyWithoutUserNestedInput
    referredUsers?: UserUncheckedUpdateManyWithoutReferrerNestedInput
    rewardLedger?: RewardLedgerUncheckedUpdateManyWithoutUserNestedInput
    referralRewards?: ReferralRewardUncheckedUpdateManyWithoutReferrerNestedInput
    referralRewardsReceived?: ReferralRewardUncheckedUpdateManyWithoutReferredUserNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    priceAlerts?: PriceAlertUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutReferralsInput = {
    firstName: string
    lastName: string
    username: string
    email: string
    password: string
    phone?: string | null
    mainBalance?: number
    investmentBalance?: number
    totalEarn?: number
    totalDeposit?: number
    totalWithdrawals?: number
    roi?: number
    redeemedRoi?: number
    speedInvest?: number
    completed?: number
    interestBalance?: number
    rewardPoints?: number
    totalReferrals?: number
    privateKeyHash?: string | null
    termsAcceptedAt?: Date | string | null
    termsAcceptedIP?: string | null
    createdAt?: Date | string
    deposits?: DepositCreateNestedManyWithoutUserInput
    investments?: InvestmentCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    withdrawals?: WithdrawalCreateNestedManyWithoutUserInput
    referredUsers?: UserCreateNestedManyWithoutReferrerInput
    referrer?: UserCreateNestedOneWithoutReferredUsersInput
    rewardLedger?: RewardLedgerCreateNestedManyWithoutUserInput
    referralRewards?: ReferralRewardCreateNestedManyWithoutReferrerInput
    referralRewardsReceived?: ReferralRewardCreateNestedManyWithoutReferredUserInput
    tickets?: TicketCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutSenderInput
    priceAlerts?: PriceAlertCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReferralsInput = {
    id?: number
    firstName: string
    lastName: string
    username: string
    email: string
    password: string
    phone?: string | null
    mainBalance?: number
    investmentBalance?: number
    totalEarn?: number
    totalDeposit?: number
    totalWithdrawals?: number
    roi?: number
    redeemedRoi?: number
    speedInvest?: number
    completed?: number
    interestBalance?: number
    rewardPoints?: number
    totalReferrals?: number
    referredById?: number | null
    privateKeyHash?: string | null
    termsAcceptedAt?: Date | string | null
    termsAcceptedIP?: string | null
    createdAt?: Date | string
    deposits?: DepositUncheckedCreateNestedManyWithoutUserInput
    investments?: InvestmentUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    withdrawals?: WithdrawalUncheckedCreateNestedManyWithoutUserInput
    referredUsers?: UserUncheckedCreateNestedManyWithoutReferrerInput
    rewardLedger?: RewardLedgerUncheckedCreateNestedManyWithoutUserInput
    referralRewards?: ReferralRewardUncheckedCreateNestedManyWithoutReferrerInput
    referralRewardsReceived?: ReferralRewardUncheckedCreateNestedManyWithoutReferredUserInput
    tickets?: TicketUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    priceAlerts?: PriceAlertUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReferralsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReferralsInput, UserUncheckedCreateWithoutReferralsInput>
  }

  export type UserUpsertWithoutReferralsInput = {
    update: XOR<UserUpdateWithoutReferralsInput, UserUncheckedUpdateWithoutReferralsInput>
    create: XOR<UserCreateWithoutReferralsInput, UserUncheckedCreateWithoutReferralsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReferralsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReferralsInput, UserUncheckedUpdateWithoutReferralsInput>
  }

  export type UserUpdateWithoutReferralsInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    mainBalance?: FloatFieldUpdateOperationsInput | number
    investmentBalance?: FloatFieldUpdateOperationsInput | number
    totalEarn?: FloatFieldUpdateOperationsInput | number
    totalDeposit?: FloatFieldUpdateOperationsInput | number
    totalWithdrawals?: FloatFieldUpdateOperationsInput | number
    roi?: FloatFieldUpdateOperationsInput | number
    redeemedRoi?: FloatFieldUpdateOperationsInput | number
    speedInvest?: FloatFieldUpdateOperationsInput | number
    completed?: FloatFieldUpdateOperationsInput | number
    interestBalance?: FloatFieldUpdateOperationsInput | number
    rewardPoints?: FloatFieldUpdateOperationsInput | number
    totalReferrals?: IntFieldUpdateOperationsInput | number
    privateKeyHash?: NullableStringFieldUpdateOperationsInput | string | null
    termsAcceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    termsAcceptedIP?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deposits?: DepositUpdateManyWithoutUserNestedInput
    investments?: InvestmentUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    withdrawals?: WithdrawalUpdateManyWithoutUserNestedInput
    referredUsers?: UserUpdateManyWithoutReferrerNestedInput
    referrer?: UserUpdateOneWithoutReferredUsersNestedInput
    rewardLedger?: RewardLedgerUpdateManyWithoutUserNestedInput
    referralRewards?: ReferralRewardUpdateManyWithoutReferrerNestedInput
    referralRewardsReceived?: ReferralRewardUpdateManyWithoutReferredUserNestedInput
    tickets?: TicketUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    priceAlerts?: PriceAlertUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReferralsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    mainBalance?: FloatFieldUpdateOperationsInput | number
    investmentBalance?: FloatFieldUpdateOperationsInput | number
    totalEarn?: FloatFieldUpdateOperationsInput | number
    totalDeposit?: FloatFieldUpdateOperationsInput | number
    totalWithdrawals?: FloatFieldUpdateOperationsInput | number
    roi?: FloatFieldUpdateOperationsInput | number
    redeemedRoi?: FloatFieldUpdateOperationsInput | number
    speedInvest?: FloatFieldUpdateOperationsInput | number
    completed?: FloatFieldUpdateOperationsInput | number
    interestBalance?: FloatFieldUpdateOperationsInput | number
    rewardPoints?: FloatFieldUpdateOperationsInput | number
    totalReferrals?: IntFieldUpdateOperationsInput | number
    referredById?: NullableIntFieldUpdateOperationsInput | number | null
    privateKeyHash?: NullableStringFieldUpdateOperationsInput | string | null
    termsAcceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    termsAcceptedIP?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deposits?: DepositUncheckedUpdateManyWithoutUserNestedInput
    investments?: InvestmentUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    withdrawals?: WithdrawalUncheckedUpdateManyWithoutUserNestedInput
    referredUsers?: UserUncheckedUpdateManyWithoutReferrerNestedInput
    rewardLedger?: RewardLedgerUncheckedUpdateManyWithoutUserNestedInput
    referralRewards?: ReferralRewardUncheckedUpdateManyWithoutReferrerNestedInput
    referralRewardsReceived?: ReferralRewardUncheckedUpdateManyWithoutReferredUserNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    priceAlerts?: PriceAlertUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutRewardLedgerInput = {
    firstName: string
    lastName: string
    username: string
    email: string
    password: string
    phone?: string | null
    mainBalance?: number
    investmentBalance?: number
    totalEarn?: number
    totalDeposit?: number
    totalWithdrawals?: number
    roi?: number
    redeemedRoi?: number
    speedInvest?: number
    completed?: number
    interestBalance?: number
    rewardPoints?: number
    totalReferrals?: number
    privateKeyHash?: string | null
    termsAcceptedAt?: Date | string | null
    termsAcceptedIP?: string | null
    createdAt?: Date | string
    deposits?: DepositCreateNestedManyWithoutUserInput
    investments?: InvestmentCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    withdrawals?: WithdrawalCreateNestedManyWithoutUserInput
    referrals?: ReferralCreateNestedManyWithoutUserInput
    referredUsers?: UserCreateNestedManyWithoutReferrerInput
    referrer?: UserCreateNestedOneWithoutReferredUsersInput
    referralRewards?: ReferralRewardCreateNestedManyWithoutReferrerInput
    referralRewardsReceived?: ReferralRewardCreateNestedManyWithoutReferredUserInput
    tickets?: TicketCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutSenderInput
    priceAlerts?: PriceAlertCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRewardLedgerInput = {
    id?: number
    firstName: string
    lastName: string
    username: string
    email: string
    password: string
    phone?: string | null
    mainBalance?: number
    investmentBalance?: number
    totalEarn?: number
    totalDeposit?: number
    totalWithdrawals?: number
    roi?: number
    redeemedRoi?: number
    speedInvest?: number
    completed?: number
    interestBalance?: number
    rewardPoints?: number
    totalReferrals?: number
    referredById?: number | null
    privateKeyHash?: string | null
    termsAcceptedAt?: Date | string | null
    termsAcceptedIP?: string | null
    createdAt?: Date | string
    deposits?: DepositUncheckedCreateNestedManyWithoutUserInput
    investments?: InvestmentUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    withdrawals?: WithdrawalUncheckedCreateNestedManyWithoutUserInput
    referrals?: ReferralUncheckedCreateNestedManyWithoutUserInput
    referredUsers?: UserUncheckedCreateNestedManyWithoutReferrerInput
    referralRewards?: ReferralRewardUncheckedCreateNestedManyWithoutReferrerInput
    referralRewardsReceived?: ReferralRewardUncheckedCreateNestedManyWithoutReferredUserInput
    tickets?: TicketUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    priceAlerts?: PriceAlertUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRewardLedgerInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRewardLedgerInput, UserUncheckedCreateWithoutRewardLedgerInput>
  }

  export type UserUpsertWithoutRewardLedgerInput = {
    update: XOR<UserUpdateWithoutRewardLedgerInput, UserUncheckedUpdateWithoutRewardLedgerInput>
    create: XOR<UserCreateWithoutRewardLedgerInput, UserUncheckedCreateWithoutRewardLedgerInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRewardLedgerInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRewardLedgerInput, UserUncheckedUpdateWithoutRewardLedgerInput>
  }

  export type UserUpdateWithoutRewardLedgerInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    mainBalance?: FloatFieldUpdateOperationsInput | number
    investmentBalance?: FloatFieldUpdateOperationsInput | number
    totalEarn?: FloatFieldUpdateOperationsInput | number
    totalDeposit?: FloatFieldUpdateOperationsInput | number
    totalWithdrawals?: FloatFieldUpdateOperationsInput | number
    roi?: FloatFieldUpdateOperationsInput | number
    redeemedRoi?: FloatFieldUpdateOperationsInput | number
    speedInvest?: FloatFieldUpdateOperationsInput | number
    completed?: FloatFieldUpdateOperationsInput | number
    interestBalance?: FloatFieldUpdateOperationsInput | number
    rewardPoints?: FloatFieldUpdateOperationsInput | number
    totalReferrals?: IntFieldUpdateOperationsInput | number
    privateKeyHash?: NullableStringFieldUpdateOperationsInput | string | null
    termsAcceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    termsAcceptedIP?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deposits?: DepositUpdateManyWithoutUserNestedInput
    investments?: InvestmentUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    withdrawals?: WithdrawalUpdateManyWithoutUserNestedInput
    referrals?: ReferralUpdateManyWithoutUserNestedInput
    referredUsers?: UserUpdateManyWithoutReferrerNestedInput
    referrer?: UserUpdateOneWithoutReferredUsersNestedInput
    referralRewards?: ReferralRewardUpdateManyWithoutReferrerNestedInput
    referralRewardsReceived?: ReferralRewardUpdateManyWithoutReferredUserNestedInput
    tickets?: TicketUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    priceAlerts?: PriceAlertUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRewardLedgerInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    mainBalance?: FloatFieldUpdateOperationsInput | number
    investmentBalance?: FloatFieldUpdateOperationsInput | number
    totalEarn?: FloatFieldUpdateOperationsInput | number
    totalDeposit?: FloatFieldUpdateOperationsInput | number
    totalWithdrawals?: FloatFieldUpdateOperationsInput | number
    roi?: FloatFieldUpdateOperationsInput | number
    redeemedRoi?: FloatFieldUpdateOperationsInput | number
    speedInvest?: FloatFieldUpdateOperationsInput | number
    completed?: FloatFieldUpdateOperationsInput | number
    interestBalance?: FloatFieldUpdateOperationsInput | number
    rewardPoints?: FloatFieldUpdateOperationsInput | number
    totalReferrals?: IntFieldUpdateOperationsInput | number
    referredById?: NullableIntFieldUpdateOperationsInput | number | null
    privateKeyHash?: NullableStringFieldUpdateOperationsInput | string | null
    termsAcceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    termsAcceptedIP?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deposits?: DepositUncheckedUpdateManyWithoutUserNestedInput
    investments?: InvestmentUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    withdrawals?: WithdrawalUncheckedUpdateManyWithoutUserNestedInput
    referrals?: ReferralUncheckedUpdateManyWithoutUserNestedInput
    referredUsers?: UserUncheckedUpdateManyWithoutReferrerNestedInput
    referralRewards?: ReferralRewardUncheckedUpdateManyWithoutReferrerNestedInput
    referralRewardsReceived?: ReferralRewardUncheckedUpdateManyWithoutReferredUserNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    priceAlerts?: PriceAlertUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutTicketsInput = {
    firstName: string
    lastName: string
    username: string
    email: string
    password: string
    phone?: string | null
    mainBalance?: number
    investmentBalance?: number
    totalEarn?: number
    totalDeposit?: number
    totalWithdrawals?: number
    roi?: number
    redeemedRoi?: number
    speedInvest?: number
    completed?: number
    interestBalance?: number
    rewardPoints?: number
    totalReferrals?: number
    privateKeyHash?: string | null
    termsAcceptedAt?: Date | string | null
    termsAcceptedIP?: string | null
    createdAt?: Date | string
    deposits?: DepositCreateNestedManyWithoutUserInput
    investments?: InvestmentCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    withdrawals?: WithdrawalCreateNestedManyWithoutUserInput
    referrals?: ReferralCreateNestedManyWithoutUserInput
    referredUsers?: UserCreateNestedManyWithoutReferrerInput
    referrer?: UserCreateNestedOneWithoutReferredUsersInput
    rewardLedger?: RewardLedgerCreateNestedManyWithoutUserInput
    referralRewards?: ReferralRewardCreateNestedManyWithoutReferrerInput
    referralRewardsReceived?: ReferralRewardCreateNestedManyWithoutReferredUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutSenderInput
    priceAlerts?: PriceAlertCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTicketsInput = {
    id?: number
    firstName: string
    lastName: string
    username: string
    email: string
    password: string
    phone?: string | null
    mainBalance?: number
    investmentBalance?: number
    totalEarn?: number
    totalDeposit?: number
    totalWithdrawals?: number
    roi?: number
    redeemedRoi?: number
    speedInvest?: number
    completed?: number
    interestBalance?: number
    rewardPoints?: number
    totalReferrals?: number
    referredById?: number | null
    privateKeyHash?: string | null
    termsAcceptedAt?: Date | string | null
    termsAcceptedIP?: string | null
    createdAt?: Date | string
    deposits?: DepositUncheckedCreateNestedManyWithoutUserInput
    investments?: InvestmentUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    withdrawals?: WithdrawalUncheckedCreateNestedManyWithoutUserInput
    referrals?: ReferralUncheckedCreateNestedManyWithoutUserInput
    referredUsers?: UserUncheckedCreateNestedManyWithoutReferrerInput
    rewardLedger?: RewardLedgerUncheckedCreateNestedManyWithoutUserInput
    referralRewards?: ReferralRewardUncheckedCreateNestedManyWithoutReferrerInput
    referralRewardsReceived?: ReferralRewardUncheckedCreateNestedManyWithoutReferredUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    priceAlerts?: PriceAlertUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTicketsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTicketsInput, UserUncheckedCreateWithoutTicketsInput>
  }

  export type MessageCreateWithoutTicketInput = {
    content: string
    createdAt?: Date | string
    sender: UserCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateWithoutTicketInput = {
    id?: number
    senderId: number
    content: string
    createdAt?: Date | string
  }

  export type MessageCreateOrConnectWithoutTicketInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutTicketInput, MessageUncheckedCreateWithoutTicketInput>
  }

  export type MessageCreateManyTicketInputEnvelope = {
    data: MessageCreateManyTicketInput | MessageCreateManyTicketInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutTicketsInput = {
    update: XOR<UserUpdateWithoutTicketsInput, UserUncheckedUpdateWithoutTicketsInput>
    create: XOR<UserCreateWithoutTicketsInput, UserUncheckedCreateWithoutTicketsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTicketsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTicketsInput, UserUncheckedUpdateWithoutTicketsInput>
  }

  export type UserUpdateWithoutTicketsInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    mainBalance?: FloatFieldUpdateOperationsInput | number
    investmentBalance?: FloatFieldUpdateOperationsInput | number
    totalEarn?: FloatFieldUpdateOperationsInput | number
    totalDeposit?: FloatFieldUpdateOperationsInput | number
    totalWithdrawals?: FloatFieldUpdateOperationsInput | number
    roi?: FloatFieldUpdateOperationsInput | number
    redeemedRoi?: FloatFieldUpdateOperationsInput | number
    speedInvest?: FloatFieldUpdateOperationsInput | number
    completed?: FloatFieldUpdateOperationsInput | number
    interestBalance?: FloatFieldUpdateOperationsInput | number
    rewardPoints?: FloatFieldUpdateOperationsInput | number
    totalReferrals?: IntFieldUpdateOperationsInput | number
    privateKeyHash?: NullableStringFieldUpdateOperationsInput | string | null
    termsAcceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    termsAcceptedIP?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deposits?: DepositUpdateManyWithoutUserNestedInput
    investments?: InvestmentUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    withdrawals?: WithdrawalUpdateManyWithoutUserNestedInput
    referrals?: ReferralUpdateManyWithoutUserNestedInput
    referredUsers?: UserUpdateManyWithoutReferrerNestedInput
    referrer?: UserUpdateOneWithoutReferredUsersNestedInput
    rewardLedger?: RewardLedgerUpdateManyWithoutUserNestedInput
    referralRewards?: ReferralRewardUpdateManyWithoutReferrerNestedInput
    referralRewardsReceived?: ReferralRewardUpdateManyWithoutReferredUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    priceAlerts?: PriceAlertUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTicketsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    mainBalance?: FloatFieldUpdateOperationsInput | number
    investmentBalance?: FloatFieldUpdateOperationsInput | number
    totalEarn?: FloatFieldUpdateOperationsInput | number
    totalDeposit?: FloatFieldUpdateOperationsInput | number
    totalWithdrawals?: FloatFieldUpdateOperationsInput | number
    roi?: FloatFieldUpdateOperationsInput | number
    redeemedRoi?: FloatFieldUpdateOperationsInput | number
    speedInvest?: FloatFieldUpdateOperationsInput | number
    completed?: FloatFieldUpdateOperationsInput | number
    interestBalance?: FloatFieldUpdateOperationsInput | number
    rewardPoints?: FloatFieldUpdateOperationsInput | number
    totalReferrals?: IntFieldUpdateOperationsInput | number
    referredById?: NullableIntFieldUpdateOperationsInput | number | null
    privateKeyHash?: NullableStringFieldUpdateOperationsInput | string | null
    termsAcceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    termsAcceptedIP?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deposits?: DepositUncheckedUpdateManyWithoutUserNestedInput
    investments?: InvestmentUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    withdrawals?: WithdrawalUncheckedUpdateManyWithoutUserNestedInput
    referrals?: ReferralUncheckedUpdateManyWithoutUserNestedInput
    referredUsers?: UserUncheckedUpdateManyWithoutReferrerNestedInput
    rewardLedger?: RewardLedgerUncheckedUpdateManyWithoutUserNestedInput
    referralRewards?: ReferralRewardUncheckedUpdateManyWithoutReferrerNestedInput
    referralRewardsReceived?: ReferralRewardUncheckedUpdateManyWithoutReferredUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    priceAlerts?: PriceAlertUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MessageUpsertWithWhereUniqueWithoutTicketInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutTicketInput, MessageUncheckedUpdateWithoutTicketInput>
    create: XOR<MessageCreateWithoutTicketInput, MessageUncheckedCreateWithoutTicketInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutTicketInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutTicketInput, MessageUncheckedUpdateWithoutTicketInput>
  }

  export type MessageUpdateManyWithWhereWithoutTicketInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutTicketInput>
  }

  export type TicketCreateWithoutMessagesInput = {
    subject: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTicketsInput
  }

  export type TicketUncheckedCreateWithoutMessagesInput = {
    id?: number
    subject: string
    status?: string
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TicketCreateOrConnectWithoutMessagesInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutMessagesInput, TicketUncheckedCreateWithoutMessagesInput>
  }

  export type UserCreateWithoutMessagesInput = {
    firstName: string
    lastName: string
    username: string
    email: string
    password: string
    phone?: string | null
    mainBalance?: number
    investmentBalance?: number
    totalEarn?: number
    totalDeposit?: number
    totalWithdrawals?: number
    roi?: number
    redeemedRoi?: number
    speedInvest?: number
    completed?: number
    interestBalance?: number
    rewardPoints?: number
    totalReferrals?: number
    privateKeyHash?: string | null
    termsAcceptedAt?: Date | string | null
    termsAcceptedIP?: string | null
    createdAt?: Date | string
    deposits?: DepositCreateNestedManyWithoutUserInput
    investments?: InvestmentCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    withdrawals?: WithdrawalCreateNestedManyWithoutUserInput
    referrals?: ReferralCreateNestedManyWithoutUserInput
    referredUsers?: UserCreateNestedManyWithoutReferrerInput
    referrer?: UserCreateNestedOneWithoutReferredUsersInput
    rewardLedger?: RewardLedgerCreateNestedManyWithoutUserInput
    referralRewards?: ReferralRewardCreateNestedManyWithoutReferrerInput
    referralRewardsReceived?: ReferralRewardCreateNestedManyWithoutReferredUserInput
    tickets?: TicketCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    priceAlerts?: PriceAlertCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMessagesInput = {
    id?: number
    firstName: string
    lastName: string
    username: string
    email: string
    password: string
    phone?: string | null
    mainBalance?: number
    investmentBalance?: number
    totalEarn?: number
    totalDeposit?: number
    totalWithdrawals?: number
    roi?: number
    redeemedRoi?: number
    speedInvest?: number
    completed?: number
    interestBalance?: number
    rewardPoints?: number
    totalReferrals?: number
    referredById?: number | null
    privateKeyHash?: string | null
    termsAcceptedAt?: Date | string | null
    termsAcceptedIP?: string | null
    createdAt?: Date | string
    deposits?: DepositUncheckedCreateNestedManyWithoutUserInput
    investments?: InvestmentUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    withdrawals?: WithdrawalUncheckedCreateNestedManyWithoutUserInput
    referrals?: ReferralUncheckedCreateNestedManyWithoutUserInput
    referredUsers?: UserUncheckedCreateNestedManyWithoutReferrerInput
    rewardLedger?: RewardLedgerUncheckedCreateNestedManyWithoutUserInput
    referralRewards?: ReferralRewardUncheckedCreateNestedManyWithoutReferrerInput
    referralRewardsReceived?: ReferralRewardUncheckedCreateNestedManyWithoutReferredUserInput
    tickets?: TicketUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    priceAlerts?: PriceAlertUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
  }

  export type TicketUpsertWithoutMessagesInput = {
    update: XOR<TicketUpdateWithoutMessagesInput, TicketUncheckedUpdateWithoutMessagesInput>
    create: XOR<TicketCreateWithoutMessagesInput, TicketUncheckedCreateWithoutMessagesInput>
    where?: TicketWhereInput
  }

  export type TicketUpdateToOneWithWhereWithoutMessagesInput = {
    where?: TicketWhereInput
    data: XOR<TicketUpdateWithoutMessagesInput, TicketUncheckedUpdateWithoutMessagesInput>
  }

  export type TicketUpdateWithoutMessagesInput = {
    subject?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTicketsNestedInput
  }

  export type TicketUncheckedUpdateWithoutMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    subject?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutMessagesInput = {
    update: XOR<UserUpdateWithoutMessagesInput, UserUncheckedUpdateWithoutMessagesInput>
    create: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMessagesInput, UserUncheckedUpdateWithoutMessagesInput>
  }

  export type UserUpdateWithoutMessagesInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    mainBalance?: FloatFieldUpdateOperationsInput | number
    investmentBalance?: FloatFieldUpdateOperationsInput | number
    totalEarn?: FloatFieldUpdateOperationsInput | number
    totalDeposit?: FloatFieldUpdateOperationsInput | number
    totalWithdrawals?: FloatFieldUpdateOperationsInput | number
    roi?: FloatFieldUpdateOperationsInput | number
    redeemedRoi?: FloatFieldUpdateOperationsInput | number
    speedInvest?: FloatFieldUpdateOperationsInput | number
    completed?: FloatFieldUpdateOperationsInput | number
    interestBalance?: FloatFieldUpdateOperationsInput | number
    rewardPoints?: FloatFieldUpdateOperationsInput | number
    totalReferrals?: IntFieldUpdateOperationsInput | number
    privateKeyHash?: NullableStringFieldUpdateOperationsInput | string | null
    termsAcceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    termsAcceptedIP?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deposits?: DepositUpdateManyWithoutUserNestedInput
    investments?: InvestmentUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    withdrawals?: WithdrawalUpdateManyWithoutUserNestedInput
    referrals?: ReferralUpdateManyWithoutUserNestedInput
    referredUsers?: UserUpdateManyWithoutReferrerNestedInput
    referrer?: UserUpdateOneWithoutReferredUsersNestedInput
    rewardLedger?: RewardLedgerUpdateManyWithoutUserNestedInput
    referralRewards?: ReferralRewardUpdateManyWithoutReferrerNestedInput
    referralRewardsReceived?: ReferralRewardUpdateManyWithoutReferredUserNestedInput
    tickets?: TicketUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    priceAlerts?: PriceAlertUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    mainBalance?: FloatFieldUpdateOperationsInput | number
    investmentBalance?: FloatFieldUpdateOperationsInput | number
    totalEarn?: FloatFieldUpdateOperationsInput | number
    totalDeposit?: FloatFieldUpdateOperationsInput | number
    totalWithdrawals?: FloatFieldUpdateOperationsInput | number
    roi?: FloatFieldUpdateOperationsInput | number
    redeemedRoi?: FloatFieldUpdateOperationsInput | number
    speedInvest?: FloatFieldUpdateOperationsInput | number
    completed?: FloatFieldUpdateOperationsInput | number
    interestBalance?: FloatFieldUpdateOperationsInput | number
    rewardPoints?: FloatFieldUpdateOperationsInput | number
    totalReferrals?: IntFieldUpdateOperationsInput | number
    referredById?: NullableIntFieldUpdateOperationsInput | number | null
    privateKeyHash?: NullableStringFieldUpdateOperationsInput | string | null
    termsAcceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    termsAcceptedIP?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deposits?: DepositUncheckedUpdateManyWithoutUserNestedInput
    investments?: InvestmentUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    withdrawals?: WithdrawalUncheckedUpdateManyWithoutUserNestedInput
    referrals?: ReferralUncheckedUpdateManyWithoutUserNestedInput
    referredUsers?: UserUncheckedUpdateManyWithoutReferrerNestedInput
    rewardLedger?: RewardLedgerUncheckedUpdateManyWithoutUserNestedInput
    referralRewards?: ReferralRewardUncheckedUpdateManyWithoutReferrerNestedInput
    referralRewardsReceived?: ReferralRewardUncheckedUpdateManyWithoutReferredUserNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    priceAlerts?: PriceAlertUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutReferralRewardsInput = {
    firstName: string
    lastName: string
    username: string
    email: string
    password: string
    phone?: string | null
    mainBalance?: number
    investmentBalance?: number
    totalEarn?: number
    totalDeposit?: number
    totalWithdrawals?: number
    roi?: number
    redeemedRoi?: number
    speedInvest?: number
    completed?: number
    interestBalance?: number
    rewardPoints?: number
    totalReferrals?: number
    privateKeyHash?: string | null
    termsAcceptedAt?: Date | string | null
    termsAcceptedIP?: string | null
    createdAt?: Date | string
    deposits?: DepositCreateNestedManyWithoutUserInput
    investments?: InvestmentCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    withdrawals?: WithdrawalCreateNestedManyWithoutUserInput
    referrals?: ReferralCreateNestedManyWithoutUserInput
    referredUsers?: UserCreateNestedManyWithoutReferrerInput
    referrer?: UserCreateNestedOneWithoutReferredUsersInput
    rewardLedger?: RewardLedgerCreateNestedManyWithoutUserInput
    referralRewardsReceived?: ReferralRewardCreateNestedManyWithoutReferredUserInput
    tickets?: TicketCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutSenderInput
    priceAlerts?: PriceAlertCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReferralRewardsInput = {
    id?: number
    firstName: string
    lastName: string
    username: string
    email: string
    password: string
    phone?: string | null
    mainBalance?: number
    investmentBalance?: number
    totalEarn?: number
    totalDeposit?: number
    totalWithdrawals?: number
    roi?: number
    redeemedRoi?: number
    speedInvest?: number
    completed?: number
    interestBalance?: number
    rewardPoints?: number
    totalReferrals?: number
    referredById?: number | null
    privateKeyHash?: string | null
    termsAcceptedAt?: Date | string | null
    termsAcceptedIP?: string | null
    createdAt?: Date | string
    deposits?: DepositUncheckedCreateNestedManyWithoutUserInput
    investments?: InvestmentUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    withdrawals?: WithdrawalUncheckedCreateNestedManyWithoutUserInput
    referrals?: ReferralUncheckedCreateNestedManyWithoutUserInput
    referredUsers?: UserUncheckedCreateNestedManyWithoutReferrerInput
    rewardLedger?: RewardLedgerUncheckedCreateNestedManyWithoutUserInput
    referralRewardsReceived?: ReferralRewardUncheckedCreateNestedManyWithoutReferredUserInput
    tickets?: TicketUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    priceAlerts?: PriceAlertUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReferralRewardsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReferralRewardsInput, UserUncheckedCreateWithoutReferralRewardsInput>
  }

  export type UserCreateWithoutReferralRewardsReceivedInput = {
    firstName: string
    lastName: string
    username: string
    email: string
    password: string
    phone?: string | null
    mainBalance?: number
    investmentBalance?: number
    totalEarn?: number
    totalDeposit?: number
    totalWithdrawals?: number
    roi?: number
    redeemedRoi?: number
    speedInvest?: number
    completed?: number
    interestBalance?: number
    rewardPoints?: number
    totalReferrals?: number
    privateKeyHash?: string | null
    termsAcceptedAt?: Date | string | null
    termsAcceptedIP?: string | null
    createdAt?: Date | string
    deposits?: DepositCreateNestedManyWithoutUserInput
    investments?: InvestmentCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    withdrawals?: WithdrawalCreateNestedManyWithoutUserInput
    referrals?: ReferralCreateNestedManyWithoutUserInput
    referredUsers?: UserCreateNestedManyWithoutReferrerInput
    referrer?: UserCreateNestedOneWithoutReferredUsersInput
    rewardLedger?: RewardLedgerCreateNestedManyWithoutUserInput
    referralRewards?: ReferralRewardCreateNestedManyWithoutReferrerInput
    tickets?: TicketCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutSenderInput
    priceAlerts?: PriceAlertCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReferralRewardsReceivedInput = {
    id?: number
    firstName: string
    lastName: string
    username: string
    email: string
    password: string
    phone?: string | null
    mainBalance?: number
    investmentBalance?: number
    totalEarn?: number
    totalDeposit?: number
    totalWithdrawals?: number
    roi?: number
    redeemedRoi?: number
    speedInvest?: number
    completed?: number
    interestBalance?: number
    rewardPoints?: number
    totalReferrals?: number
    referredById?: number | null
    privateKeyHash?: string | null
    termsAcceptedAt?: Date | string | null
    termsAcceptedIP?: string | null
    createdAt?: Date | string
    deposits?: DepositUncheckedCreateNestedManyWithoutUserInput
    investments?: InvestmentUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    withdrawals?: WithdrawalUncheckedCreateNestedManyWithoutUserInput
    referrals?: ReferralUncheckedCreateNestedManyWithoutUserInput
    referredUsers?: UserUncheckedCreateNestedManyWithoutReferrerInput
    rewardLedger?: RewardLedgerUncheckedCreateNestedManyWithoutUserInput
    referralRewards?: ReferralRewardUncheckedCreateNestedManyWithoutReferrerInput
    tickets?: TicketUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    priceAlerts?: PriceAlertUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReferralRewardsReceivedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReferralRewardsReceivedInput, UserUncheckedCreateWithoutReferralRewardsReceivedInput>
  }

  export type UserUpsertWithoutReferralRewardsInput = {
    update: XOR<UserUpdateWithoutReferralRewardsInput, UserUncheckedUpdateWithoutReferralRewardsInput>
    create: XOR<UserCreateWithoutReferralRewardsInput, UserUncheckedCreateWithoutReferralRewardsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReferralRewardsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReferralRewardsInput, UserUncheckedUpdateWithoutReferralRewardsInput>
  }

  export type UserUpdateWithoutReferralRewardsInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    mainBalance?: FloatFieldUpdateOperationsInput | number
    investmentBalance?: FloatFieldUpdateOperationsInput | number
    totalEarn?: FloatFieldUpdateOperationsInput | number
    totalDeposit?: FloatFieldUpdateOperationsInput | number
    totalWithdrawals?: FloatFieldUpdateOperationsInput | number
    roi?: FloatFieldUpdateOperationsInput | number
    redeemedRoi?: FloatFieldUpdateOperationsInput | number
    speedInvest?: FloatFieldUpdateOperationsInput | number
    completed?: FloatFieldUpdateOperationsInput | number
    interestBalance?: FloatFieldUpdateOperationsInput | number
    rewardPoints?: FloatFieldUpdateOperationsInput | number
    totalReferrals?: IntFieldUpdateOperationsInput | number
    privateKeyHash?: NullableStringFieldUpdateOperationsInput | string | null
    termsAcceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    termsAcceptedIP?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deposits?: DepositUpdateManyWithoutUserNestedInput
    investments?: InvestmentUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    withdrawals?: WithdrawalUpdateManyWithoutUserNestedInput
    referrals?: ReferralUpdateManyWithoutUserNestedInput
    referredUsers?: UserUpdateManyWithoutReferrerNestedInput
    referrer?: UserUpdateOneWithoutReferredUsersNestedInput
    rewardLedger?: RewardLedgerUpdateManyWithoutUserNestedInput
    referralRewardsReceived?: ReferralRewardUpdateManyWithoutReferredUserNestedInput
    tickets?: TicketUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    priceAlerts?: PriceAlertUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReferralRewardsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    mainBalance?: FloatFieldUpdateOperationsInput | number
    investmentBalance?: FloatFieldUpdateOperationsInput | number
    totalEarn?: FloatFieldUpdateOperationsInput | number
    totalDeposit?: FloatFieldUpdateOperationsInput | number
    totalWithdrawals?: FloatFieldUpdateOperationsInput | number
    roi?: FloatFieldUpdateOperationsInput | number
    redeemedRoi?: FloatFieldUpdateOperationsInput | number
    speedInvest?: FloatFieldUpdateOperationsInput | number
    completed?: FloatFieldUpdateOperationsInput | number
    interestBalance?: FloatFieldUpdateOperationsInput | number
    rewardPoints?: FloatFieldUpdateOperationsInput | number
    totalReferrals?: IntFieldUpdateOperationsInput | number
    referredById?: NullableIntFieldUpdateOperationsInput | number | null
    privateKeyHash?: NullableStringFieldUpdateOperationsInput | string | null
    termsAcceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    termsAcceptedIP?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deposits?: DepositUncheckedUpdateManyWithoutUserNestedInput
    investments?: InvestmentUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    withdrawals?: WithdrawalUncheckedUpdateManyWithoutUserNestedInput
    referrals?: ReferralUncheckedUpdateManyWithoutUserNestedInput
    referredUsers?: UserUncheckedUpdateManyWithoutReferrerNestedInput
    rewardLedger?: RewardLedgerUncheckedUpdateManyWithoutUserNestedInput
    referralRewardsReceived?: ReferralRewardUncheckedUpdateManyWithoutReferredUserNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    priceAlerts?: PriceAlertUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutReferralRewardsReceivedInput = {
    update: XOR<UserUpdateWithoutReferralRewardsReceivedInput, UserUncheckedUpdateWithoutReferralRewardsReceivedInput>
    create: XOR<UserCreateWithoutReferralRewardsReceivedInput, UserUncheckedCreateWithoutReferralRewardsReceivedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReferralRewardsReceivedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReferralRewardsReceivedInput, UserUncheckedUpdateWithoutReferralRewardsReceivedInput>
  }

  export type UserUpdateWithoutReferralRewardsReceivedInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    mainBalance?: FloatFieldUpdateOperationsInput | number
    investmentBalance?: FloatFieldUpdateOperationsInput | number
    totalEarn?: FloatFieldUpdateOperationsInput | number
    totalDeposit?: FloatFieldUpdateOperationsInput | number
    totalWithdrawals?: FloatFieldUpdateOperationsInput | number
    roi?: FloatFieldUpdateOperationsInput | number
    redeemedRoi?: FloatFieldUpdateOperationsInput | number
    speedInvest?: FloatFieldUpdateOperationsInput | number
    completed?: FloatFieldUpdateOperationsInput | number
    interestBalance?: FloatFieldUpdateOperationsInput | number
    rewardPoints?: FloatFieldUpdateOperationsInput | number
    totalReferrals?: IntFieldUpdateOperationsInput | number
    privateKeyHash?: NullableStringFieldUpdateOperationsInput | string | null
    termsAcceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    termsAcceptedIP?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deposits?: DepositUpdateManyWithoutUserNestedInput
    investments?: InvestmentUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    withdrawals?: WithdrawalUpdateManyWithoutUserNestedInput
    referrals?: ReferralUpdateManyWithoutUserNestedInput
    referredUsers?: UserUpdateManyWithoutReferrerNestedInput
    referrer?: UserUpdateOneWithoutReferredUsersNestedInput
    rewardLedger?: RewardLedgerUpdateManyWithoutUserNestedInput
    referralRewards?: ReferralRewardUpdateManyWithoutReferrerNestedInput
    tickets?: TicketUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    priceAlerts?: PriceAlertUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReferralRewardsReceivedInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    mainBalance?: FloatFieldUpdateOperationsInput | number
    investmentBalance?: FloatFieldUpdateOperationsInput | number
    totalEarn?: FloatFieldUpdateOperationsInput | number
    totalDeposit?: FloatFieldUpdateOperationsInput | number
    totalWithdrawals?: FloatFieldUpdateOperationsInput | number
    roi?: FloatFieldUpdateOperationsInput | number
    redeemedRoi?: FloatFieldUpdateOperationsInput | number
    speedInvest?: FloatFieldUpdateOperationsInput | number
    completed?: FloatFieldUpdateOperationsInput | number
    interestBalance?: FloatFieldUpdateOperationsInput | number
    rewardPoints?: FloatFieldUpdateOperationsInput | number
    totalReferrals?: IntFieldUpdateOperationsInput | number
    referredById?: NullableIntFieldUpdateOperationsInput | number | null
    privateKeyHash?: NullableStringFieldUpdateOperationsInput | string | null
    termsAcceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    termsAcceptedIP?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deposits?: DepositUncheckedUpdateManyWithoutUserNestedInput
    investments?: InvestmentUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    withdrawals?: WithdrawalUncheckedUpdateManyWithoutUserNestedInput
    referrals?: ReferralUncheckedUpdateManyWithoutUserNestedInput
    referredUsers?: UserUncheckedUpdateManyWithoutReferrerNestedInput
    rewardLedger?: RewardLedgerUncheckedUpdateManyWithoutUserNestedInput
    referralRewards?: ReferralRewardUncheckedUpdateManyWithoutReferrerNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    priceAlerts?: PriceAlertUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutNotificationsInput = {
    firstName: string
    lastName: string
    username: string
    email: string
    password: string
    phone?: string | null
    mainBalance?: number
    investmentBalance?: number
    totalEarn?: number
    totalDeposit?: number
    totalWithdrawals?: number
    roi?: number
    redeemedRoi?: number
    speedInvest?: number
    completed?: number
    interestBalance?: number
    rewardPoints?: number
    totalReferrals?: number
    privateKeyHash?: string | null
    termsAcceptedAt?: Date | string | null
    termsAcceptedIP?: string | null
    createdAt?: Date | string
    deposits?: DepositCreateNestedManyWithoutUserInput
    investments?: InvestmentCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    withdrawals?: WithdrawalCreateNestedManyWithoutUserInput
    referrals?: ReferralCreateNestedManyWithoutUserInput
    referredUsers?: UserCreateNestedManyWithoutReferrerInput
    referrer?: UserCreateNestedOneWithoutReferredUsersInput
    rewardLedger?: RewardLedgerCreateNestedManyWithoutUserInput
    referralRewards?: ReferralRewardCreateNestedManyWithoutReferrerInput
    referralRewardsReceived?: ReferralRewardCreateNestedManyWithoutReferredUserInput
    tickets?: TicketCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutSenderInput
    priceAlerts?: PriceAlertCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: number
    firstName: string
    lastName: string
    username: string
    email: string
    password: string
    phone?: string | null
    mainBalance?: number
    investmentBalance?: number
    totalEarn?: number
    totalDeposit?: number
    totalWithdrawals?: number
    roi?: number
    redeemedRoi?: number
    speedInvest?: number
    completed?: number
    interestBalance?: number
    rewardPoints?: number
    totalReferrals?: number
    referredById?: number | null
    privateKeyHash?: string | null
    termsAcceptedAt?: Date | string | null
    termsAcceptedIP?: string | null
    createdAt?: Date | string
    deposits?: DepositUncheckedCreateNestedManyWithoutUserInput
    investments?: InvestmentUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    withdrawals?: WithdrawalUncheckedCreateNestedManyWithoutUserInput
    referrals?: ReferralUncheckedCreateNestedManyWithoutUserInput
    referredUsers?: UserUncheckedCreateNestedManyWithoutReferrerInput
    rewardLedger?: RewardLedgerUncheckedCreateNestedManyWithoutUserInput
    referralRewards?: ReferralRewardUncheckedCreateNestedManyWithoutReferrerInput
    referralRewardsReceived?: ReferralRewardUncheckedCreateNestedManyWithoutReferredUserInput
    tickets?: TicketUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    priceAlerts?: PriceAlertUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
  }

  export type UserUpsertWithoutNotificationsInput = {
    update: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserUpdateWithoutNotificationsInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    mainBalance?: FloatFieldUpdateOperationsInput | number
    investmentBalance?: FloatFieldUpdateOperationsInput | number
    totalEarn?: FloatFieldUpdateOperationsInput | number
    totalDeposit?: FloatFieldUpdateOperationsInput | number
    totalWithdrawals?: FloatFieldUpdateOperationsInput | number
    roi?: FloatFieldUpdateOperationsInput | number
    redeemedRoi?: FloatFieldUpdateOperationsInput | number
    speedInvest?: FloatFieldUpdateOperationsInput | number
    completed?: FloatFieldUpdateOperationsInput | number
    interestBalance?: FloatFieldUpdateOperationsInput | number
    rewardPoints?: FloatFieldUpdateOperationsInput | number
    totalReferrals?: IntFieldUpdateOperationsInput | number
    privateKeyHash?: NullableStringFieldUpdateOperationsInput | string | null
    termsAcceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    termsAcceptedIP?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deposits?: DepositUpdateManyWithoutUserNestedInput
    investments?: InvestmentUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    withdrawals?: WithdrawalUpdateManyWithoutUserNestedInput
    referrals?: ReferralUpdateManyWithoutUserNestedInput
    referredUsers?: UserUpdateManyWithoutReferrerNestedInput
    referrer?: UserUpdateOneWithoutReferredUsersNestedInput
    rewardLedger?: RewardLedgerUpdateManyWithoutUserNestedInput
    referralRewards?: ReferralRewardUpdateManyWithoutReferrerNestedInput
    referralRewardsReceived?: ReferralRewardUpdateManyWithoutReferredUserNestedInput
    tickets?: TicketUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    priceAlerts?: PriceAlertUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    mainBalance?: FloatFieldUpdateOperationsInput | number
    investmentBalance?: FloatFieldUpdateOperationsInput | number
    totalEarn?: FloatFieldUpdateOperationsInput | number
    totalDeposit?: FloatFieldUpdateOperationsInput | number
    totalWithdrawals?: FloatFieldUpdateOperationsInput | number
    roi?: FloatFieldUpdateOperationsInput | number
    redeemedRoi?: FloatFieldUpdateOperationsInput | number
    speedInvest?: FloatFieldUpdateOperationsInput | number
    completed?: FloatFieldUpdateOperationsInput | number
    interestBalance?: FloatFieldUpdateOperationsInput | number
    rewardPoints?: FloatFieldUpdateOperationsInput | number
    totalReferrals?: IntFieldUpdateOperationsInput | number
    referredById?: NullableIntFieldUpdateOperationsInput | number | null
    privateKeyHash?: NullableStringFieldUpdateOperationsInput | string | null
    termsAcceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    termsAcceptedIP?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deposits?: DepositUncheckedUpdateManyWithoutUserNestedInput
    investments?: InvestmentUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    withdrawals?: WithdrawalUncheckedUpdateManyWithoutUserNestedInput
    referrals?: ReferralUncheckedUpdateManyWithoutUserNestedInput
    referredUsers?: UserUncheckedUpdateManyWithoutReferrerNestedInput
    rewardLedger?: RewardLedgerUncheckedUpdateManyWithoutUserNestedInput
    referralRewards?: ReferralRewardUncheckedUpdateManyWithoutReferrerNestedInput
    referralRewardsReceived?: ReferralRewardUncheckedUpdateManyWithoutReferredUserNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    priceAlerts?: PriceAlertUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutPriceAlertsInput = {
    firstName: string
    lastName: string
    username: string
    email: string
    password: string
    phone?: string | null
    mainBalance?: number
    investmentBalance?: number
    totalEarn?: number
    totalDeposit?: number
    totalWithdrawals?: number
    roi?: number
    redeemedRoi?: number
    speedInvest?: number
    completed?: number
    interestBalance?: number
    rewardPoints?: number
    totalReferrals?: number
    privateKeyHash?: string | null
    termsAcceptedAt?: Date | string | null
    termsAcceptedIP?: string | null
    createdAt?: Date | string
    deposits?: DepositCreateNestedManyWithoutUserInput
    investments?: InvestmentCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    withdrawals?: WithdrawalCreateNestedManyWithoutUserInput
    referrals?: ReferralCreateNestedManyWithoutUserInput
    referredUsers?: UserCreateNestedManyWithoutReferrerInput
    referrer?: UserCreateNestedOneWithoutReferredUsersInput
    rewardLedger?: RewardLedgerCreateNestedManyWithoutUserInput
    referralRewards?: ReferralRewardCreateNestedManyWithoutReferrerInput
    referralRewardsReceived?: ReferralRewardCreateNestedManyWithoutReferredUserInput
    tickets?: TicketCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateWithoutPriceAlertsInput = {
    id?: number
    firstName: string
    lastName: string
    username: string
    email: string
    password: string
    phone?: string | null
    mainBalance?: number
    investmentBalance?: number
    totalEarn?: number
    totalDeposit?: number
    totalWithdrawals?: number
    roi?: number
    redeemedRoi?: number
    speedInvest?: number
    completed?: number
    interestBalance?: number
    rewardPoints?: number
    totalReferrals?: number
    referredById?: number | null
    privateKeyHash?: string | null
    termsAcceptedAt?: Date | string | null
    termsAcceptedIP?: string | null
    createdAt?: Date | string
    deposits?: DepositUncheckedCreateNestedManyWithoutUserInput
    investments?: InvestmentUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    withdrawals?: WithdrawalUncheckedCreateNestedManyWithoutUserInput
    referrals?: ReferralUncheckedCreateNestedManyWithoutUserInput
    referredUsers?: UserUncheckedCreateNestedManyWithoutReferrerInput
    rewardLedger?: RewardLedgerUncheckedCreateNestedManyWithoutUserInput
    referralRewards?: ReferralRewardUncheckedCreateNestedManyWithoutReferrerInput
    referralRewardsReceived?: ReferralRewardUncheckedCreateNestedManyWithoutReferredUserInput
    tickets?: TicketUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserCreateOrConnectWithoutPriceAlertsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPriceAlertsInput, UserUncheckedCreateWithoutPriceAlertsInput>
  }

  export type UserUpsertWithoutPriceAlertsInput = {
    update: XOR<UserUpdateWithoutPriceAlertsInput, UserUncheckedUpdateWithoutPriceAlertsInput>
    create: XOR<UserCreateWithoutPriceAlertsInput, UserUncheckedCreateWithoutPriceAlertsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPriceAlertsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPriceAlertsInput, UserUncheckedUpdateWithoutPriceAlertsInput>
  }

  export type UserUpdateWithoutPriceAlertsInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    mainBalance?: FloatFieldUpdateOperationsInput | number
    investmentBalance?: FloatFieldUpdateOperationsInput | number
    totalEarn?: FloatFieldUpdateOperationsInput | number
    totalDeposit?: FloatFieldUpdateOperationsInput | number
    totalWithdrawals?: FloatFieldUpdateOperationsInput | number
    roi?: FloatFieldUpdateOperationsInput | number
    redeemedRoi?: FloatFieldUpdateOperationsInput | number
    speedInvest?: FloatFieldUpdateOperationsInput | number
    completed?: FloatFieldUpdateOperationsInput | number
    interestBalance?: FloatFieldUpdateOperationsInput | number
    rewardPoints?: FloatFieldUpdateOperationsInput | number
    totalReferrals?: IntFieldUpdateOperationsInput | number
    privateKeyHash?: NullableStringFieldUpdateOperationsInput | string | null
    termsAcceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    termsAcceptedIP?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deposits?: DepositUpdateManyWithoutUserNestedInput
    investments?: InvestmentUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    withdrawals?: WithdrawalUpdateManyWithoutUserNestedInput
    referrals?: ReferralUpdateManyWithoutUserNestedInput
    referredUsers?: UserUpdateManyWithoutReferrerNestedInput
    referrer?: UserUpdateOneWithoutReferredUsersNestedInput
    rewardLedger?: RewardLedgerUpdateManyWithoutUserNestedInput
    referralRewards?: ReferralRewardUpdateManyWithoutReferrerNestedInput
    referralRewardsReceived?: ReferralRewardUpdateManyWithoutReferredUserNestedInput
    tickets?: TicketUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateWithoutPriceAlertsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    mainBalance?: FloatFieldUpdateOperationsInput | number
    investmentBalance?: FloatFieldUpdateOperationsInput | number
    totalEarn?: FloatFieldUpdateOperationsInput | number
    totalDeposit?: FloatFieldUpdateOperationsInput | number
    totalWithdrawals?: FloatFieldUpdateOperationsInput | number
    roi?: FloatFieldUpdateOperationsInput | number
    redeemedRoi?: FloatFieldUpdateOperationsInput | number
    speedInvest?: FloatFieldUpdateOperationsInput | number
    completed?: FloatFieldUpdateOperationsInput | number
    interestBalance?: FloatFieldUpdateOperationsInput | number
    rewardPoints?: FloatFieldUpdateOperationsInput | number
    totalReferrals?: IntFieldUpdateOperationsInput | number
    referredById?: NullableIntFieldUpdateOperationsInput | number | null
    privateKeyHash?: NullableStringFieldUpdateOperationsInput | string | null
    termsAcceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    termsAcceptedIP?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deposits?: DepositUncheckedUpdateManyWithoutUserNestedInput
    investments?: InvestmentUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    withdrawals?: WithdrawalUncheckedUpdateManyWithoutUserNestedInput
    referrals?: ReferralUncheckedUpdateManyWithoutUserNestedInput
    referredUsers?: UserUncheckedUpdateManyWithoutReferrerNestedInput
    rewardLedger?: RewardLedgerUncheckedUpdateManyWithoutUserNestedInput
    referralRewards?: ReferralRewardUncheckedUpdateManyWithoutReferrerNestedInput
    referralRewardsReceived?: ReferralRewardUncheckedUpdateManyWithoutReferredUserNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type DepositCreateManyUserInput = {
    id?: number
    amount: number
    currency: string
    address: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvestmentCreateManyUserInput = {
    id?: number
    planName: string
    planId: number
    roi: number
    duration: string
    durationDays: number
    amount: number
    startDate?: Date | string
    endDate?: Date | string | null
    maturityDate: Date | string
    status?: string
    createdAt?: Date | string
  }

  export type TransactionCreateManyUserInput = {
    id?: number
    type?: string | null
    amount: number
    description?: string | null
    status?: string
    paymentMethod?: string | null
    transactionRef?: string | null
    createdAt?: Date | string
  }

  export type WithdrawalCreateManyUserInput = {
    id?: number
    amount: number
    address?: string | null
    currency?: string | null
    status?: string
    createdAt?: Date | string
  }

  export type ReferralCreateManyUserInput = {
    id?: number
    code: string
    createdAt?: Date | string
  }

  export type UserCreateManyReferrerInput = {
    id?: number
    firstName: string
    lastName: string
    username: string
    email: string
    password: string
    phone?: string | null
    mainBalance?: number
    investmentBalance?: number
    totalEarn?: number
    totalDeposit?: number
    totalWithdrawals?: number
    roi?: number
    redeemedRoi?: number
    speedInvest?: number
    completed?: number
    interestBalance?: number
    rewardPoints?: number
    totalReferrals?: number
    privateKeyHash?: string | null
    termsAcceptedAt?: Date | string | null
    termsAcceptedIP?: string | null
    createdAt?: Date | string
  }

  export type RewardLedgerCreateManyUserInput = {
    id?: number
    type: string
    points: number
    description?: string | null
    refId?: number | null
    createdAt?: Date | string
  }

  export type ReferralRewardCreateManyReferrerInput = {
    id?: number
    referredUserId: number
    amount: number
    status?: string
    createdAt?: Date | string
    redeemedAt?: Date | string | null
  }

  export type ReferralRewardCreateManyReferredUserInput = {
    id?: number
    userId: number
    amount: number
    status?: string
    createdAt?: Date | string
    redeemedAt?: Date | string | null
  }

  export type TicketCreateManyUserInput = {
    id?: number
    subject: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationCreateManyUserInput = {
    id?: number
    type: string
    message: string
    status?: string
    relatedId?: number | null
    isRead?: boolean
    createdAt?: Date | string
  }

  export type MessageCreateManySenderInput = {
    id?: number
    ticketId: number
    content: string
    createdAt?: Date | string
  }

  export type PriceAlertCreateManyUserInput = {
    id?: number
    asset: string
    alertType: string
    value: number
    condition: string
    active?: boolean
    triggeredAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DepositUpdateWithoutUserInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepositUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepositUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvestmentUpdateWithoutUserInput = {
    planName?: StringFieldUpdateOperationsInput | string
    planId?: IntFieldUpdateOperationsInput | number
    roi?: FloatFieldUpdateOperationsInput | number
    duration?: StringFieldUpdateOperationsInput | string
    durationDays?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maturityDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvestmentUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    planName?: StringFieldUpdateOperationsInput | string
    planId?: IntFieldUpdateOperationsInput | number
    roi?: FloatFieldUpdateOperationsInput | number
    duration?: StringFieldUpdateOperationsInput | string
    durationDays?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maturityDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvestmentUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    planName?: StringFieldUpdateOperationsInput | string
    planId?: IntFieldUpdateOperationsInput | number
    roi?: FloatFieldUpdateOperationsInput | number
    duration?: StringFieldUpdateOperationsInput | string
    durationDays?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maturityDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUpdateWithoutUserInput = {
    type?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    transactionRef?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    transactionRef?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    transactionRef?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WithdrawalUpdateWithoutUserInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WithdrawalUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WithdrawalUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferralUpdateWithoutUserInput = {
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferralUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferralUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutReferrerInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    mainBalance?: FloatFieldUpdateOperationsInput | number
    investmentBalance?: FloatFieldUpdateOperationsInput | number
    totalEarn?: FloatFieldUpdateOperationsInput | number
    totalDeposit?: FloatFieldUpdateOperationsInput | number
    totalWithdrawals?: FloatFieldUpdateOperationsInput | number
    roi?: FloatFieldUpdateOperationsInput | number
    redeemedRoi?: FloatFieldUpdateOperationsInput | number
    speedInvest?: FloatFieldUpdateOperationsInput | number
    completed?: FloatFieldUpdateOperationsInput | number
    interestBalance?: FloatFieldUpdateOperationsInput | number
    rewardPoints?: FloatFieldUpdateOperationsInput | number
    totalReferrals?: IntFieldUpdateOperationsInput | number
    privateKeyHash?: NullableStringFieldUpdateOperationsInput | string | null
    termsAcceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    termsAcceptedIP?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deposits?: DepositUpdateManyWithoutUserNestedInput
    investments?: InvestmentUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    withdrawals?: WithdrawalUpdateManyWithoutUserNestedInput
    referrals?: ReferralUpdateManyWithoutUserNestedInput
    referredUsers?: UserUpdateManyWithoutReferrerNestedInput
    rewardLedger?: RewardLedgerUpdateManyWithoutUserNestedInput
    referralRewards?: ReferralRewardUpdateManyWithoutReferrerNestedInput
    referralRewardsReceived?: ReferralRewardUpdateManyWithoutReferredUserNestedInput
    tickets?: TicketUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    priceAlerts?: PriceAlertUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReferrerInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    mainBalance?: FloatFieldUpdateOperationsInput | number
    investmentBalance?: FloatFieldUpdateOperationsInput | number
    totalEarn?: FloatFieldUpdateOperationsInput | number
    totalDeposit?: FloatFieldUpdateOperationsInput | number
    totalWithdrawals?: FloatFieldUpdateOperationsInput | number
    roi?: FloatFieldUpdateOperationsInput | number
    redeemedRoi?: FloatFieldUpdateOperationsInput | number
    speedInvest?: FloatFieldUpdateOperationsInput | number
    completed?: FloatFieldUpdateOperationsInput | number
    interestBalance?: FloatFieldUpdateOperationsInput | number
    rewardPoints?: FloatFieldUpdateOperationsInput | number
    totalReferrals?: IntFieldUpdateOperationsInput | number
    privateKeyHash?: NullableStringFieldUpdateOperationsInput | string | null
    termsAcceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    termsAcceptedIP?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deposits?: DepositUncheckedUpdateManyWithoutUserNestedInput
    investments?: InvestmentUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    withdrawals?: WithdrawalUncheckedUpdateManyWithoutUserNestedInput
    referrals?: ReferralUncheckedUpdateManyWithoutUserNestedInput
    referredUsers?: UserUncheckedUpdateManyWithoutReferrerNestedInput
    rewardLedger?: RewardLedgerUncheckedUpdateManyWithoutUserNestedInput
    referralRewards?: ReferralRewardUncheckedUpdateManyWithoutReferrerNestedInput
    referralRewardsReceived?: ReferralRewardUncheckedUpdateManyWithoutReferredUserNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    priceAlerts?: PriceAlertUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutReferrerInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    mainBalance?: FloatFieldUpdateOperationsInput | number
    investmentBalance?: FloatFieldUpdateOperationsInput | number
    totalEarn?: FloatFieldUpdateOperationsInput | number
    totalDeposit?: FloatFieldUpdateOperationsInput | number
    totalWithdrawals?: FloatFieldUpdateOperationsInput | number
    roi?: FloatFieldUpdateOperationsInput | number
    redeemedRoi?: FloatFieldUpdateOperationsInput | number
    speedInvest?: FloatFieldUpdateOperationsInput | number
    completed?: FloatFieldUpdateOperationsInput | number
    interestBalance?: FloatFieldUpdateOperationsInput | number
    rewardPoints?: FloatFieldUpdateOperationsInput | number
    totalReferrals?: IntFieldUpdateOperationsInput | number
    privateKeyHash?: NullableStringFieldUpdateOperationsInput | string | null
    termsAcceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    termsAcceptedIP?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RewardLedgerUpdateWithoutUserInput = {
    type?: StringFieldUpdateOperationsInput | string
    points?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    refId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RewardLedgerUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    points?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    refId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RewardLedgerUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    points?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    refId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferralRewardUpdateWithoutReferrerInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    redeemedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    referredUser?: UserUpdateOneRequiredWithoutReferralRewardsReceivedNestedInput
  }

  export type ReferralRewardUncheckedUpdateWithoutReferrerInput = {
    id?: IntFieldUpdateOperationsInput | number
    referredUserId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    redeemedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReferralRewardUncheckedUpdateManyWithoutReferrerInput = {
    id?: IntFieldUpdateOperationsInput | number
    referredUserId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    redeemedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReferralRewardUpdateWithoutReferredUserInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    redeemedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    referrer?: UserUpdateOneRequiredWithoutReferralRewardsNestedInput
  }

  export type ReferralRewardUncheckedUpdateWithoutReferredUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    redeemedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReferralRewardUncheckedUpdateManyWithoutReferredUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    redeemedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TicketUpdateWithoutUserInput = {
    subject?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    subject?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    subject?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUpdateWithoutUserInput = {
    type?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    relatedId?: NullableIntFieldUpdateOperationsInput | number | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    relatedId?: NullableIntFieldUpdateOperationsInput | number | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    relatedId?: NullableIntFieldUpdateOperationsInput | number | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUpdateWithoutSenderInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket?: TicketUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutSenderInput = {
    id?: IntFieldUpdateOperationsInput | number
    ticketId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyWithoutSenderInput = {
    id?: IntFieldUpdateOperationsInput | number
    ticketId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceAlertUpdateWithoutUserInput = {
    asset?: StringFieldUpdateOperationsInput | string
    alertType?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    condition?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    triggeredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceAlertUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    asset?: StringFieldUpdateOperationsInput | string
    alertType?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    condition?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    triggeredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceAlertUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    asset?: StringFieldUpdateOperationsInput | string
    alertType?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    condition?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    triggeredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateManyTicketInput = {
    id?: number
    senderId: number
    content: string
    createdAt?: Date | string
  }

  export type MessageUpdateWithoutTicketInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutTicketInput = {
    id?: IntFieldUpdateOperationsInput | number
    senderId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyWithoutTicketInput = {
    id?: IntFieldUpdateOperationsInput | number
    senderId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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