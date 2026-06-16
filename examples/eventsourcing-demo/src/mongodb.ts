import { setupMongoConnectionManager } from '@eventfabric-cqrs/mongodb';
import { getEnv } from '@eventfabric-cqrs/utils';
import { ServerApiVersion } from 'mongodb';

export const initMongoDB = () => {
    const env = getEnv({
        variables: ['MONGO_URL'],
    });

    setupMongoConnectionManager({
        name: 'default',
        uri: env['MONGO_URL'],
        options: {
            appName: 'nimbus-eventsourcing-demo',
            serverApi: {
                version: ServerApiVersion.v1,
                strict: false,
                deprecationErrors: true,
            },
        },
    });
};
