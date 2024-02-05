# Boolzapp - a (not very) innovative messaging platform

## Milestone 1

- Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e
  dall’interlocutore (bianco) assegnando due classi CSS diverse
- Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare
  nome e immagine di ogni contatto

## Milestone 2

- Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i
  messaggi relativi al contatto attivo all’interno del pannello della conversazione
- Click sul contatto mostra la conversazione del contatto cliccato

## Milestone 3

- Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando
  “enter” il testo viene aggiunto al thread sopra, come messaggio verde
- Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà
  un “ok” come risposta, che apparirà dopo 1 secondo.

## Milestone 4

- Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i
  contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo
  “mar” rimangono solo Marco e Martina)

## Milestone 5 - opzionale

- Cancella messaggio: cliccando sul messaggio appare un menu a tendina che
  permette di cancellare il messaggio selezionato
- Visualizzazione ora e ultimo messaggio inviato/ricevuto nella lista dei contatti

### Consigli utili:

- Si possono trascurare le scrollbar verticali, sia nel pannello dei messaggi, che nella
  lista dei contatti
- I pulsanti e le icone possono non funzionare (a parte l’invio del messaggio)
- Per gestire le date, può essere utile la libreria Luxon

## BONUS

1. evitare che l’utente possa inviare un messaggio vuoto o composto solamente da spazi
2. inserire l’orario corretto nei messaggi
3. predisporre una lista di frasi e/o citazioni da utilizzare al posto della risposta “ok:” quando il pc risponde, anziché scrivere “ok”, scegliere una frase random dalla lista e utilizzarla come testo del messaggio di risposta del pc
4. visualizzare un messaggio di benvenuto che invita l'utente a selezionare un contatto dalla lista per visualizzare i suoi messaggi, anziché attivare di default la prima conversazione
5. aggiungere una splash page visibile per 1s all'apertura dell'app
6. rendere l'app responsive e fruibile anche su mobile: di default si visualizza solo la lista dei contatti e cliccando su un contatto si vedono i messaggi di quel contatto. Aggiungere quindi un'icona con una freccia verso sinistra per tornare indietro, dalla visualizzazione della chat alla visualizzazione di tutti i contatti
7. aggiungere un'icona per ingrandire o rimpicciolire il font
8. aggiungere un'icona per cambiare la modalità light/dark
