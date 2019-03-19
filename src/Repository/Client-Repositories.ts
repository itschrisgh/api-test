import { getManager, UpdateResult, DeleteResult, Repository } from "typeorm";
import { Client } from '../Entities/Client';

export class ClientRepository {

    newClient(client: Client): Promise<Client> {
        return getManager().getRepository(Client).save(client);
    }

    getClientsList(): Promise<Client[]> {
        return getManager().getRepository(Client).createQueryBuilder('Client')
            .select(['Client.id', 'Client.name', 'Client.lastName'])
            .getMany();
    }

    getClient(idClient: number): Promise<Client> {
        return getManager().getRepository(Client).findOne({
            where: {
                id: idClient
            }
        });
    }

    updateClient(idClient: string, newClientData: Client): Promise<UpdateResult> {
        return getManager().getRepository(Client).update({id: idClient}, newClientData)
    }

    deleteClient(idClient: string): Promise<DeleteResult> {
        return getManager().getRepository(Client).delete({id: idClient});
    }
}