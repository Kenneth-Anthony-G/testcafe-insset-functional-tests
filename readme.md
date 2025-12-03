# 📝 Tests Fonctionnels du Site de l'INSSET avec TestCafé

Ce projet a été réalisé dans le cadre du cours de **Systèmes d’Information** et vise à garantir la qualité fonctionnelle du site web de l'INSSET (Institut Supérieur des Sciences et Techniques). Pour cela, une suite de tests automatisés **End-to-End (E2E)** a été développée en utilisant le framework **TestCafé**.

## 🎯 Objectifs du Projet

* **Validation des Pages Clés :** Vérifier le bon chargement et fonctionnement des principales pages du site.
* **Tests d'Interaction :** Tester les actions utilisateur essentielles (navigation, clics, soumissions de formulaires, téléchargement de documents).
* **Contrôle Visuel et Fonctionnel :** Contrôler la présence et l'accessibilité d'éléments clés (ex: logo INSSET, sélecteurs, menus).
* **Génération de Rapports :** Produire des rapports d'exécution détaillés aux formats **XML** (XUnit) et **HTML**.
* **Analyse de Contenu :** Extraire et vérifier le contenu des documents **PDF** téléchargés.
* **Débogage Automatisé :** Capturer automatiquement des captures d'écran et des vidéos en cas d'échec de test.

## 🛠️ Technologies Utilisées

| Technologie | Rôle |
| :--- | :--- |
| **TestCafé** | Framework de tests End-to-End (E2E). |
| **TypeScript** | Langage de programmation pour les scripts de test. |
| **Node.js** | Environnement d'exécution JavaScript. |
| **pdf-parse** | Librairie pour l'analyse et l'extraction de texte à partir de PDF. |
| **testcafe-reporter-xunit** | Générateur de rapport au format XML (XUnit). |
| **testcafe-reporter-html** | Générateur de rapport au format HTML. |

## 📦 Fonctionnalités Testées

* **Chargement des Pages :** Validation du chargement correct et rapide des pages principales.
* **Navigation :** Tests de l'accessibilité et de la continuité de la navigation entre les différentes sections.
* **Éléments Statiques :** Vérification de la présence et de l'accessibilité du **logo INSSET** et autres éléments visuels clés.
* **Téléchargement de PDF :** Test du processus de téléchargement de documents.
* **Vérification de Contenu :** Extraction et validation du texte à l'intérieur des documents PDF téléchargés.
* **Ergonomie :** Tests des sélecteurs, menus, et autres éléments interactifs pour assurer une bonne expérience utilisateur.

## 📂 Structure du Projet
```
/
│
├─ /Tests                  # Scripts de tests TestCafé
│   ├─ Test2.ts           
│   └─ inssetTest.ts         
│
│
├─ /screenshots            # Captures d’écran et vidéos des tests
│
├─ /Rapports               # Rapports de test HTML et XML
│
├─ package.json            # Dépendances et scripts npm
├─ package-lock.json       
├─ tsconfig.json           # Configuration TypeScript
└─ .testcaferc.json        # Configuration TestCafé
```
## 📦 Fonctionnalités Testées

* **Chargement des Pages :** Validation du chargement correct et rapide des pages principales.
* **Navigation :** Tests de l'accessibilité et de la continuité de la navigation entre les différentes sections du site.
* **Éléments Statiques :** Vérification de la présence et de l'accessibilité du **logo INSSET**.
* **Téléchargement de PDF :** Test du processus de téléchargement de documents PDF.
* **Vérification de Contenu :** Extraction et validation du texte à l'intérieur des documents PDF téléchargés.
* **Ergonomie :** Tests des sélecteurs, menus, et autres éléments interactifs pour assurer une bonne expérience utilisateur.

## ⚙️ Configuration TestCafé

Le fichier de configuration `.testcaferc.json` est paramétré pour optimiser l'exécution et le reporting :

* **Navigateurs :** Support de multiples navigateurs (Chrome personnalisé, Firefox headless, Remote).
* **Reporting :** Activation de la génération automatique des rapports **XML** et **HTML**.
* **Debugging :** Configuration de la capture d'écran et de la vidéo en cas d'échec de test.
* **Tolérance :** `Timeout` ajustés pour les appels réseau et les chargements de pages lents.
* **Options Avancées :** Inclusion de paramètres comme `ignore-certificate-error` et `disableNativeAutomation`.

## 🚀 Démarrage Rapide

### 1. Installation

Pour commencer, clonez le dépôt et installez les dépendances nécessaires :

```bash
# 1. Cloner le dépôt
git clone 

# 2. Installer toutes les dépendances
npm install
Exécution des tests
```


### 2. Execution des test

**Lancer la campagne complète :** 
Exécute tous les tests disponibles avec les options configurées dans `.testcaferc.json` 
```bash 
testcafe 
```

**Exécuter un test précis :**
```bash
testcafe chrome tests/NomDuTest.ts
   ```

## 📜 Génération des Rapports

Les résultats des tests et les artefacts de débogage sont stockés aux emplacements suivants :

* **Rapport XML (XUnit) :** `./Rapports/report.xml`
* **Rapport HTML :** `./Rapports/rap.html`
* **Captures et vidéos :** dans `./screenshots/` (générées uniquement en cas d'échec)


