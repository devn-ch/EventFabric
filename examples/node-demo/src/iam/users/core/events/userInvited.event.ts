import { Event } from '@eventfabric-cqrs/core';
import { UserState } from '../domain/user.ts';

export const USER_INVITED_EVENT_TYPE = 'ch.devn.eventfabric.user-invited';

export type UserInvitedEvent = Event<UserState> & {
    type: typeof USER_INVITED_EVENT_TYPE;
};
