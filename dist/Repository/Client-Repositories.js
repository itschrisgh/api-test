"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Client_1 = require("../Entities/Client");
class ClientRepository {
    newClient(client) {
        return typeorm_1.getManager().getRepository(Client_1.Client).save(client);
    }
    getClientsList() {
        return typeorm_1.getManager().getRepository(Client_1.Client).createQueryBuilder('Client')
            .select(['Client.id', 'Client.name', 'Client.lastName'])
            .getMany();
    }
    getClient(idClient) {
        return typeorm_1.getManager().getRepository(Client_1.Client).findOne({
            where: {
                id: idClient
            }
        });
    }
    updateClient(idClient, newClientData) {
        return typeorm_1.getManager().getRepository(Client_1.Client).update({ id: idClient }, newClientData);
    }
    deleteClient(idClient) {
        return typeorm_1.getManager().getRepository(Client_1.Client).delete({ id: idClient });
    }
}
exports.ClientRepository = ClientRepository;
//# sourceMappingURL=Client-Repositories.js.map