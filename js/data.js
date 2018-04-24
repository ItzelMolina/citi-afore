const data = {
    'userInfo' : {
       
            "user_name" : "SandboxUser1",
            "access_token": "AAEkYzFjMDQ0Y2UtNTBmMy00NmY4LWI4YjEtYmQ5ODJkMWZiNGZh3xGP85xjqyxoHR7pXxzQJf223kWPL-HyWHD4zrRCvHZUkeBkTgxppbmpFtmWeVmjzDOxs1wFzI4s45YDS15eYmyuxzLbVog4d8H9pYSelrvL6naDYOLL9U16EaY0iyAMPBGX1H7RhCqtmd-7u_Eanw7QshbruLaZh2stOrdq2thC5CCSwW2r0e8PM1QbWubJOcMp8UGv-zNc0I3cTSihymSCF44HJ_yeuPAcXJ7kj-iPzQqxaO6FiWPmIsIh2YSxdGYo8alTyjJfG5AQDnM0HA",
            "refresh_token": "AAGsyASCzlBplxGvA-5CFCkLhNinu6-0HQt-y7PuzsRLVAHok6yYs6KS2Np4t7bL0R8FMeT62wYXFxxY6F7LU_cc00QTXPfoQFFtay2tu3eGpBAGDg07ll_vNk_AEJo9l1GaEKYev7Q7drDOeRCDRqcD12zJzk36PsQEM6j1txFV2jR3snW5PLs3HVjxNRjUHWLR5IoI2qfb8zCZNahrFCRQ7T7ZVB_-E6Qk22tN3hZkZH7_kB3bZjtVoNxyjJ6qBDcrYdgtAvPvBV-xXDBmfUXD44JBYiZffHjEr2dFb_e3yA",
            "scope": "/dda/customer /dda/accountlist /dda/account /dda/accountsdetails /dda/account/transactions",
            "token_type": "bearer",
            "expires_in": 1800
    },

   'pointBalance' : {
    "required": [
        "isRedemptionEligible"
    ],
    "properties": {
        "isRedemptionEligible": {
            "type": "boolean",
            "description": "Reflects a member's ability to utilize points for redemption.",
            "example": true
        },
        "availablePointBalance": {
            "type": "integer",
            "description": "Number of Rewards points available.",
            "example": 10000
        },
        "programConversionRate": {
            "type": "number",
            "description": "Points\/dollar conversion rate for the rewards program",
            "example": 0.0085
        },
        "localCurrencyCode": {
            "type": "string",
            "description": "ISO Currency Code",
            "example": "USD"
        },
        "redemptionPointIncrement": {
            "type": "integer",
            "description": "The increment at which available points can be redeemed.",
            "example": 1
        },
        "maximumPointsToRedeem": {
            "type": "integer",
            "description": "The maximum number of points that can be used towards a purchase.",
            "example": 500
        },
        "minimumPointsToRedeem": {
            "type": "integer",
            "description": "The minimum number of points that can be used towards a purchase.",
            "example": 100
        }
       }
    },
          "accountGroupSummary": [
          {
            "accountGroup": "SAVINGS",
            "accounts": [
              {
                "checkingAccountSummary": {
                  "productName": "Personal Checking Account",
                  "productCode": "CA_CA301",
                  "accountNickname": "Account for Tax Deduction Only",
                  "displayAccountNumber": "XXXXXX2391",
                  "accountId": "AB34512DEF984DBBACEA",
                  "currencyCode": "AUD",
                  "accountStatus": "ACTIVE",
                  "accountClassification": "ASSET",
                  "currentBalance": 10000.25,
                  "availableBalance": 15000.25
                },
                "savingsAccountSummary": {
                  "productName": "Personal Savings Account",
                  "productCode": "SA_1000",
                  "accountNickname": "Personal Savings Account",
                  "displayAccountNumber": "XXXXXX2391",
                  "accountId": "3255613852316f2b4d4d796c344e38756339654972776f663745446e6d4c32486f455a4165374a476858343d",
                  "currencyCode": "AUD",
                  "accountStatus": "ACTIVE",
                  "accountClassification": "ASSET",
                  "currentBalance": 10000.25,
                  "availableBalance": 15000.25
                },
                "creditCardAccountSummary": {
                  "productName": "Citibank Platinum Visa",
                  "productCode": "0071_VC301",
                  "accountNickname": "Credit Card Account for My Travels",
                  "displayAccountNumber": "XXXXXXXXXXXX0364",
                  "accountId": "3255613852316f2b4d4d796c344e38756339654972776f663745446e6d4c32486f455a4165374a476858343d",
                  "currencyCode": "AUD",
                  "accountClassification": "LIABILITY",
                  "accountStatus": "ACTIVE",
                  "outstandingBalance": 10000.25,
                  "availableCredit": 15000.25,
                  "creditLimit": 25000.25,
                  "minimumDueAmount": 256.5,
                  "paymentDueDate": "2016-10-05",
                  "alternateCurrency": "USD",
                  "alternateCurrencyCurrentBalance": 1534.25,
                  "cardHolderType": "PRIMARY"
                },
                "readyCreditAccountSummary": {
                  "productName": "Ready Credit",
                  "productCode": "RC_RC100",
                  "accountNickname": "Ready Credit Account",
                  "displayAccountNumber": "XXXXXX2391",
                  "accountId": "3255613852316f2b4d4d796c344e38756339654972776f663745446e6d4c32486f455a4165374a476858343d",
                  "currencyCode": "AUD",
                  "accountStatus": "ACTIVE",
                  "accountClassification": "LIABILITY",
                  "outstandingBalance": 10000.25,
                  "availableCredit": 15000.25,
                  "nextPaymentAmount": 9230.67,
                  "nextPaymentDate": "2018-06-13"
                },
                "loanAccountSummary": {
                  "productName": "Personal Loan Account",
                  "productCode": "PL_001",
                  "accountNickname": "Personal Loan Account",
                  "displayAccountNumber": "XXXXXX2391",
                  "accountId": "3255613852316f2b4d4d796c344e38756339654972776f663745446e6d4c32486f455a4165374a476858343d",
                  "currencyCode": "AUD",
                  "accountClassification": "LIABILITY",
                  "accountStatus": "ACTIVE",
                  "originalPrincipalAmount": 10000.25,
                  "outstandingBalance": 15000.25,
                  "nextPaymentAmount": 9230.67,
                  "nextPaymentDate": "2018-06-13"
                },
                "mutualFundAccountSummary": {
                  "productName": "Citibank Platinum Visa",
                  "productCode": "0071_VC301",
                  "accountNickname": "Credit Card Account for My Travels",
                  "displayAccountNumber": "XXXXXX2391",
                  "accountId": "3255613852316f2b4d4d796c344e38756339654972776f663745446e6d4c32486f455a4165374a476858343d",
                  "currencyCode": "AUD",
                  "accountStatus": "ACTIVE",
                  "accountClassification": "LIABILITY",
                  "currentBalance": 166171.53
                },
                "securitiesBrokerageAccountSummary": {
                  "productName": "Citibank Platinum Visa",
                  "productCode": "0071_VC301",
                  "accountNickname": "Credit Card Account for My Travels",
                  "displayAccountNumber": "XXXXXX2391",
                  "accountId": "3255613852316f2b4d4d796c344e38756339654972776f663745446e6d4c32486f455a4165374a476858343d",
                  "currencyCode": "AUD",
                  "accountStatus": "ACTIVE",
                  "accountClassification": "LIABILITY",
                  "currentBalance": 166171.53
                },
                "callDepositAccountSummary": {
                  "productName": "Citi bank Platinum Visa",
                  "productCode": "0071_VC301",
                  "accountNickname": "Credit Card Account for My Travels",
                  "displayAccountNumber": "XXXXXX2391",
                  "accountId": "3255613852316f2b4d4d796c344e38756339654972776f663745446e6d4c32486f455a4165374a476858343d",
                  "currencyCode": "AUD",
                  "accountStatus": "ACTIVE",
                  "accountClassification": "LIABILITY",
                  "currentBalance": 166171.53
                },
                "premiumDepositAccountSummary": {
                  "productName": "Premium Deposit Account",
                  "productCode": "PD_301",
                  "accountNickname": "PD Account",
                  "displayAccountNumber": "XXXXXX2391",
                  "accountId": "3255613852316f2b4d4d796c344e38756339654972776f663745446e6d4c32486f455a4165374a476858343d",
                  "currencyCode": "AUD",
                  "accountClassification": "ASSET",
                  "accountStatus": "ACTIVE",
                  "currentBalance": 166171.53,
                  "originalPrincipalAmount": 10000.25,
                  "maturityDate": "2015-06-30"
                },
                "timeDepositAccountSummary": {
                  "productName": "Time Deposit",
                  "productCode": "TD_1YRT",
                  "accountNickname": "Time Deposit",
                  "displayAccountNumber": "XXXXXX2364",
                  "accountId": "3255613852316f2b4d4d796c344e38756339654972776f663745446e6d4c32486f455a4165374a476858343d",
                  "currencyCode": "AUD",
                  "accountStatus": "ACTIVE",
                  "accountClassification": "ASSET",
                  "currentBalance": 166171.53,
                  "originalPrincipalAmount": 10000.25,
                  "maturityDate": "2015-06-30"
                }
              }
            ],
            "insurancePolicies": [
              {
                "productName": "Personal Life Insurance Policy",
                "productCode": "IN_PLI",
                "displayAccountNumber": "XXXXXX2391",
                "currencyCode": "AUD",
                "accountClassification": "ASSET",
                "accountStatus": "ACTIVE",
                "displayPolicyNumber": "XXXXXXXX0368",
                "insuranceApplicationId": "1100000125",
                "insuranceSumAssuredAmount": 100000.25,
                "totalPremiumPaidAmount": 6171.53
              }
            ],
            "totalCurrentBalance": {
              "localCurrencyCode": "AUD",
              "localCurrencyBalanceAmount": 8900.12,
              "foreignCurrencyCode": "SGD",
              "foreignCurrencyBalanceAmount": 8880.25
            },
            "totalAvailableBalance": {
              "localCurrencyCode": "AUD",
              "localCurrencyBalanceAmount": 8900.12,
              "foreignCurrencyCode": "SGD",
              "foreignCurrencyBalanceAmount": 8880.25
            },
            "totalOutstandingBalance": {
              "localCurrencyCode": "AUD",
              "localCurrencyBalanceAmount": 8900.12,
              "foreignCurrencyCode": "SGD",
              "foreignCurrencyBalanceAmount": 8880.25
            }
          }
        ],
        "nextStartIndex": "11"
      
}