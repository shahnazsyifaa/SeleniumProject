# ./features/register.feature
# catatan: feature register untuk case validasi register berhasil

Feature: register
  Sebagai user baru, saya dapat melakukan pendaftaran akun baru di Website E-LANG

  Scenario: User akan menginputkan data diri pada form register
    Given Browse landing page
    And User click Daftar
    And Website show modal
    And User fill Nama lengkap
    And User fill Username
    And User fill Email
    And User fill Nohp
    And User fill Tanggal lahir
    And User fill Alamat
    And User fill Password
    And User fill Konfirm password
    When User click button Submit Daftar
    Then User berada di Homepage