import { TranslationDefinition } from "./TranslationDefinition";

export const en: TranslationDefinition = {
  "You are now a developer": "You are now a developer",
  "Save": "Save",
  "Downloadable file": "Downloadable {{type}}",
  "Renew permit": "Renew permit",
  "Permit not yet valid": "Permit is not valid yet",
  "Activation code failed": "There was an error, the activation code could not be sent.",
  "Activation code resent": "A new activation code has been sent",
  "Account created": "Your account has been created",
  "You have been logged out": "You have been logged out",
  "No areas found": "No areas found",
  "Updating": "Updating...",
  "What is your name?": "What is your name?",
  "Mark favorites": "Keep track of when the fish are biting! Mark your favorite and home waters as favorites with a star, which subscribes you to all new public catch reports coming in to us. If you want to remove a favorite, press and hold the water's name.",
  "Permit": "Permit",
  "Permits": "Permits",
  "Loading": "Loading...",
  "New update available": "New update available",
  "There is a new update available": "There is a new update available. You can install it right away, it only takes a couple of seconds. You can also postpone the update, and it will install automatically the next time you start the app.",
  "Install": "Install",
  "Postpone": "Postpone",
  "My Page": "My page",
  "List": "List",
  "Control panel": "Control panel",
  "Wallet Balance": "Account balance",
  "Sold products": "Sold products",
  "Last year": "Last year",
  "Close": "Close",
  "Continue": "Continue",
  "ui": {
    "general": {
      "back": "Back",
      "pull_to_refresh": "Update",
      "shortAmount": "",
    },
    "map": {
      "outdoors": "Map",
      "satellite": "Satellite",
    },
    "about": {
      "version": "Version",
    },
    "admin": {
      "since:date": "Part of the organization since {{date}}",
      "changeOrgButton": "Switch organization",
      "selectOrg": "Select organization",
      "check": {
        "manualInstructions": "Enter a permit code below",
        "scanInstructions": "Tap the button to scan a QR code using your camera",
        "timesChecked-singular:timesChecked": "The permit has been checked once.",
        "timesChecked-plural:timesChecked": "The permit has been checked {{timesChecked}} times.",
        "timesChecked-never": "The permit has never been checked.",
        "logCheck": "Log permit check",
      },
      "userLevel": {
        "0": "Level 0",
        "1": "Level 1",
        "2": "Level 2 (Complete access)",
      },
      "stats": {
        "offline": "We do not save statistics in the app for offline use. Please connect to the internet and try again.",
        "noAccess": "In order to see statistics you need at least user level 1",
      },
      "log": {
        "inspected": "Inspected by",
        "addOne": "+1 Controlled by",
        "removeOne": "-1 Controlled by",
        "revoked": "Revoked by",
        "unrevoked": "Unrevoked by",
        "note": "Added note by",
        "unknown": "Unknown action by",
      },
    },
    "onboarding": {
      "welcome": {
        "title": "Welcome!",
        "subtitle": "Welcome to iFiske. We're swedens largest portal for fishing permits",
      },
      "explore": {
        "title": "Explore!",
        "content": "<ul><li>Find new exciting fishing areas</li><li>Plan your next fishing trip</li><li>Explore maps, fish species, rules and much more</li></ul>",
      },
      "secure": {
        "title": "Secure!",
        "subtitle": "Safely buy your fishing permit online and get it delivered to this app. We're trusted by hundreds of thousands of customers and certified as Trygg eHandel",
      },
      "notify": {
        "title": "Stay informed!",
        "subtitle": "Save your favorite spots and get new catch reports for free directly to your mailbox",
      },
      "skip": "Skip",
      "next": "Next",
      "continue": "Get started",
    },
    "placeholder": {
      "email": "e.g. name@domain.com",
      "password": "••••••••",
      "recovery_code": "123456",
      "fullname": "e.g. John Smith",
      "activationCode": "e.g. 1234",
      "username": "e.g. John77",
      "phone": "e.g. +46 70 123 45 67",
      "permit": "e.g. 12345678",
      "zip": "e.g. 123 45",
      "adr": "e.g. Fishing Blvd. 55",
      "town": "e.g. Fishville",
    },
    "issues": {
      "long_text": "<p>Have you found a bug or a problem with the app?</p><p>We encourage you to report any bugs on <a href=\"https://github.com/ifiske/ifiske/issues\">GitHub</a></p><p>You must be logged in at GitHub to write a report - but in return you will also get feedback as soon as the issue is handled! Making an account on GitHub is free.</p><p>If you are unable use GitHub, we also receive bug reports on <a href=\"mailto:app@ifiske.se\">app@ifiske.se</a>. Make sure to describe the error carefully and also tell us what phone you are using. Bug Reports such as “It doesn't work” aren't very useful for us.</p>",
    },
    "permit": {
      "validity": {
        "active": "Valid",
        "inactive": "Inactive",
        "revoked": "Revoked",
        "expired": "Expired",
        "plural": {
          "active": "Valid",
          "inactive": "Inactive",
          "revoked": "Revoked",
          "expired": "Expired",
        },
      },
    },
    "developer": {
      "betaOptIn": "Install beta versions",
      "checkForUpdates": "Check for updates",
    },
    "reviews": {
      "title": "Do you enjoy the app?",
      "message": "Your feedback helps us make fishing easier. Please leave a review!",
      "yes": "Yes",
      "no": "No",
    },
    "share:area": "Let's go fishing in {{area}}!",
    "changePassword": {
      "completed": "Password changed!",
    },
    "deliveryAddress": {
      "zip": "Zip Code",
      "adr": "Street Address",
      "town": "City",
    },
  },
  "errors": {
    "unknown": "An unknown error has occurred. Please try again later.",
    "permit": {
      "failedHeader": "Could not find your permit",
      "failedBody": "This is probably caused by a faulty internet connection. Please check your network and try again.",
    },
    "admin": {
      "noPermits": "No permits found",
      "permit": {
        "failedHeader": "Could not find permit with code <strong>{{code}}</strong>.",
        "failedBody": "This could be caused by entering an invalid code, or when the permit is from a different organization.\n\nIf you think that you should be able to view this permit, please check that the code is entered correctly.",
      },
      "scanQR": {
        "invalid": "The QR code could not be scanned",
      },
    },
    "network": "There was an error with the network, please make sure you are connected and try again",
    "area": {
      "notSelling": "This organization does not sell permits through iFiske",
    },
    "recovery_code": {
      "required": "You must enter a recovery code",
      "invalid": "Invalid recovery code",
    },
    "register": {
      "failed": "Registration failed",
    },
    "activationCode": {
      "required": "You must enter an activation code",
      "invalid": "Invalid activation code",
      "invalidRequest": "Invalid username or activation code",
      "pattern": "Must be exactly 4 digits",
    },
    "password": {
      "required": "You must enter a password",
      "invalid": "Invalid password",
      "pattern_mismatch": "Between 6 and 16 characters",
    },
    "username": {
      "required": "You must enter a username",
      "invalid": "Invalid username",
      "pattern_mismatch": "Must be between 5 and 25 characters",
      "taken": "Username is already taken",
    },
    "fullname": {
      "required": "You must enter first and last name",
      "pattern_mismatch": "Must be between 5 and 50 characters",
    },
    "email": {
      "required": "You must enter an email",
      "taken": "The email is already registered",
      "invalid": "Invalid email",
    },
    "phone": {
      "invalid": "Invalid phone number",
      "pattern": "Must be between 5 and 25 digits",
      "required": "You must enter a phone number",
    },
    "favorite": {
      "notification_update": "There was an error. You notification settings have not been changed.",
    },
  },
  "Statistics": "Statistics",
  "recovery": {
    "start": "A recovery code will soon be sent to you via",
    "and": " and ",
    "end": ".",
    "mail_spam_notice": "If you cannot find your email, try looking in the spam folder.",
  },
  "Create Account": "Create account",
  "About the app": "About",
  "Accept": "Accept",
  "Activate": "Activate",
  "Activating": "Activating...",
  "Activation code lost": "If you have lost your activation code, it is also possible to create a new account with the same credentials as before.",
  "Activation code sent": "An activation code will be sent via SMS to {{phone}} within a few minutes.",
  "Activation code": "Activation code",
  "Activation took too long": "If it takes a long time for your message to arrive, press here and we will try sending it again.",
  "Admin": "Administrator",
  "Administration": "Administration",
  "Angler record": "Angling records",
  "Are you sure?": "Are you sure?",
  "Area added to favorites": "The area is now marked as a favorite",
  "Area removed from favorites": "The area is no longer marked as favorite",
  "Cancel": "Cancel",
  "Catch report": "Catch Report",
  "Language": "Language",
  "Change language": "Change language",
  "Change user info": "To change your user information, please go to www.ifiske.se - There you can also add more phone numbers to your account, etc.",
  "Check permit": "Check Permit Code",
  "Check": "Check",
  "Code": "Code",
  "Contact Information": "Contact",
  "Contact": "Contact Us",
  "Could not set up push notifications": "Could not set up push notifications",
  "Counties": "Counties",
  "County": "County",
  "Create new account": "Create new account",
  "Description": "Description",
  "Delivery Address": "Address",
  "Email": "Email",
  "Error": "Error",
  "Favorites": "Favourites",
  "Files": "Files",
  "First name": "First name",
  "Fishing Area": "Fishing area",
  "Fishing Areas": "Fishing areas",
  "Fishing Methods": "Fishing methods",
  "Forgot password": "Forgotten password?",
  "Full name": "Full name",
  "Home": "Home",
  "I accept the terms of service": "I accept the terms of service",
  "I approve the text message rules": "I agree to the SMS rules",
  "I have a recovery code": "I have a recovery code",
  "iFiske - Easier Fishing": "iFiske - Easier Fishing",
  "in": "in",
  "Information": "Information",
  "invalid": "Invalid",
  "Issued at": "Issued at <b>{{date}}</b>",
  "Issued to": "Issued to {{name}}",
  "Last updated": "Last updated",
  "Permit has expired": "Fishing permit has expired",
  "Log in": "Log in",
  "Logging in": "Signing in...",
  "Log out": "Log out",
  "Login required for favorite": "You must be logged in to mark fishing areas as favorites",
  "Make sure you have the correct name": "Make sure that you have entered the correct name before you send your text message!",
  "Map": "Map",
  "More in control panel": "More functionality is available in the control panel at www.ifiske.se",
  "My Fishing Permits": "My fishing permits",
  "Name": "Name",
  "New account": "New account",
  "New password": "New password",
  "Next": "Next",
  "No data": "No data available",
  "No favorites": "You have not marked any waters as favorites",
  "No permits": "When you buy fishing permits, they will be listed here",
  "Notifications are turned off": "Notifications are turned off",
  "Notifications are turned on": "Notifications are turned on",
  "Notify via email": "Notifications via email",
  "OK": "OK",
  "Open control panel": "Open Control Panel",
  "Open Source Licenses": "Open Source Licenses",
  "Password changed": "Your password has been changed",
  "Changing password": "Changing password...",
  "Password": "Password",
  "PDF": "PDF",
  "Phone number": "Phone number",
  "Prevalence": "Prevalence",
  "Profile": "Profile",
  "Purchase": "Buy",
  "Purchase permit": "Buy fishing permit",
  "Push notifications": "Push notifications",
  "Register": "Register",
  "Registering": "Registering...",
  "Registering account approves": "By registering an account, you agree to our",
  "Report issue": "Report issue",
  "Recovery code": "Recovery code",
  "Recover password": "Recover password",
  "Revoke": "Revoke",
  "Revoking": "Revoking",
  "Rules": "Rules",
  "Scan QR code": "Scan QR code",
  "Search results": "Search results",
  "Search": "Search",
  "Send": "Send",
  "Send SMS": "Send SMS",
  "Settings": "Settings",
  "Size and growth": "Size and growth",
  "SMS Rules": "SMS Rules",
  "SMS": "SMS",
  "Species": "Species",
  "Surname": "Surname",
  "Technique advanced": "Advanced Tips",
  "Technique description": "Description (Basics)",
  "Technique gear": "Equipment",
  "Terms of service": "Terms",
  "Text message format": "The format for sending a text message is:",
  "Text message instructions": "When you click the button, your normal SMS app opens with a pre-written text to 72456",
  "This will revoke the permit": "This will revoke the permit",
  "This will unrevoke the permit": "This will unrevoke the permit",
  "to": "to",
  "Try again": "Try again",
  "Unhandled API error": "Unexpected API error, please try again later",
  "Unrevoke": "Unrevoke",
  "Unrevoking": "Unrevoking",
  "Update stored data": "Update stored data",
  "Use existing registration code": "Use existing code",
  "User already has recovery code": "If you already have a recovery code, you can skip this step.",
  "User does not exist": "The user does not exist",
  "User information": "User Information",
  "User phone numbers": "Connected phone numbers",
  "Username or email": "Username or e-mail:",
  "Username": "Username",
  "Valid from": "Valid from <b>{{date}}</b>",
  "Valid until": "Valid until <b>{{date}}</b>",
  "Version": "Version mumber",
  "Youtube": "YouTube",
  "Verify Account": "Verify Account",
  "Logging out": "Signing out...",
  "Searching": "Searching...",
  "Change Password": "Change Password",
  "New Password": "New Password",
}
