# ./features/login.feature

Feature: login
  Sebagai user yang telah terdaftar, saya dapat melakukan login di Website E-LANG

  Scenario: User akan menginputkan data diri pada form login
    Given Browse landing page case login
    And User click Masuk case login
    And Website show modal case login
    And User fill Username case login
    And User fill Password case login
    When User click button Masuk case login
    Then User berada di Beranda