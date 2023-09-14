import { AnyAction } from "redux";

export type ActionWithPayload<T, P> = {
  type: T;
  payload: P;
};

export type Action<T> = {
  type: T;
};

// Function Overload Provides an ability to create multiple function type definition types
// したは、もしcreateActionがpayloadとtypeを引数に呼ばれたらActionWithPayloadをreturnしてねってこと
export function createAction<T extends string, P>(
  type: T,
  payload: P
): ActionWithPayload<T, P>;

// payloadを受け取らないケース
// payloadを受け取らないのに引数に書くのはなぜ？
// funciton overloadを行うためには、引数の数を合わせる必要がある
// それを解決するためpayloadをvoidにする
export function createAction<T extends string>(
  type: T,
  payload: void
): Action<T>;

export function createAction<T extends string, P>(type: T, payload: P) {
  return { type, payload };
}
