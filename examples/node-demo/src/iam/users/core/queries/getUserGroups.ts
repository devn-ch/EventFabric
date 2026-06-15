import { querySchema } from '@eventfabric-cqrs/core';
import { z } from 'zod';

export const GET_USER_GROUPS_QUERY_TYPE = 'ch.devn.eventfabric.get-user-groups';

export const getUserGroupsQuerySchema = querySchema.extend({
    type: z.literal(GET_USER_GROUPS_QUERY_TYPE),
    data: z.object({}),
});
export type GetUserGroupsQuery = z.infer<typeof getUserGroupsQuerySchema>;
