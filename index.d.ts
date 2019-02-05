import React from 'react'
import firebase from 'firebase/app'
//* * Declaration file generated by dts-gen */

export const actionTypes: {
  START: string
  SET: string
  REMOVE: string
  MERGE: string
  SET_PROFILE: string
  LOGIN: string
  LOGOUT: string
  LOGIN_ERROR: string
  NO_VALUE: string
  UNAUTHORIZED_ERROR: string
  ERROR: string
  CLEAR_ERRORS: string
  SET_LISTENER: string
  UNSET_LISTENER: string
  AUTHENTICATION_INIT_FINISHED: string
  AUTHENTICATION_INIT_STARTED: string
  SESSION_START: string
  SESSION_END: string
  FILE_UPLOAD_START: string
  FILE_UPLOAD_ERROR: string
  FILE_UPLOAD_PROGRESS: string
  FILE_UPLOAD_COMPLETE: string
  FILE_DELETE_START: string
  FILE_DELETE_ERROR: string
  FILE_DELETE_COMPLETE: string
  AUTH_UPDATE_START: string
  AUTH_UPDATE_ERROR: string
  AUTH_UPDATE_SUCCESS: string
  AUTH_EMPTY_CHANGE: string
  AUTH_LINK_ERROR: string
  AUTH_LINK_START: string
  AUTH_LINK_SUCCESS: string
  AUTH_RELOAD_ERROR: string
  AUTH_RELOAD_START: string
  AUTH_RELOAD_SUCCESS: string
  EMAIL_UPDATE_ERROR: string
  EMAIL_UPDATE_START: string
  EMAIL_UPDATE_SUCCESS: string
  PROFILE_UPDATE_START: string
  PROFILE_UPDATE_ERROR: string
  PROFILE_UPDATE_SUCCESS: string
}

export const constants: {
  actionTypes: {
    AUTHENTICATION_INIT_FINISHED: string
    AUTHENTICATION_INIT_STARTED: string
    AUTH_EMPTY_CHANGE: string
    AUTH_LINK_ERROR: string
    AUTH_LINK_START: string
    AUTH_LINK_SUCCESS: string
    AUTH_RELOAD_ERROR: string
    AUTH_RELOAD_START: string
    AUTH_RELOAD_SUCCESS: string
    AUTH_UPDATE_ERROR: string
    AUTH_UPDATE_START: string
    AUTH_UPDATE_SUCCESS: string
    CLEAR_ERRORS: string
    EMAIL_UPDATE_ERROR: string
    EMAIL_UPDATE_START: string
    EMAIL_UPDATE_SUCCESS: string
    ERROR: string
    FILE_DELETE_COMPLETE: string
    FILE_DELETE_ERROR: string
    FILE_DELETE_START: string
    FILE_UPLOAD_COMPLETE: string
    FILE_UPLOAD_ERROR: string
    FILE_UPLOAD_PROGRESS: string
    FILE_UPLOAD_START: string
    LOGIN: string
    LOGIN_ERROR: string
    LOGOUT: string
    MERGE: string
    NO_VALUE: string
    PROFILE_UPDATE_ERROR: string
    PROFILE_UPDATE_START: string
    PROFILE_UPDATE_SUCCESS: string
    REMOVE: string
    SESSION_END: string
    SESSION_START: string
    SET: string
    SET_LISTENER: string
    SET_PROFILE: string
    START: string
    UNAUTHORIZED_ERROR: string
    UNSET_LISTENER: string
  }
  defaultConfig: {
    attachAuthIsReady: boolean
    autoPopulateProfile: boolean
    dispatchOnUnsetListener: boolean
    dispatchRemoveAction: boolean
    enableEmptyAuthChanges: boolean
    enableLogging: boolean
    enableRedirectHandling: boolean
    firebaseStateName: string
    presence: any
    preserveOnEmptyAuthChange: any
    preserveOnLogout: any
    resetBeforeLogin: boolean
    sessions: string
    setProfilePopulateResults: boolean
    updateProfileOnLogin: boolean
    userProfile: any
  }
}

/**
 * Promise which resolves when auth state has loaded.
 */
export function authIsReady(store: object, ...args: any[]): any

/**
 * Factory function for creating a firebaseConnect Higher Order Component
 */
export function createFirebaseConnect(...args: any[]): any

export function createFirebaseInstance(
  firebase: any,
  configs: any,
  dispatch: any,
  ...args: any[]
): any

export function createFirestoreConnect(...args: any[]): any

export function createWithFirebase(storeKey: any): any

export function createWithFirestore(storeKey: any): any

/**
 * React HOC that attaches/detaches Firebase Real Time Database listeners on mount/unmount
 */
export function firebaseConnect(...args: any[]): any

/**
 * Reducer for Firebase state
 */
export function firebaseReducer(...args: any[]): firebaseReducer.Reducer

/**
 * Reducer for Firebase state
 */
export function firebaseStateReducer(...args: any[]): any

/**
 * React HOC that attaches/detaches Cloud Firestore listeners on mount/unmount
 */
export function firestoreConnect(...args: any[]): any

/**
 * Reducer for Firestore state
 */
export function firestoreReducer(...args: any[]): firestoreReducer.Reducer

export function fixPath(path: string): string

/**
 * Get Firebase instance
 */
export function getFirebase(): typeof firebase

export function getVal(firebase: object, path: string, notSetValue?: any): any

export function isEmpty(...args: any[]): boolean

export function isLoaded(...args: any[]): boolean

export function populate(
  state: object,
  path: string,
  populates: any,
  notSetValue?: any
): any

/**
 * React Context provider for Firebase instance (with methods wrapped in dispatch). Needed to use HOCs
 * like firebaseConnect and withFirebase.
 */
export function ReactReduxFirebaseProvider(
  props: ReactReduxFirebaseProviderProps<any>
): any

/**
 * Props passed to ReactReduFirebaseContext component
 */
export interface ReactReduxFirebaseProviderProps<T> {
  value: T
  firebase: object
  config: object
  dispatch: (action: object) => void
  children?: React.ReactNode
  initalizeAuth?: boolean
  createFirestoreInstance?: (
    firebase: object,
    config: object,
    dispatch: (action: object) => void
  ) => object
}

/**
 * React Context for Firebase instance.
 */
export namespace ReduxFirestoreContext {
  const prototype: {}
}

/**
 * Props passed to ReactReduFirebaseContext component
 */
export interface ReduxFirestoreProviderProps {
  firebase: object
  config: object
  dispatch: (action: object) => void
  createFirestoreInstance: (
    firebase: object,
    config: object,
    dispatch: (action: object) => void
  ) => object
  children?: React.ReactNode
  initalizeAuth?: boolean
}

/**
 * React Context provider for Firestore instance (with methods wrapped in dispatch). Needed to use HOCs
 * like firestoreConnect and withFirestore.
 */
export function ReduxFirestoreProvider(props: ReduxFirestoreProviderProps): any

/**
 * React Higher Order Component that passes firebase as a prop (comes from context.store.firebase)
 */
export function withFirebase(
  ...args: any[]
): React.ComponentType<WithFirebaseProps>
/**
 * React Higher Order Component that passes firestore as a prop (comes from context.store.firestore)
 */
export function withFirestore(
  ...args: any[]
): React.ComponentType<WithFirestoreProps>

export namespace authIsReady {
  const prototype: {}
}

export namespace createFirebaseConnect {
  const prototype: {}
}

export namespace createFirebaseInstance {
  const prototype: {}
}

export namespace createFirestoreConnect {
  const prototype: {}
}

export namespace createWithFirebase {
  const prototype: {}
}

export namespace createWithFirestore {
  const prototype: {}
}

export namespace firebaseConnect {
  const prototype: {}
}

export namespace firebaseReducer {
  export interface Reducer {
    auth: Auth
    profile: Profile
    authError: any
    data: any
    errors: any[]
    listeners: Listeners
    ordered: Ordered
    requested: any
    requesting: any
    timestamps: any
  }

  export interface Auth extends firebase.UserInfo {
    isLoaded: boolean
    isEmpty: boolean
    apiKey: string
    appName: string
    authDomain: string
    createdAt: string
    emailVerified: boolean
    isAnonymous: boolean
    lastLoginAt: string
    providerData: firebase.UserInfo[] | null
    redirectEventId: null
    stsTokenManager: {
      accessToken: string
      apiKey: string
      expirationTime: number
      refreshToken: string
    }
  }

  // can be extended for optional properties from your database
  export interface Profile {
    isLoaded: boolean
    isEmpty: boolean
  }

  export interface Listeners {
    allIds: any[]
    byId: {
      [key: string]: any
    }
  }

  export interface Ordered {
    [key: string]: any[]
  }

  const prototype: {}
}

export namespace firebaseStateReducer {
  const prototype: {}
}

export namespace firestoreConnect {
  const prototype: {}
}

export namespace firestoreReducer {
  export interface Reducer {
    composite: any
    data: object
    errors: {
      allIds: any[]
      byQuery: any[]
    }
    listeners: Listeners
    ordered: Ordered
    queries: any
    status: {
      requested: any
      requesting: any
      timestamps: any
    }
  }

  export interface Listeners {
    allIds: any[]
    byId: {
      [key: string]: any
    }
  }

  export interface Ordered {
    [key: string]: any[]
  }

  const prototype: {}
}

export namespace fixPath {
  const prototype: {}
}

export namespace getVal {
  const prototype: {}
}

export namespace helpers {
  function fixPath(path: any): any

  function getVal(firebase: any, path: any, notSetValue?: any): any

  function isEmpty(...args: any[]): any

  function isLoaded(...args: any[]): any

  function populate(
    state: any,
    path: any,
    populates: any,
    notSetValue?: any
  ): any

  namespace fixPath {
    const prototype: {}
  }

  namespace getVal {
    const prototype: {}
  }

  namespace isEmpty {
    const prototype: {}
  }

  namespace isLoaded {
    const prototype: {}
  }

  namespace populate {
    const prototype: {}
  }
}

export namespace isEmpty {
  const prototype: {}
}

export namespace isLoaded {
  const prototype: {}
}

export namespace populate {
  const prototype: {}
}

export namespace reactReduxFirebase {
  const prototype: {}
}

export namespace reduxFirebase {
  const prototype: {}
}

export namespace reduxReactFirebase {
  const prototype: {}
}

export namespace withFirebase {
  const prototype: {}
}

export namespace withFirestore {
  const prototype: {}
}

type WhereOptions = [string, firebase.firestore.WhereFilterOp, any]
// https://github.com/prescottprue/redux-firestore#query-options
export interface FirestoreQueryOptions {
  // https://github.com/prescottprue/redux-firestore#collection
  collection: string
  // https://github.com/prescottprue/redux-firestore#document
  doc?: string
  // https://github.com/prescottprue/redux-firestore#sub-collections
  subcollections?: FirestoreQueryOptions[]
  // https://github.com/prescottprue/redux-firestore#where
  where?: WhereOptions | WhereOptions[]
  // https://github.com/prescottprue/redux-firestore#orderby
  orderBy?: string[] | string[][]
  // https://github.com/prescottprue/redux-firestore#limit
  limit?: number
  // https://github.com/prescottprue/redux-firestore#startat
  startAt?: number
  // https://github.com/prescottprue/redux-firestore#startafter
  startAfter?: number
  // https://github.com/prescottprue/redux-firestore#endat
  endAt?: number
  // https://github.com/prescottprue/redux-firestore#endbefore
  endBefore?: number
  // https://github.com/prescottprue/redux-firestore#storeas
  storeAs?: string
}

// https://github.com/prescottprue/redux-firestore#api
interface ReduxFirestoreApi {
  // https://github.com/prescottprue/redux-firestore#get
  // https://github.com/prescottprue/redux-firestore#get-1
  get: (docPath: string | FirestoreQueryOptions) => void

  // https://github.com/prescottprue/redux-firestore#set
  set: (docPath: string | FirestoreQueryOptions, data: Object) => void

  // https://github.com/prescottprue/redux-firestore#add
  add: (
    collectionPath: string | FirestoreQueryOptions,
    data: Object
  ) => Promise<{ id: string }>

  // https://github.com/prescottprue/redux-firestore#update
  update: (
    docPath: string | FirestoreQueryOptions,
    data: Object
  ) => Promise<void>

  // https://github.com/prescottprue/redux-firestore#delete
  delete: (docPath: string | FirestoreQueryOptions) => void

  // https://github.com/prescottprue/redux-firestore#runtransaction
  runTransaction: (transaction: WithFirestoreProps['firestore']) => Promise<any>

  // https://github.com/prescottprue/redux-firestore#onsnapshotsetlistener
  onSnapshot: (options: FirestoreQueryOptions) => void

  //https://github.com/prescottprue/redux-firestore#setlisteners
  setListener: (options: FirestoreQueryOptions) => void

  // https://github.com/prescottprue/redux-firestore#unsetlistener--unsetlisteners
  unsetListener: (options: FirestoreQueryOptions) => void
  unsetListeners: (options: FirestoreQueryOptions[]) => void
}

// https://github.com/prescottprue/redux-firestore#other-firebase-statics
interface FirestoreStatics {
  FieldValue: firebase.firestore.FieldValue
  FieldPath: firebase.firestore.FieldPath
  setLogLevel: (logLevel: firebase.firestore.LogLevel) => void
  Blob: firebase.firestore.Blob
  CollectionReference: firebase.firestore.CollectionReference
  DocumentReference: firebase.firestore.DocumentReference
  DocumentSnapshot: firebase.firestore.DocumentSnapshot
  GeoPoint: firebase.firestore.GeoPoint
  Query: firebase.firestore.Query
  QuerySnapshot: firebase.firestore.QuerySnapshot
  Timestamp: any
  Transaction: firebase.firestore.Transaction
  WriteBatch: firebase.firestore.WriteBatch
}

// https://react-redux-firebase.com/docs/api/withFirestore.html
export interface WithFirestoreProps {
  firestore: typeof firebase.firestore & firebase.firestore.Firestore
  firebase: typeof firebase
  dispatch: any
}

export interface WithFirebaseProps {
  firebase: typeof firebase
  dispatch: any
}
