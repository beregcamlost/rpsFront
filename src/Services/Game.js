import RpsService from './RpsService';

export default class GameService {
    constructor() {
        this.RpsSrv = RpsService();
    }

    add(from, data) {
        return this.RpsSrv.rpsFetch(from, {
            method: 'POST',
            body:JSON.stringify(data)
        })
        .catch(this.handleError);
    };

    query(from) {
        return this.RpsSrv.rpsFetch(from, {
            method: 'GET',
        })
        .catch(this.handleError);
    };

    delete(from, id) {
        return this.RpsSrv.rpsFetch(from, {
            method: 'DELETE',
            body:JSON.stringify({ _id: id })
        })
        .catch(this.handleError);
    };
};
