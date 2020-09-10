export type Action = {
  [key: string]: unknown;
  type: string;
};

export enum ACTION_TYPES {
  REDUX_CLINET_DISPATCH_TO_MASTER = 'REDUX_CLINET_DISPATCH_TO_MASTER',
  REDUX_MASTER_SYNC_TO_CLIENT = 'REDUX_MASTER_SYNC_TO_CLIENT',
  REDUX_CLIENT_INTERNAL_LOADING = 'REDUX_CLIENT_INTERNAL_LOADING',

  APP_INIT = 'APP_INIT',

  APP_INSTALL_HELPER = 'APP_INSTALL_HELPER',
  APP_UPDATE_HELPER_INSTALLED = 'APP_UPDATED_HELPER_INSTALLED',

  // need to remove
  ADD_TODO = 'ADD_TODO',
  DELAY_ADD_TODO = 'DELAY_ADD_TODO',
}

export function reduxClientDispatchToMaster(action: Action): Action {
  return {
    type: ACTION_TYPES.REDUX_CLINET_DISPATCH_TO_MASTER,
    action,
  };
}

export function reduxMasterSyncToClient(state: unknown): Action {
  return {
    type: ACTION_TYPES.REDUX_MASTER_SYNC_TO_CLIENT,
    state,
  };
}

export function reduxClientInternalLoading(
  action: Action,
  status: boolean,
): Action {
  return {
    type: ACTION_TYPES.REDUX_CLIENT_INTERNAL_LOADING,
    action,
    status,
  };
}

export function appInit(): Action {
  return {
    type: ACTION_TYPES.APP_INIT,
  };
}

export function appUpdateHelperInstalled(installed: boolean): Action {
  return {
    type: ACTION_TYPES.APP_UPDATE_HELPER_INSTALLED,
    installed,
  };
}
export function appInstallHelper(): Action {
  return {
    type: ACTION_TYPES.APP_INSTALL_HELPER,
  };
}

export function addTodo(text: string): Action {
  return {
    type: ACTION_TYPES.ADD_TODO,
    text,
  };
}

export function delayAddTodo(text: string): Action {
  return {
    type: ACTION_TYPES.DELAY_ADD_TODO,
    text,
  };
}