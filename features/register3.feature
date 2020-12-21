# ./features/register.feature
# catatan: feature register3 untuk case validasi username tidak boleh sama / validasi password berbeda

Feature: register11
  Sebagai user baru, saya dapat melakukan pendaftaran akun baru di Website E-LANG

  Scenario: User akan menginputkan data diri pada form register
    Given Browse landing page Case 3
    And User click Daftar Case 3
    And Website show modal Case 3
    And User fill Nama lengkap Case 3
    And User fill Username Case 3
    And User fill Email Case 3
    And User fill Nohp Case 3
    And User fill Tanggal lahir Case 3
    And User fill Alamat Case 3
    And User fill Password Case 3
    And User fill Konfirm password Case 3
    When User click button Submit Daftar Case 3
    Then User gagal daftar Case 3