Zadanie 1
Użytkownik wchodząc po raz pierwszy do aplikacji powinien zobaczyć formularz, gdzie wprowadzi tajny tekst (passphrase). Po wpisaniu tajnego tekstu aplikacja "wpuści" użytkownika do pozostałych części aplikacji.

Przygotuj dwa komponenty osadzone w App.js:

PassphraseForm - formularz, gdzie podamy nasz tajny tekst. Jeśli tekst będzie prawidłowy, zobaczymy pozostałe części aplikacji
Content - wystarczy tekst z powitaniem użytkownika
Do przechowywania informacji na temat tego, czy użytkownik wprowadził poprawny passphrase wykorzystaj Context API

Zadanie 2
Jest to rozwinięcie poprzedniego zadania. Stwórz jeszcze jeden kontekst, który będzie symulował dane o użytkowniku. Może to być np. obiekt zwierający dane:

{
  email: "jan@kowalski.pl",
  isAdmin: false,
}
Następnie przygotuj dwa komponenty Movies oraz Places (mogą to być komponenty spięte z routingiem i dostępne pod osobnymi adresami url), których zadaniem będzie w przyszłości pobranie danych z serwera. Teraz jednak nie muszą nic pobierać.

W kolejnym kroku stwórz komponent withUser, którym będzie można "owrapować" komponenty Movies i Places. Dzięki temu komponenty otrzymają informacje, o użytkowniku i wyświetlą jego adres email na ekranie.

Do realizacji tego zadania w komponencie withUser wykorzystaj wzorzec Higher Order Component.

Zadanie 3
Stwórz pionowe menu nawigacyjne, które będzie umieszczone po lewej stronie aplikacji (możesz wykorzystać aplikację z zadania 1 i 2).

Menu będzie:

wyświetlało ikonkę oraz etykietę na rozdzielczości desktopowej, czyli od 1024px. Wykorzystaj do tego komponent DesktopNavItem
wyświetlało tylko ikonkę na rozdzielczości mniejszej niż 1024px. Wykorzystaj do tego komponent MobileNavItem
Oba komponenty napisz w jednym pliku, który będzie eksportował te dwa komponenty w odpowiedni sposób. Ikonka powinna być powiązana z etykietą, tzn. jeśli etykieta to "Home", wstawmy ikonkę domu. Zestaw ikon znajdziez tutaj.

Do wykrycia rozdzielczości napisz włany hook useMobile, który zwróci wartość logiczną true jeśli mamy rozdzielczość poniżej 1024px. W zależności od zwracanej wartości powinniśmy wykorzystać odpowiedni komponent nawigacyjny.

Powodzenia!