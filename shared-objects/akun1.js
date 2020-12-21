module.exports = [
    {
        // 0. test data untuk case registrasi berhasil, semua data memenuhi syarat
        namaLengkap: "nasyifa",
        username: "nasyf",
        email:"syifa1@gmail.com",
        nohp:"081123459898",
        tanggalLahir:"01/12/2000",
        alamat:"bandung, indonesia",
        password:"1111",
        konfirmPassword:"1111"
    },
    {
        // 1. test data untuk case form "nama lengkap" kosong
        namaLengkap: "",
        username: "syifa",
        email:"syifa2@gmail.com",
        nohp:"081123459898",
        tanggalLahir:"01/12/2000",
        alamat:"bandung, indonesia",
        password:"1111",
        konfirmPassword:"1111"
    },
    {
        // 2. test data untuk case form "username" kosong
        namaLengkap: "asyifaa",
        username: "",
        email:"syifa2@gmail.com",
        nohp:"081123459898",
        tanggalLahir:"01/12/2000",
        alamat:"bandung, indonesia",
        password:"1111",
        konfirmPassword:"1111"
    },
    {
        // 3. test data untuk case form "email" kosong
        namaLengkap: "asyifaa",
        username: "syifa",
        email:"",
        nohp:"081123459898",
        tanggalLahir:"01/12/2000",
        alamat:"bandung, indonesia",
        password:"1111",
        konfirmPassword:"1111"
    },
    {
        // 4. test data untuk case form "nomor hp" kosong
        namaLengkap: "asyifaa",
        username: "syifa",
        email:"syifa2@gmail.com",
        nohp:"",
        tanggalLahir:"01/12/2000",
        alamat:"bandung, indonesia",
        password:"1111",
        konfirmPassword:"1111"
    },
    {
        // 5. test data untuk case form "tanggal lahir" kosong
        namaLengkap: "asyifaa",
        username: "syifa",
        email:"syifa2@gmail.com",
        nohp:"081123459898",
        tanggalLahir:"",
        alamat:"bandung, indonesia",
        password:"1111",
        konfirmPassword:"1111"
    },
    {
        // 6. test data untuk case form "alamat" kosong
        namaLengkap: "asyifaa",
        username: "syifa",
        email:"syifa2@gmail.com",
        nohp:"081123459898",
        tanggalLahir:"01/12/2000",
        alamat:"",
        password:"1111",
        konfirmPassword:"1111"
    },
    {
        // 7. test data untuk case form "password" kosong
        namaLengkap: "asyifaa",
        username: "syifa",
        email:"syifa2@gmail.com",
        nohp:"081123459898",
        tanggalLahir:"01/12/2000",
        alamat:"bandung, indonesia",
        password:"",
        konfirmPassword:"1111"
    },
    {
        // 8. test data untuk case form "konfirm password" kosong
        namaLengkap: "asyifaa",
        username: "syifa",
        email:"syifa2@gmail.com",
        nohp:"081123459898",
        tanggalLahir:"01/12/2000",
        alamat:"bandung, indonesia",
        password:"1111",
        konfirmPassword:""
    },
    {
        // 9. test data untuk case validasi password dengan konfirm password berbeda
        namaLengkap: "nurasyifa",
        username: "nurasyifa",
        email:"syifa3@gmail.com",
        nohp:"081123459898",
        tanggalLahir:"01/12/2000",
        alamat:"bandung, indonesia",
        password:"1111",
        konfirmPassword:"1234"
    },
    {
        // 10. test data untuk case username sama / duplikat dengan data 1
        namaLengkap: "nasyf",
        username: "nasyf",
        email:"nasyf@gmail.com",
        nohp:"081123459111",
        tanggalLahir:"01/12/2000",
        alamat:"bandung, indonesia",
        password:"1111",
        konfirmPassword:"1111"
    },
    {
        // 11. test data untuk login berhasil
        username: "syifaa",
        password:"1111"
    },
    {
        // 12. test data untuk login berhasil
        username: "syifaa",
        password:"1234"
    }
]