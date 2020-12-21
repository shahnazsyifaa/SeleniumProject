# ./features/register.feature
# catatan: feature register2 untuk case validasi form register tidak boleh kosong

Feature: register2
  Sebagai user baru, saya dapat melakukan pendaftaran akun baru di Website E-LANG

  Scenario: User akan menginputkan data diri pada form register
    Given Browse landing page Case 2
    And User click Daftar Case 2
    And Website show modal Case 2
    And User fill Nama lengkap Case 2
    And User fill Username Case 2
    And User fill Email Case 2
    And User fill Nohp Case 2
    And User fill Tanggal lahir Case 2
    And User fill Alamat Case 2
    And User fill Password Case 2
    And User fill Konfirm password Case 2
    When User click button Submit Daftar Case 2
    Then Website masih show modal Case 2