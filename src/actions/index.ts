// all actions / action-related constants go here

// ACCOUNTS
export type accountsType = 'ADD_ACCOUNT' | 'REMOVE_ACCOUNT';

export const ACCOUNTS = {
  ADD_ACCOUNT: 'ADD_ACCOUNT' as accountsType,
  REMOVE_ACCOUNT: 'REMOVE_ACCOUNT' as accountsType,
};

// TEAMS
export type teamsType = 'ADD_TEAM' | 'REMOVE_TEAM';

export const TEAMS = {
  ADD_TEAM: 'ADD_TEAM' as teamsType,
  REMOVE_TEAM: 'REMOVE_TEAM' as teamsType,
};

// APP TEAMS
export type appTeamsType =
  | 'SELECT_TEAM'
  | 'SET_TEAMS_SORTED'
  | 'SELECT_CONVERSATION'
  | 'SELECT_NEXT_TEAM'
  | 'SELECT_PREVIOUS_TEAM';

export const APP_TEAMS = {
  SELECT_TEAM: 'SELECT_TEAM' as appTeamsType,
  SET_TEAMS_SORTED: 'SET_TEAMS_SORTED' as appTeamsType,
  SELECT_CONVERSATION: 'SELECT_CONVERSATION' as appTeamsType,
  SELECT_NEXT_TEAM: 'SELECT_NEXT_TEAM' as appTeamsType,
  SELECT_PREVIOUS_TEAM: 'SELECT_PREVIOUS_TEAM' as appTeamsType,
};

// WINDOWs
export type windowsType = 'OPEN_WINDOW' | 'CLOSE_WINDOW' | 'SET_VISIBILITY';

export const WINDOWS = {
  OPEN_WINDOW: 'OPEN_WINDOW' as windowsType,
  CLOSE_WINDOW: 'CLOSE_WINDOW' as windowsType,
  SET_VISIBILITY: 'SET_VISIBILITY' as windowsType,
};

// WORKSPACE
export type workspaceType =
  | 'INIT_WORKSPACE_START'
  | 'INIT_WORKSPACE_SUCCESS'
  | 'INIT_WORKSPACE_FAILURE';

export const WORKSPACE = {
  INIT_WORKSPACE_START: 'INIT_WORKSPACE_START' as workspaceType,
  INIT_WORKSPACE_SUCCESS: 'INIT_WORKSPACE_SUCCESS' as workspaceType,
  INIT_WORKSPACE_FAILURE: 'INIT_WORKSPACE_FAILURE' as workspaceType,
};

// CONVERSATIONS
export type conversationsType = 'SET_CONVERSATION_LIST';

export const CONVERSATIONS = {
  SET_CONVERSATION_LIST: 'SET_CONVERSATION_LIST' as conversationsType,
};

// MESSAGES
export type messagesType = 'FETCH_MESSAGES';

export const MESSAGES = {
  FETCH_MESSAGES: 'FETCH_MESSAGES' as messagesType,
};
