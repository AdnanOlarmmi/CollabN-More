export interface TokenPayload {
    userId: string;
    email: string;
    role?: string;
}

declare global {
    namespace Express {
        interface Request {
            user?: TokenPayload;
        }
    }
}

export interface CreateWorkspaceRequest {
    name: string;
    slug?: string;
    description?: string;
}

export interface CreateChannelRequest {
    name: string;
    description?: string;
    topic?: string;
    isPrivate?: boolean;
}

export type {
    Workspace,
    Channel,
    WorkspaceMember,
    ChannelMember,
    WorkspaceRole,
    ChannelRole,
  } from "@prisma/client";