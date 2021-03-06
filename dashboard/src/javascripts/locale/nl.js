// Interpolation works as follows:
//
// Make a key with the translation and enclose the variable with {{}}
// ie "Hello {{name}}" Do not add any spaces around the variable name.
// Provide the values as: I18n.t("key", {name: "John Doe"})


I18n.translations.nl = {
  code: "NL",
  name: "Nederlands",
  select_locale: "Selecteer Nederlands",

  boolean: {
    yes: "Ja",
    no: "Nee"
  },

  browser_not_supported: {
    title: "Uw browser wordt niet ondersteund.",
    description_html: "Uw versie van Internet Explorer {{ieVersion}} wordt niet ondersteunt. Update uw browser naar een modernere versie."
  },

  date: {
    month_names: [null, "januari", "fabruari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "ocktober", "november", "december"]
  },

  header: {
    title: "Dashboard",
    welcome: "Welkom,",
    links: {
      help_html: "<a href=\"https://wiki.surfnet.nl/display/surfconextdev/Beschikbare+diensten+activeren#Beschikbaredienstenactiveren-HandleidingSURFconextDashboard\" target=\"_blank\">Help</a>",
      logout: "Uitloggen",
      exit: "Exit"
    },
    you: "Jij",
    profile: "Profiel",
    switch_idp: "Kies IDP"
  },

  navigation: {
    apps: "Services",
    policies: "Autorisatieregels",
    notifications: "Notificaties",
    history: "Logboek",
    stats: "Statistieken",
    my_idp: "Mijn instelling"
  },

  facets: {
    title: "Filters",
    reset: "Reset",
    download: "Export overzicht",
    unknown: "Unknown",
    totals: {
      all: "Alle {{total}} services worden weergegeven",
      filtered: "{{count}} uit {{total}} services worden weergegeven"
    },
    static: {
      connection: {
        all: "Alle",
        has_connection: "Ja",
        name: "Dienst gekoppeld",
        no_connection: "Nee",
      },
      license: {
        name: "Licentie",
        unknown: "Onbekend",
        not_needed: "Niet nodig",
        has_license_sp: "Ja, bij service provider",
        has_license_surfmarket: "Ja, bij SURFmarket"
      },
      used_by_idp: {
        all: "Alle",
        name: "Aangeboden door mijn instelling",
        no: "Nee",
        yes: "Ja",
      },
      published_edugain: {
        all: "Alle",
        name: "Gepubliceerd in eduGAIN federatie",
        no: "Nee",
        yes: "Ja",
      }
    }
  },

  apps: {
    detail: {
      application_usage: "Service gebruik",
      attribute_policy: "Attributen",
      close_screenshot: "Sluiten",
      how_to_connect: "Dienst koppelen",
      how_to_disconnect: "Dienst ontkoppelen",
      idp_usage: "Gebruikt door",
      license_info: "Licentie",
      overview: "Overzicht",
    },
    overview: {
      connect: "",
      connect_button: "Activeren",
      connected: "Dienst gekoppeld",
      license: "Licentie afgesloten",
      licenseStatus: "Licentie vereist",
      license_present: {
        na: "n.v.t.",
        no: "Nee",
        unknown: "Onbekend",
        yes: "Ja",
      },
      license_unknown: "Onbekend",
      name: "Service",
      no_results: "Geen services beschikbaar",
      search: "Zoek",
      search_hint: "Zoeken",
    },
  },

  app_meta: {
    question: "Heb je een vraag?",
    eula: "Algemene voorwaarden",
    website: "Website",
    support: "Support pagina",
    login: "Login pagina"
  },

  license_info_panel: {
    title: "Licentie informatie",
    has_license_surfmarket_html: "Er is via <a href=\"https://www.surfmarket.nl\" target=\"_blank\">SURFmarket</a> een licentie afgesloten voor deze service.",
    has_license_sp_html: "Er is via <a href=\"{{serviceUrl}}\" target=\"_blank\">{{serviceName}}</a> een licentie afgesloten voor deze service.",
    no_license_html: "Jouw instelling heeft voor deze service geen licentie via <a href=\"https://www.surfmarket.nl\" target=\"_blank\">SURFmarket</a>.",
    not_needed_html: "Voor deze dienst is geen licentie nodig",
    unknown_license: "Het is onbekend welke licentie voor deze service geldt.",
    no_license_description_html: "" +
      "<ul>" +
      "   <li>Laat de licentiecontactpersoon van jouw instelling een licentie afsluiten bij <a href=\"https://www.surfmarket.nl\" target=\"_blank\">SURFmarket</a></li>" +
      "</ul>" +
      "<br />In sommige gevallen is de licentie direct bij de aanbieder van de service afgesloten.",
    unknown_license_description_html: "Er zijn verschillende opties:" +
      "<ul>" +
      "   <li>SURF of een andere instelling biedt deze service gratis aan.</li>" +
      "   <li>De licentie moet direct bij de aanbieder van de service worden afgesloten.</li>" +
      "   <li>De licentie is nog niet bijgewerkt in de administratie van <a href=\"https://www.surfmarket.nl\" target=\"_blank\">SURFmarket</a>.</li>" +
      "</ul>" +
      "<p>SURFnet zal, indien nodig, contact opnemen met de aanbieder of <a href=\"https://www.surfmarket.nl\" target=\"_blank\">SURFmarket</a> alvorens de koppeling te activeren.</p>"
  },

  license_info: {
    unknown_license: "Geen licentieinformatie beschikbaar",
    has_license_surfmarket: "Licentie beschikbaar via SURFmarket",
    has_license_sp: "Licentie beschikbaar via service supplier",
    no_license: "Licentie is niet aanwezig",
    no_license_needed: "Geen licentie nodig",
    license_info: "Lees hoe je een licentie kunt verkrijgen",
    license_unknown_info: "Lees meer",
    valid: "Licentie is geldig t/m {{date}}"
  },

  overview_panel: {
    wiki_info_html: "Voor deze service is extra informatie beschikbaar in de SURFconext <a href=\"{{link}}\" target=\"_blank\">wiki</a>.",
    no_description: "Er is geen beschijving voor deze service.",
    description: "Beschrijving",
    has_connection: "Dienst gekoppeld",
    no_connection: "Dienst niet gekoppeld",
    how_to_connect: "Lees hoe je een dienst koppelt",
    disconnect: "Lees hoe je een dienst ontkoppelt",
    normen_kader: "Juridisch normenkader cloudservices hoger onderwijs",
    normen_kader_html: "{{name}} heeft zijn compliance en non-compliance met het Juridisch normenkader cloudservices hoger onderwijs <a href=\"{{link}}\" target=\"_blank\">hier</a> gepubliceerd. Voor meer informatie over het framework zie de <a href=\"https://www.surf.nl/kennis-en-innovatie/kennisbank/2013/juridisch-normenkader-cloud-services-hoger-onderwijs.html\" target=\"_blank\">SURFnet website</a>",
    no_normen_kader_html: "Het is onbekend in welke mate {{name}} voldoet aan het Juridisch normenkader cloudservices hoger onderwijs. Voor meer informatie over het framework zie de <a href=\"https://www.surf.nl/kennis-en-innovatie/kennisbank/2013/juridisch-normenkader-cloud-services-hoger-onderwijs.html\" target=\"_blank\">SURFnet website</a>",
    single_tenant_service: "Single tenant dienst",
    single_tenant_service_html: "{{name}} is een single tenant dienst en als een consequentie daarvan is er een aparte applicatie instantie vereist voor elk instituut dat een connectie wil met deze dienst. Zie de <a href=\"https://wiki.surfnet.nl/display/services/(Cloud)services\" target=\"_blank\">SURFnet wiki</a> voor meer informatie over single tenant diensten."
  },

  attributes_policy_panel: {
    arp: {
      noarp: "Er is geen 'Attribute Release Policy' bekend. Mogelijk worden alle bekende attributen uitgewisseld, of is er een 'attribute manipulation script' voor deze Service Provider actief.",
      noattr: "Er zullen geen attributen worden uitgewisseld met {{name}}.",
    },
    attribute: "Attribuut",
    hint: "De attributen en hun waarden voor jouw persoonlijke account worden getoond. Dit is misschien niet representatief voor andere accounts binnen jouw instelling.",
    subtitle: "De volgende attributen worden uitgewisseld met {{name}}. Let wel: alle attributen moeten met de juiste waarden gevuld zijn. Als dit niet het geval is, zijn er extra stappen nodig om de connectie te activeren.",
    title: "Attributen",
    your_value: "Jouw waarde",
  },

  idp_usage_panel: {
    title: "Gebruikt door",
    subtitle: "De volgende instellingen zijn gekoppeld aan {{name}}.",
    subtitle_none: "Er zijn geen instellingen gekoppeld aan {{name}}.",
    institution: "Instelling"
  },

  how_to_connect_panel: {
    accept: "Ik bevestig dat ik de voorwaarden heb gelezen en deze in naam van mijn instelling accepteer.",
    accept_disconnect: "Ja, ik ga akkoord dat {{app}} niet meer beschikbaar zal zijn voor mijn organisatie",
    attributes: "attributen",
    attributes_policy: "het attribuutbeleid",
    back_to_apps: "Terug naar alle services",
    cancel: "Annuleren",
    check: "Controleer",
    checklist: "Loop deze checklist na voordat je een connectie activeert:",
    comments_description: "Opmerkingen worden verstuurd naar SURFconext.",
    comments_placeholder: "Voer hier je opmerkingen in...",
    comments_title: "Eventuele opmerkingen?",
    connect: "Activeer connectie",
    connect_title: "Activeer {{app}}",
    disconnect: "Verbinding deactiveren",
    disconnect_title: "Deactiveer connectie met {{app}}",
    done_disconnect_subtitle_html: "Er zal contact worden opgenomen om deze aanvraag af te ronden. Als je voor die tijd nog vragen hebt, neem dan contact op met <a href=\"mailto:support@surfconext.nl\">support@surfconext.nl</a>.",
    done_disconnect_title: "Verzoek om verbinding te deactiveren is aangevraagd!",
    done_subtitle_html: "Er zal contact worden opgenomen om deze aanvraag af te ronden. Als je voor die tijd nog vragen hebt, neem dan contact op met <a href=\"mailto:support@surfconext.nl\">support@surfconext.nl</a>.",
    done_subtitle_with_jira_html: "Er zal contact worden opgenomen om deze aanvraag af te ronden. Als je voor die tijd nog vragen hebt, neem dan contact op met <a href=\"mailto:support@surfconext.nl?subject=Vraag over koppeling {{jiraKey}}\">support@surfconext.nl</a>. Stuur a.u.b. het ticketnummer mee in het onderwerp ({{jiraKey}}).",
    done_title: "Verbinding gemaakt!",
    forward_permission: {
      after: " door te sturen naar {{app}}.",
      before: "SURFnet heeft toestemming om de ",
    },
    info_sub_title: "Je kunt een verbinding activeren vanuit dit dashboard. We adviseren je om de checklist na te lopen en de specifieke informatie over deze service door te nemen voordat je een verbinding activeert.",
    info_title: "Verbinding activeren",
    license: "licentie",
    license_info: "de licentieinformatie",
    obtain_license: {
      after: " aan te schaffen voor het gebruik van {{app}}.",
      before: "Het is de verantwoordelijkheid van mijn instelling om eventueel een ",
    },
    provide_attributes: {
      after: " aan te leveren.",
      before: "Het is de verantwoordelijkheid van mijn instelling om de juiste ",
    },
    read: "Lees de",
    single_tenant_service_warning: "Verzoeken voor activatie van single tenant diensten duren langer om te verwerken. SURFnet zal contact opnemen zodra het dit verzoek heeft ontvangen.",
    terms_title: "Met het activeren van de connectie ga je akkoord met de volgende voorwaarden:",
    wiki: "wiki voor deze service",
  },

  application_usage_panel: {
    title: "Service gebruik",
    download: "Export",
    error_html: "Op dit moment zijn de statistieken niet beschikbaar. <a href=\"mailto:support@surfconext.nl\">Neem contact op</a> met de supportafdeling, voor meer informatie."
  },

  contact: {
    email: "Service support e-mail"
  },

  search_user: {
    switch_identity: "Switch identiteit",
    search: "Zoek",
    search_hint: "Filter op naam",
    name: "Naam",
    switch_to: "Switch naar rol",
    switch: {
      role_dashboard_viewer: "Viewer",
      role_dashboard_admin: "Admin"
    }
  },

  stats: {
    filters: {
      name: "Filters"
    },
    chart: {
      type: {
        name: "Grafiek type",
        idpspbar : "Logins voor alle SPs",
        idpsp: "Logins per SP"
      },
      periodFrom: {
        name: "Datum vanaf (yyyy-mm-dd)"
      },
      periodTo: {
        name: "Datum tot (yyyy-mm-dd)"
      },
      periodDate: {
        name: "Datum (yyyy-mm-dd)"
      },
      period: {
        name: "Periode",
        day: "Dag",
        week: "Week",
        month: "Maand",
        quarter: "Kwartaal",
        year: "Jaar"
      },
      sp: {
        name: "Service Provider"
      },
    }
  },

  server_error: {
    title: "Er is iets misgegaan tijdens het openen van de pagina.",
    description_html: "Probeer het later nog eens of neem contract op met <a href=\"mailto:support@surfconext.nl\">support@surfconext.nl</a>."
  },

  not_found: {
    title: "Deze pagina kon niet worden gevonden.",
    description_html: "Controleer of het adres correct gespeld is of ga terug naar de <a href=\"/\">homepage</a>."
  },

  logout: {
    title: "Succesvol uitgelogd.",
    description_html: "Je <strong>MOET</strong> de browser afsluiten om het uitlogproces af te ronden."
  },

  footer: {
    surfnet_html: "<a href=\"https://www.surfnet.nl/\" target=\"_blank\">SURFnet</a>",
    terms_html: "<a href=\"https://wiki.surfnet.nl/display/conextsupport/Terms+of+Service+%28NL%29\" target=\"_blank\">Gebruikersvoorwaarden</a>",
    contact_html: "<a href=\"mailto:support@surfconext.nl\">support@surfconext.nl</a>"
  },

  notifications: {
    title: "Notificaties",
    icon: "Icoon",
    name: "Naam",
    license: "Licentie",
    connection: "Connectie",
    messages: {
      fcp: "Onderstaande diensten zijn mogelijkerwijs nog niet beschikbaar, omdat de licentie of de technische connectie nog niet aanwezig is."
    }
  },

  my_idp: {
    title: "Mijn instelling",
    sub_title_html: "De volgende rollen zijn toegekend (<a target=\"_blank\" href=\"https://wiki.surfnet.nl/display/surfconextdev/Beschikbare+diensten+activeren#Beschikbaredienstenactiveren-HoekunjeopSURFconextaangeslotendienstenactiveren?\">toelichting</a>):",
    role: "Rol",
    users: "Gebruiker(s)",
    SURFconextverantwoordelijke: "SURFconextverantwoordelijke",
    SURFconextbeheerder: "SURFconextbeheerder",
    "Dashboard supergebruiker": "Dashboard supergebruiker",
    services_title: "Deze services worden aangeboden door jouw instelling:",
    service_name: "Naam service",
    license_contact_html: "Primaire licentiecontactpersoon (<a target=\"_blank\" href=\"https://wiki.surfnet.nl/display/surfconextdev/Beschikbare+diensten+activeren#Beschikbaredienstenactiveren-HoekunjeopSURFconextaangeslotendienstenactiveren?\">toelichting</a>):",
    license_contact_name: "Naam",
    license_contact_email: "Email",
    license_contact_phone: "Telefoonnummer"
  },

  policies: {
    beta: "Policies (autorisatieregels) is een nieuwe beta feature van SURFconext. Met policies kan je de toegang tot diensten beperken, gebaseerd op attributen van een gebuiker. <br>Zie <a class=\"link\" target=\"_blank\" href=\"https://wiki.surfnet.nl/display/surfconextdev/Autorisatieregels\">deze pagina</a> voor meer informatie.",
    confirmation: "Weet je zeker dat je autorisatieregel {{policyName}} wilt verwijderen?",
    flash: "Autorisatieregel '{{policyName}}' is succesvol {{action}}",
    flash_created: "aangemaakt",
    flash_deleted: "verwijderd",
    flash_first: "Dit is de eerste autorisatieregel voor deze dienst. Het SURFconext Team moet een handeling doen om de regel actief te maken. Er is een notificatie gestuurd naar het SURFconext Team. Er wordt contact met u opgenomen.",
    flash_updated: "bijgewerkt",
    new_policy: "Nieuwe autorisatieregel",
    overview: {
      active: "Actief",
      description: "Omschrijving",
      identityProviderNames: "Instelling(en)",
      name: "Naam",
      numberOfRevisions: "Revisies",
      search: "Zoek autorisatieregels...",
      search_hint: "Filter op naam",
      serviceProviderName: "Dienst",
    }
  },

  policy_attributes: {
    attribute: "Attribuut",
    attribute_value_placeholder: "Attribuut waarde...",
    group_info: " De waarde(s) moeten volledige unieke groep ID zijn e.g. 'urn:collab:group:surfteams.nl:nl:surfnet:diensten:admins'",
    new_attribute: "Voeg een nieuw attribuut toe...",
    new_value: "Voeg een nieuwe waarde toe...",
    sab_info: "De waarde(s) moet geldige rollen in SAB zijn e.g. 'Instellingsbevoegde'",
    values: "Waarde(s)",
  },

  policy_detail: {
    access: "Toegang",
    autoFormat: "AutoFormat regel omschrijving",
    cancel: "Annuleer",
    confirmation: "Weet je zeker dat je deze pagina wilt sluiten?",
    create_policy: "Nieuwe autorisatieregel",
    deny: "Deny",
    deny_info: "Deny regels zijn minder gebruikelijk. Als de attributen matchen dan mag de gebruiker niet naar de dienst. Als de attributen niet matchen dan wel.",
    deny_message: "Ongeautoriseerd melding in het Engels",
    deny_message_info: "Dit is de melding die de gebruiker ziet bij een 'Deny' op basis van deze regel.",
    deny_message_nl: "Ongeautoriseerd melding",
    description: "Omschrijving",
    idps_placeholder: "Selecteer de instellingen - 0 of meer",
    institutions: "Instelling(en)",
    isActive: "Actief",
    isActiveDescription: "Markeer de autorisatieregel actief",
    isActiveInfo: " Inactieve autorisatieregels worden niet geevalueerd in access beslissingen",
    name: "Naam",
    permit: "Permit",
    permit_info: "Permit regels dwingen af dat de gebruiker alleen wordt geautoriseerd als de attributen matchen. Als er geen match is dan wordt de gebruiker niet toegelaten tot de dienst.",
    rule: "Regel",
    rule_and: "EN",
    rule_and_info: "Autorisatieregels met een logische EN dwingen af dat alle gedefinieerde attributen moeten matchen.",
    rule_info_add: " Attribuut waardes van hetzelfde attribuut zullen altijd worden geevalueerd met de logische OF.",
    rule_info_add_2: "Een 'Deny' autorisatieregel wordt altijd geevalueerd met de logische EN voor attribuut waarden van verschillende attributen.",
    rule_or: "OF",
    rule_or_info: "Voor autorisatieregels met een logische OF is het slechts vereist dat 1 attribuut matched.",
    service: "Dienst",
    spScopeInfo: "De beschikbare diensten zijn beperkt tot je eigen diensten zolang er geen Instelling is gekozen",
    sp_placeholder: "Selecteer de dienst - verplicht",
    sub_title: "Aangemaakt door {{displayName}} op {{created}}",
    submit: "Verstuur",
    update_policy: "Bijwerken autorisatieregel",
  },

  revisions: {
    active: "Actief",
    allAttributesMustMatch: "Logische OF regel?",
    attributes: "Attributen",
    changes_first_html: "Dit is de <span class=\"curr\">eerste revisie {{currRevisionNbr}}</span> aangemaakt door {{userDisplayName}} van {{authenticatingAuthorityName}} op {{createdDate}}.",
    changes_info_html: "Veranderingen tussen <span class=\"prev\"> revisie nummer {{prevRevisionNbr}}</span> en <span class=\"curr\">revisie nummer {{currRevisionNbr}}</span> gemaakt door {{userDisplayName}} van {{authenticatingAuthorityName}} op {{createdDate}}.",
    denyAdvice: "Ongeautoriseerd melding in het Engels",
    denyAdviceNl: "Ongeautoriseerd melding",
    denyRule: "Toegang Permit regel?",
    description: "Omschrijving",
    identityProviderNames: "Instelling(en)",
    name: "Naam",
    revision: "Revisie nummer",
    serviceProviderName: "Dienst",
    title: "Revisies",
  },

  history: {
    title: "Logboek",
    requestDate: "Datum",
    type: "Type",
    jiraKey: "Ticket ID",
    status: "Status",
    userName: "Door",
    action_types: {
      LINKREQUEST: "Verbinden met {{serviceName}}",
      UNLINKREQUEST: "Ontbinden met {{serviceName}}",
      QUESTION: "Vraag"
    },
  },

  profile: {
    title: "Profiel",
    sub_title: "Van uw instelling hebben wij de volgende gegevens ontvangen. Deze gegevens, alsmede uw groepsrelaties, worden opgeslagen in (en gebruikt door) SURFconext. Tevens is het mogelijk dat deze gegevens worden verstrekt aan diensten die u via SURFconext benadert.",
    my_attributes: "Mijn attributen",
    attribute: "Attribuut",
    value: "Waarde",
    my_roles: "Mijn rollen",
    my_roles_description: "De volgende rollen zijn toegekend",
    role: "Rol",
    role_description: "Omschrijving",
    roles: {
      ROLE_DASHBOARD_ADMIN: {
        name: "SURFconextverantwoordelijke",
        description: "U bent gemachtigd om voor uw instelling de connecties met Service Providers te beheren"
      },
      ROLE_DASHBOARD_VIEWER: {
        name: "SURFconextbeheerder",
        description: "U bent gemachtigd om voor uw instelling de connecties met Service Providers in te zien"
      },
      ROLE_DASHBOARD_SUPER_USER: {
        name: "Dashboard supergebruiker",
        description: "U bent een super gebruiker binnen het dashboard"
      }
    },
    attribute_map: {
      "Shib-uid": {
        name: "UID",
        description: "jouw unieke gebruikersnaam binnen jouw instelling"
      },
      "Shib-surName": {
        name: "Achternaam",
        description: "jouw achternaam"
      },
      "Shib-givenName": {
        name: "Voornaam",
        description: "voornaam/roepnaam"
      },
      "Shib-commonName": {
        name: "Volledige persoonsnaam",
        description: "volledige persoonsnaam"
      },
      "Shib-displayName": {
        name: "Weergavenaam",
        description: "weergave naam zoals getoond in applicaties"
      },
      "Shib-email": {
        name: "E-mailadres",
        description: "jouw e-mailadres zoals bekend binnen jouw instelling"
      },
      "Shib-eduPersonAffiliation": {
        name: "Relatie",
        description: "geeft de relatie aan tussen jou en jouw instelling"
      },
      "Shib-eduPersonEntitlement": {
        name: "Rechtaanduiding",
        description: "rechtaanduiding; URI (URL of URN) dat een recht op iets aangeeft; wordt bepaald door een contract tussen dienstaanbieder en instelling"
      },
      "Shib-eduPersonPN": {
        name: "Net-ID",
        description: "jouw unieke gebruikersnaam binnen jouw instelling aangevuld met @instellingsnaam.nl"
      },
      "Shib-preferredLanguage": {
        name: "Voorkeurstaal",
        description: "een tweeletterige afkorting van de voorkeurstaal volgens de ISO 639 taalafkortings codetabel; geen subcodes"
      },
      "Shib-homeOrg": {
        name: "Organisatie",
        description: "aanduiding voor de organisatie van een persoon gebruikmakend van de domeinnaam van de organisatie; syntax conform RFC 1035"
      },
      "Shib-schacHomeOrganizationType": {
        name: "Type Organisatie",
        description: "aanduiding voor het type organisatie waartoe een persoon behoort, gebruikmakend van de waarden zoals geregisteerd door Terena op: http://www.terena.org/registry/terena.org/schac/homeOrganizationType"
      },
      "Shib-nlEduPersonHomeOrganization": {
        name: "Weergavenaam van de Instelling",
        description: "weergavenaam van de instelling"
      },
      "Shib-nlEduPersonOrgUnit": {
        name: "Afdelingsnaam",
        description: "naam van de afdeling"
      },
      "Shib-nlEduPersonStudyBranch": {
        name: "Opleiding",
        description: "opleiding; numerieke string die de CROHOcode bevat. leeg als het een niet reguliere opleiding betreft"
      },
      "Shib-nlStudielinkNummer": {
        name: "Studielinknummer",
        description: "studielinknummer van student zoals geregistreerd bij www.studielink.nl"
      },
      "Shib-nlDigitalAuthorIdentifier": {
        name: "DAI",
        description: "Digital Author Identifier (DAI)"
      },
      "Shib-nlEduPersonHomeOrganization": {
        name: "Weergavenaam van de Instelling",
        description: "weergavenaam van de instelling"
      },
      "Shib-nlEduPersonStudyBranch": {
        name: "Opleiding",
        description: "opleiding; numerieke string die de CROHOcode bevat. leeg als het een niet reguliere opleiding betreft"
      },
      "Shib-userStatus": {
        name: "Gebruikersstatus",
        description: "Status van deze gebruiker in SURFconext"
      },
      "Shib-accountstatus": {
        name: "Accountstatus",
        description: "Status van deze account in SURFconext"
      },
      "name-id": {
        name: "Identifier",
        description: "Status van deze account in SURFconext"
      },
      "Shib-voName": {
        name: "Naam Virtuele Organisatie",
        description: "De naam van de Virtuele Organisatie waarvoor je bent ingelogd."
      },
      "Shib-user": {
        name: "Identifier",
        description: "Status van deze account in SURFconext"
      },
      "Shib-memberOf": {
        name: "Lidmaatschap",
        description: "Lidmaatschap van virtuele organisaties en SURFconext"
      },
    }
  }
};
