'use strict';

module.exports = function(app){
    var jsonku = require('./controller');

    app.route('/').get(jsonku.index);

    app.route('/tampil').get(jsonku.tampildata);

    app.route('/tampil/:id').get(jsonku.tampilberdasarkanId);

    app.route('/tambah').post(jsonku.tambahdata);

    app.route('/ubahdata').put(jsonku.ubahdataMahasiswa);

    app.route('/hapusdata').delete(jsonku.hapusdatamahasiswa);

    app.route('/tampilmatakuliah').get(jsonku.tampilgroupmatakuliah)

}

