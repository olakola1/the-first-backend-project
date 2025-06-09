import createDebug from "debug";
import db from './DatabaseServise.mjs'
const debug = createDebug("ex12_express_sequelize");


export default class UserService {
    getAll = async () => {
        try {
            const resp = await db.sequelize.query('select * from users;');
            return {
                status: 'success',
                data: resp[0]
            };
        } catch (error) {
            return {
                status: 'error',
                data: error
            };
        }
    }

    getByID = (id) => {
        //find ine in db
        return `${id}`;
    }

    create= (payload) => {
        //add
        return {
            ok : true,
            status: 'create success',
            created: payload
        }
    }

    patch = (id, payload) => {
        return {
            ok : true,
            status: 'patch success',
            patchedFields: payload,
            id: +id
        }
    }

    update = (id, payload) => {
        return {
            ok : true,
            status: 'update success',
            updated: payload,
            id: +id
        }
    }

    delete = (id) => {
        debug("delete id", id);
        return {
            ok : true,
        }
    }
}