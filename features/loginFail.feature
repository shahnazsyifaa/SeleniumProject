# ./features/loginFail.feature

Feature: loginFail
  User tidak dapat melakukan login di Website E-LANG

  Scenario: User akan menginputkan data diri pada form login
    Given Browse landing page case loginFail
    And User click Masuk case loginFail
    And Website show modal case loginFail
    And User fill Username case loginFail
    And User fill Password case loginFail
    When User click button Masuk case loginFail
    Then User gagal login