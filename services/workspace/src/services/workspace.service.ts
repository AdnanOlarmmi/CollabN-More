import { Workspace } from "@prisma/client";
import { prisma } from "../lib/prisma";

export const createWorkspace = async (workspace: Workspace) => {
    const newWorkspace = await prisma.workspace.create({
        data: workspace,
    });
    return newWorkspace;
};

 