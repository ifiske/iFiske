import { TranslationDefinition } from "./TranslationDefinition";

export const de: TranslationDefinition & { ui: { admin: any } }= {
  "You are now a developer": "You are now a developer",
  "Save": "Speichern",
  "Downloadable file": "Herunterladbare {{type}}",
  "Renew permit": "Lizenz erneuern",
  "Permit not yet valid": "Lizenz ist noch nicht gültig",
  "Activation code failed": "Ein Fehler ist aufgetreten. Der Aktivierungscode konnte nicht gesendet werden.",
  "Activation code resent": "Ein neuer Aktivierungscode wurde gesendet",
  "Account created": "Ihr Account wurde erstellt",
  "You have been logged out": "Sie wurden abgemeldet",
  "No areas found": "Keine Gebiete gefunden",
  "Updating": "Updating...",
  "What is your name?": "Wie heißen Sie?",
  "Mark favorites": "Behalten Sie anbeißende Fische im Auge! Markieren Sie Ihre Favoriten und heimatlichen Gewässer als Favoriten mit einem Stern, der Sie zu allen neu veröffentlichen Fangprotokollen anmeldet, die uns erreichen. Wenn Sie einen Favoriten entfernen möchten, drücken und halten Sie den Namen des Gewässers.",
  "Permit": "Angelkarte",
  "Permits": "Angelkarten",
  "Loading": "Laden...",
  "New update available": "Neues Update verfügbar",
  "There is a new update available": "Ein neues Update ist verfügbar. Sie können es direkt installieren, es dauert nur wenige Sekunden. Sie können das Update aber auch verschieben, dann wird es beim nächsten Start der App automatisch installiert.",
  "Install": "Installieren",
  "Postpone": "Aufschieben",
  "My Page": "Meine Seite",
  "List": "Liste",
  "Control panel": "Bedienfeld",
  "Wallet Balance": "Kontoguthaben",
  "Sold products": "Verkaufte Produkte",
  "Last year": "Letztes Jahr",
  "Close": "Schließen",
  "Continue": "Weiter",
  "Filter": "Filter",
  "Changing password": "Passwort ändern",
  "ui": {
    "developer": {
      "betaOptIn": "Install beta versions",
      "checkForUpdates": "Check for updates",
    },
    "general": {
      "back": "Zurück",
      "pull_to_refresh": "Update",
      "shortAmount": "",
      "undo": "ungeschehen machen",
    },
    "map": {
      "outdoors": "Karte",
      "satellite": "Satellit",
    },
    "about": {
      "version": "Version",
    },
    "admin": {
      "since:date": "Teil der Organisation seit {{date}}",
      "changeOrgButton": "Organisation wechseln",
      "selectOrg": "Organisation auswählen",
      "check": {
        "manualInstructions": "Geben Sie unten einen Lizenzcode ein",
        "scanInstructions": "Tippen Sie auf die Schaltfläche, um einen QR Code mit Ihrer Kamera zu scannen",
      },
      "userLevel": {
        "0": "Level 0",
        "1": "Level 1",
        "2": "Level 2 (kompletter Zugriff)",
      },
      "stats": {
        "offline": "Wir speichern keine Statistiken in der App zur Offline-Nutzung. Bitte verbinden Sie sich mit dem Internet und versuchen Sie es erneut.",
        "noAccess": "Um Statistiken zu sehen, benötigen Sie mindestens Benutzerebene 1",
      },
    },
    "placeholder": {
      "email": "z.B. name@domain.de",
      "password": "••••••••",
      "recovery_code": "123456",
      "fullname": "z.B. John Smith",
      "activationCode": "z.B. 1234",
      "username": "z.B. John77",
      "phone": "z.B. +46 76 123 45 67",
      "permit": "z.B. 12345678",
      "zip": "z.B. 123 45",
      "adr": "z.B. Angelnstraße 55",
      "town": "e.g. Angelndorf",
    },
    "issues": {
      "long_text": "<p>Haben Sie einen Fehler oder Problem mit der App?</p><p>Sie können gerne jegliche Fehler auf <a href=\"https: //github.com/ifiske/ifiske/issues\">GitHub</a> berichten</p><p>Sie müssen bei GitHub angemeldet sein um einen Bericht schreiben zu können - im Gegenzug erhalten Sie aber auch Feedback sobald das Problem behoben wird! Einen Account auf GitHub zu erstellen ist kostenlos.</p><p>Falls Sie GitHub nicht nutzen können, nehmen wir Berichte auch unter <a href=\"mailto:app@ifiske.se\">app@ifiske.se</a> entgegen. Stellen Sie sicher, den Fehler sorgfältig zu beschreiben und teilen Sie uns bitte mit was für ein Telefon Sie verwenden. Fehlerberichte wie “Es funktioniert nicht” sind nicht sehr nützlich.</p>",
    },
    "permit": {
      "validBetween": "Gültig zwischen",
      "purchased": "Gekauft",
      "validity": {
        "active": "Gültig",
        "inactive": "Inaktiv",
        "revoked": "Widerrufen",
        "expired": "Abgelaufen",
        "plural": {
          "active": "Gültige",
          "inactive": "Inaktive",
          "revoked": "Widerrufene",
          "expired": "Abgelaufene",
        },
      },
    },
    "share:area": "Lasst uns in {{area}} Fischen gehen!",
    "deliveryAddress": {
      "zip": "Postleitzahl",
      "adr": "Straße und Hausnummer",
      "town": "Stadt",
    },
    "changePassword": {
      "completed": "Das Passwort wurde geändert!",
    },
    "onboarding": {
      "continue": "Lass uns anfangen",
      "next": "Nächster",
      "skip": "Uberspringen",
      "welcome" : {
        "title": "Herzlich willkommen!",
        "subtitle": "Willkommen bei iFiske. Wir sind Schwedens größtes Portal für Angelkarten",
      },
      "explore": {
        "title": "Erkunden!",
        "content":"<ul><li>Finden Sie neue aufregende Gewässer</li><li>Planen Sie Ihren nächsten Angelausflug</li><li>Entdecken Sie Karten, Fischarten, Regeln und vieles mehr</li></ul>",
      },
      "secure": {
        "title": "Sicher!",
        "subtitle": "Kaufen Sie Ihren Angelkarten sicher online und lassen Sie ihn an diese App liefern. Hunderttausende Kunden vertrauen uns und sind als schwedischer \"Trygg eHandel\" zertifiziert.",
      },
      "notify": {
        "title": "Bleib informiert!",
        "subtitle": "Speichern Sie Ihre Lieblingsgewässer und erhalten Sie kostenlos neue Fangberichte direkt in Ihre Mailbox",
      },
    },
    "reviews": {
      "title": "Findest du die App gut?",
      "message": "Ihr Feedback hilft uns dabei, das Angeln zu erleichtern. Bitte hinterlassen Sie eine Bewertung!",
      "yes": "Ja",
      "no": "Nein",
    },
    "analytics": {
      "title": "Helfen Sie uns, die App zu verbessern!",
      "description": `Um die App zu verbessern, möchten wir einige Informationen über Ihre Nutzung sammeln. Diese Informationen umfassen::
      <ul>
        <li> Wie Sie navigieren </ li>
        <li> Ihre Suchanfragen </ li>
        <li> Aggregierte demografische Daten </ li>
      </ul>

      Weitere Informationen finden Sie in unseren <a>privacy policy</a>.`,
      "accept": "OK",
      "decline": "Ablehnen",
    },
    "reports":  {
      "technique": "Angeltechnik",
      "bait": "Köder",
      "empty": "Leer",
      "no_catch": "Kein Fang",
      "amount": {
        "single": "Fisch",
        "multiple": "Fische",
      },
      "released": "Fangen und Freilassen", 
    },
    "settings": {
      "change_region": "Land wählen", 
      "change_region_warning_title": "Jetzt wird das ausgewählte Land geändert", 
      "change_region_warning_message": "Sie werden von Ihrem aktuellen Benutzerkonto abgemeldet und müssen sich erneut anmelden.", 
      "regions": {
        "se": "Schweden",
        "ax": "Åland (Finnland)",
      },
    },
  },
  "errors": {
    "unknown": "Es gab einen Fehler, bitte später noch einmal versuchen",
    "network": "Es gab einen Netzwerkfehler, bitte später noch einmal versuchen",
    "admin": {
      "noPermits": "Keine Lizenzen gefunden",
      "permit": {
        "failedHeader": "Keine Lizenz mit dem Code <strong>{{code}}</strong> gefunden.",
        "failedBody": "Das kann durch Eingabe eines ungültigen Codes oder durch eine andere Organisation verursacht worden sein.\n\nWenn Sie der Meinung sind, dass Sie diese Lizenz einsehen müssten, dann überprüfen Sie bitte die Korrektheit des eingegebenen Codes.",
      },
      "scanQR": {
        "invalid": "Der QR Code konnte nicht gescannt werden",
      },
    },
    "area": {
      "notSelling": "Diese Organisation verkauft leider keine Fischerscheine durch iFiske",
    },
    "recovery_code": {
      "required": "Sie müssen einen Wiederherstellungscode eingeben",
      "invalid": "Ungültiger Recovery-Code",
    },
    "activationCode": {
      "required": "Sie müssen einen Aktivierungscode eingeben",
      "invalid": "Ungültiger Aktivierungscode",
      "invalidRequest": "Ungültiger Benutzername oder Aktivierungscode",
      "pattern": "Muss genau 4 Ziffern lang sein",
    },
    "password": {
      "required": "Sie müssen ein Passwort eingeben",
      "invalid": "Ungültiges Passwort",
      "pattern_mismatch": "Zwischen 6 und 16 Zeichen",
    },
    "username": {
      "required": "Sie müssen einen Benutzernamen auswählen",
      "invalid": "Ungültiger Benutzername",
      "pattern_mismatch": "Zwischen 5 und 25 Zeichen",
      "taken": "Der Benutzername ist bereits vergeben",
    },
    "fullname": {
      "required": "Sie müssen einen Namen eingeben",
      "pattern_mismatch": "Zwischen 5 und 50 Zeichen",
    },
    "email": {
      "required": "Sie müssen eine E-mail Adresse angeben",
      "taken": "Die E-mail Adresse ist bereits registriert",
      "invalid": "Ungültige E-mail Adresse",
    },
    "phone": {
      "invalid": "Ungültige Telefonnummer",
      "pattern": "Zwischen 5 und 25 Stellen",
      "required": "Sie müssen eine Telefonnummer eingeben",
    },
    "favorite": {
      "notification_update": "Ein Fehler ist aufgetreten. Ihre Benachrichtigungs-einstellungen wurden nicht geändert.",
    },
    "permit": {
      "failedBody": "Der Fehler wird wahrscheinlich durch eine fehlerhafte Internetverbindung verursacht. Bitte überprüfen Sie Ihr Netzwerk und versuchen Sie es erneut.",
      "failedHeader": "Ihre Angelkarte konnte nicht gefunden werden",
    },
    "register": {
      "failed": "Registrierung fehlgeschlagen!",
    },
  },
  "Statistics": "Statistiken",
  "recovery": {
    "start": "Ihr Recovery-Code wird Ihnen bald per",
    "and": " und ",
    "end": "zugeschickt.",
    "mail_spam_notice": "Wenn Sie die E-mail nicht finden, überprüfen Sie den Spam-Ordner",
  },
  "Create Account": "Account erstellen",
  "About the app": "Impressum",
  "Accept": "Zusage",
  "Activate": "Aktivieren",
  "Activating": "Aktivieren...",
  "Activation code lost": "Falls Sie ihren Aktivierungscode verloren haben, ist es ebenso möglich einen neuen Account mit denselben Zugangsdaten wie zuvor zu erstellen.",
  "Activation code sent": "Ein Aktivierungscode wird innerhalb weniger Minuten per SMS an Ihr {{phone}} verschickt.",
  "Activation code": "Aktivierungscode",
  "Activation took too long": "Falls das Empfangen Ihrer Nachricht zu lange dauert, klicken Sie hier und wir versuchen sie erneut zu senden.",
  "Admin": "Administrator",
  "Administration": "Administration",
  "Angler record": "Angeleintragung",
  "Are you sure?": "Sind Sie sicher?",
  "Area added to favorites": "Die Fläche ist als Favorit markiert",
  "Area removed from favorites": "Die Fläche ist nicht mehr als Favorit markiert",
  "Cancel": "Beenden",
  "Catch report": "Fangprotokoll",
  "Language": "Sprache",
  "Change language": "Sprache auswählen",
  "Change user info": "Um die Nutzerinformationen zu ändern, gehen sie bitte zu www.ifiske.se - Dort können Sie Ihrem Account auch mehr Telefonnummern etc. hinzufügen.",
  "Check permit": "Überprüfen Fischerschein",
  "Check": "Überprüfen",
  "Code": "Code",
  "Contact Information": "Kontakt",
  "Contact": "Kontaktieren Sie uns",
  "Could not set up push notifications": "Push-Benachrichtigungen konnten nicht eingerichtet werden",
  "Counties": "Landkreise",
  "County": "Landkreis",
  "Create new account": "Neuen Account erstellen",
  "Description": "Beschreibung",
  "Delivery Address": "Adressen",
  "Email": "E-mail",
  "Error": "Fehler",
  "Favorites": "Favoriten",
  "First name": "Vorname",
  "Fishing Area": "Angelgebiet",
  "Fishing Areas": "Angelgebiete",
  "Fishing Methods": "Fischermethoden",
  "Forgot password": "Passwort vergessen?",
  "Full name": "Vollständiger Name",
  "Home": "Zuhause",
  "I have a recovery code": "Ich besitze einen Recovery-Code",
  "iFiske - Easier Fishing": "iFiske - Leichter Fischen",
  "in": "in",
  "Information": "Information",
  "invalid": "Ungültig",
  "Issued at": "Ausgestellt am <b>{{date}}</b>",
  "Issued to": "Ausgestellt an {{name}}",
  "Last updated": "Letztes Update",
  "Permit has expired": "Fischerschein ist abgelaufen",
  "Log in": "Anmelden",
  "Logging in": "Anmelden...",
  "Log out": "Abmelden",
  "Login required for favorite": "Sie müssen angemeldet sein um Fischerflöchen als Favoriten zu markieren",
  "Make sure you have the correct name": "Stellen Sie sicher den korrekten Namen eingegeben zu haben, bevor Sie ihre Textnachricht versenden!",
  "Map": "Karte",
  "More in control panel": "Mehr Funktionalität ist im Kontrollfenster auf www.ifiske.se erhältlich",
  "My Fishing Permits": "Mein Fischerschein",
  "Name": "Name",
  "New account": "Neuer Account",
  "New password": "Neues Passwort",
  "Next": "Nächste",
  "No data": "Keine Daten verfügbar",
  "No favorites": "Sie haben keine Gewässer als Favoriten markiert",
  "No permits": "Wenn Sie Fischerscheine kaufen, werden sie hier gelistet",
  "Notifications are turned off": "Benachrichtigungen sind ausgeschaltet",
  "Notifications are turned on": "Benachrichtigungen sind eingeschaltet",
  "Notify via email": "Benachrichtigungen per E-mail",
  "OK": "OK",
  "Open control panel": "Offenes Kontrollfenster",
  "Open Source Licenses": "Open-Source Lizenzen",
  "Password changed": "Ihr Passwort wurde geändert",
  "Password": "Passwort",
  "PDF": "PDF",
  "Phone number": "Telefonnummer",
  "Prevalence": "Häufigkeit",
  "Profile": "Profil",
  "Purchase": "Kaufen",
  "Purchase permit": "Fischerschein kaufen",
  "Push notifications": "Push-Benachrichtigungen",
  "Register": "Registrieren",
  "Registering account approves": "Wenn Sie sich registrieren, stimmen Sie unseren allgemeinen Geschäftsbedingungen zu",
  "Report issue": "Problem berichten",
  "Recovery code": "Recovery-Code",
  "Recover password": "Passwort zurücksetzen",
  "Revoke": "Widerrufen",
  "Revoking": "Widerrufend",
  "Rules": "Regeln",
  "Scan QR code": "QR Code scannen",
  "Search results": "Ergebnisse Suchen",
  "Search": "Suche",
  "Send": "Schicken",
  "Settings": "Einstellungen",
  "Size and growth": "Größe und Wachstum",
  "SMS": "SMS",
  "Species": "Gattung",
  "Surname": "Nachname",
  "Technique advanced": "Fortgeschrittene Hinweise",
  "Technique description": "Beschreibung (Grundlagen)",
  "Technique gear": "Ausrüstung",
  "Terms of service": "Konditionen",
  "Text message format": "Senden Sie eine SMS mit folgendem Format:", // Google Translated
  "This will revoke the permit": "Dadurch wird die Lizenz widerrufen",
  "This will unrevoke the permit": "Dadurch wird der Widerruf der Lizenz aufgehoben",
  "to": "an",
  "Try again": "Erneut versuchen",
  "Unhandled API error": "Unerwarteter API Fehler, bitte später erneut versuchen",
  "Unrevoke": "Nicht widerrufen",
  "Unrevoking": "Nicht widerrufen",
  "Update stored data": "Gespeicherte Daten aktualisieren",
  "Use existing registration code": "Existierenden Code verwenden",
  "User already has recovery code": "Falls Sie bereits einen Recovery-Code besitzen, überspringen Sie diesen Schritt.",
  "User does not exist": "Der Benutzer existiert nicht",
  "User information": "Benutzerinformation",
  "User phone numbers": "Verbundene Telefonnummern (On iFiske.se)",
  "Username or email": "Benutzername oder E-mail",
  "Username": "Benutzername",
  "Version": "Version",
  "Youtube": "YouTube",
  "Verify Account": "Account verifizieren",
  "Logging out": "Abmelden...",
  "Searching": "Suchen...",

  "Change Password": "Passwort ändern",
  "Files": "Dateien",
  "I accept the terms of service": "Ich habe die Datenschutzerklärung und TOS gelesen und akzeptiere diese",
  "New Password": "Neues Passwort",
  "Registering": "Registrieren...",
  "Analytics": "Analytik sammeln",
  "Reports": "Fangberichte",
}
