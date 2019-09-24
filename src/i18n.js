import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import {
    capitalInPassword,
    charInPassword,
    lengthInPassword,
    matchPassword,
    numberInPassword
} from "./Containers/SignUp/validation";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
    en: {
        translation: {
            //header
            "Back to JRC Capital Management": "Back to JRC Capital Management",
            //Footer
            "All rights reserved": "All rights reserved",
            "Investing in the financial markets involves risks": "Investing in the financial markets involves risks",
            "Please read our": "Please read our",
            "Risk Information": "Risk Information",
            //Form field
            "Email": "E-mail",
            "Password": "Password",
            "Password Confirmation": "Password Confirmation",
            //
            "Login": "Login",
            "Welcome": "Welcome",
            "Forgot the password?": "Forgot the password?",
            "Forgot the password": "Forgot the password",
            "You can always reset your password. We will send you a link to your verified e-mail address": "You can always reset your password. We will send you a link to your verified e-mail address",
            "Not registered yet?": "Not registered yet?",
            "Please enter your e-mail adress": "Please enter your e-mail adress.",
            "What's next?": "What's next?",
            "Enter your email address and we'll send you a link to reset your password": "Enter your email address and we'll send you a link to reset your password",
            "Back to Login": "Back to Login",
            "Your password was successfully changed": "Your password was successfully changed",
            "We have sent you a verification link to your e-mail address. Please check your inbox and spam folder and follow the points in the email.": "We have sent you a verification link to your e-mail address. Please check your inbox and spam folder and follow the points in the email.",
            "New link for restoring password was sended on your email. Please pay attention - link will expired in one hour.": "New link for restoring password was sended on your email. Please pay attention - link will expired in one hour. ",
            //Sing Up
            "Registration": "Registration",
            "Please assign a password": "Please assign a password",
            "What is it needed for?": "What is it needed for?",
            "With your verified e-mail address and personal password, you will always have the option to log in and continue the process": "With your verified e-mail address and personal password, you will always have the option to log in and continue the process",
            "E-mail is valid but already exist": "E-mail is valid but already exist",
            //reset password form header
            "Update password": "Update password",
            "Please choose a new password": "Please choose a new password.",
            "After setting the new password, you can log in with your new password": "After setting the new password, you can log in with your new password",
            //buttons
            "Sign in": "Sign in",
            "Sign up": "Sign up",
            "Update": "Update",
            "Send": "Send",
            //validation
            "At least 1 capital letter": "At least 1 capital letter",
            "At least 1 special character*": "At least 1 special character*",
            "At least 1 capital number": "At least 1 capital number",
            "More than 8 symbols long": "More then 8 symbols long",
            "Passwords should match": "Passwords should match",
        }
    },
    de: {
        translation: {
            //header
            "Back to JRC Capital Management": "Zurück zu JRC Capital Management",
            //Footer
            "All rights reserved": "Alle Rechte vorbehalten",
            "Investing in the financial markets involves risks": "Die Geldanlage an den Finanzmärkten ist mit Risiken verbunden",
            "Please read our": "Lesen Sie dazu unseren",
            "Risk Information": "Risikohinweis",
            //Form field
            "Email": "E-mail",
            "Password": "Passwort",
            "Password Confirmation": "Passwort Bestätigung",
            //
            "Login": "Einloggen",
            "Welcome": "Willkommen",
            "Forgot the password?": "Passwort vergessen?",
            "Forgot the password": "Passwort vergessen",
            "You can always reset your password. We will send you a link to your verified e-mail address": "Sie können Ihr Passwort jederzeit zurücksetzen. Wir senden Ihnen einen Link zu Ihrer bestätigten E-Mail-Adresse",
            "Not registered yet?": "Noch nicht registriert?",
            "Please enter your e-mail adress": "Bitte geben Sie Ihre E-Mail Adresse an",
            "What's next?": "Wie geht es weiter?",
            "Enter your email address and we'll send you a link to reset your password": "Geben Sie Ihre E-Mail_Adresse an und wir senden Ihnen einen Link zum Zurücksetzen Ihres Passworts",
            "Back to Login": "Zurück zum Login",
            "Your password was successfully changed": "Dein Passwort wurde erfolgreich geändert",
            "We have sent you a verification link to your e-mail address. Please check your inbox and spam folder and follow the points in the email.": "Wir haben Ihnen einen Verifizierungslink an Ihre E-Mail-Adresse gesendet. Bitte überprüfen Sie Ihren Posteingang und Spam-Ordner und folgen Sie den Punkten in der E-Mail.",
            "New link for restoring password was sended on your email. Please pay attention - link will expired in one hour.": "Ein neuer Link zum Wiederherstellen des Passworts wurde an Ihre E-Mail gesendet. Bitte beachten Sie - der Link ist in einer Stunde abgelaufen.",
            //Sing Up
            "Registration": "Anmeldung",
            "Please assign a password": "Bitte wählen Sie ein neues Passwort",
            "What is it needed for?": "Wofür wird es benötigt?",
            "With your verified e-mail address and personal password, you will always have the option to log in and continue the process": "Mit Ihrer bestätigten E-Mail-Adresse und Ihrem persönlichen Passwort haben Sie immer die Möglichkeit, sich anzumelden und den Vorgang fortzusetzen",
            "E-mail is valid but already exist": "E-Mail ist gültig, aber bereits vorhanden",
            //reset password form header
            "Update password": "Passwort erneuern",
            "Please choose a new password": "Bitte wählen Sie ein neues Passwort",
            "After setting the new password, you can log in with your new password": "Nachdem Sie das neue Passwort festgelegt haben, können Sie sich mit Ihrem neuen Passwort anmelden",
            //buttons
            "Sign in": "Einloggen",
            "Sign up": "Anmelden",
            "Update": "Aktualisieren",
            "Send": "Schicken",
            //validation
            "At least 1 capital letter": "Mindestens 1 Großbuchstabe",
            "At least 1 special character*": "Mindestens 1 Sonderzeichen*",
            "At least 1 capital number": "Mindestens 1 Kapitalnummer",
            "More than 8 symbols long": "Mehr als 8 Symbole lang",
            "Passwords should match": "Passwörter sollten übereinstimmen",
        }
    },
    he: {
        translation: {
            //header
            "Back to JRC Capital Management": "חזרה JRC הון ניהול",
            //Footer
            "All rights reserved": "כל הזכויות שמורות",
            "Investing in the financial markets involves risks": "השקעה בשווקים הפיננסיים כרוכה בסיכונים",
            "Please read our": "אנא קרא את",
            "Risk Information": "מידע על סיכונים",
            //Form field
            "Email": "דוא\"ל",
            "Password": "סיסמה",
            "Password Confirmation": "אימות סיסמה",
            //
            "Login": "התחברות",
            "Welcome": "ברוך הבא",
            "Forgot the password?": "?שכחת את הסיסמה",
            "Forgot the password": "שכחתי את הסיסמה",
            "You can always reset your password. We will send you a link to your verified e-mail address": "אתה תמיד יכול לאפס את הסיסמה שלך. אנו נשלח לך קישור לכתובת האימייל המאומתת שלך",
            "Not registered yet?": "?עדיין לא רשום",
            "Please enter your e-mail adress": "אנא הכנס את כתובת הדואר האלקטרוני שלך",
            "What's next?": "?מה הלאה",
            "Back to Login": "חזור להתחברות",
            "Your password was successfully changed": "הסיסמה שלך שונתה בהצלחה",
            "Enter your email address and we'll send you a link to reset your password": "הזן את כתובת האימייל שלך ואנו נשלח לך קישור לאיפוס הסיסמה",
            "We have sent you a verification link to your e-mail address. Please check your inbox and spam folder and follow the points in the email.": ".שלחנו לך קישור לאימות לכתובת הדואר האלקטרוני שלך .בדוק את תיבת הדואר הנכנס ואת תיקיית דואר הזבל ופעל לפי הנקודות בדוא\"ל",
            "New link for restoring password was sended on your email. Please pay attention - link will expired in one hour.": ".אנא שים לב - הקישור יפוג בעוד שעה .אנא היזהר - הקישור יפוג בעוד שעה",
            //Sing Up
            "Registration": "הרשמה",
            "Please assign a password": "אנא הקצה סיסמה",
            "What is it needed for?": "?בשביל מה זה צריך",
            "With your verified e-mail address and personal password, you will always have the option to log in and continue the process": "עם כתובת הדוא\"ל המאומתת והסיסמה האישית שלך, תמיד תהיה לך אפשרות להיכנס ולהמשיך בתהליך",
            "E-mail is valid but already exist": "האימייל חוקי אך כבר קיים",
            //reset password form header
            "Reset password": "לאפס את הסיסמה",
            "Please choose a new password": "בחר סיסמה חדשה",
            "After setting the new password, you can log in with your new password": "לאחר הגדרת הסיסמה החדשה, תוכל להיכנס באמצעות הסיסמה החדשה",
            //buttons
            "Sign in": "התחברות",
            "Sign up": "הירשם",
            "Update": "עדכון",
            "Send": "שלח",
            //validation
            "At least 1 capital letter": "לפחות אות גדולה 1",
            "At least 1 special character*": "לפחות 1 אופי מיוחד*",
            "At least 1 capital number": "לפחות 1 מספר הון",
            "More than 8 symbols long": "יותר מ 8 סמלים ארוכים",
            "Passwords should match": "סיסמאות צריכות להתאים",
        }
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "en",

        keySeparator: false, // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;