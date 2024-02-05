const { createApp } = Vue;
const dt = luxon.DateTime;

const app = createApp({
  data() {
    return {
      activeIndex: 0,
      newMessage: {
        date: "",
        message: "",
        status: "sent",
      },
      searchedContact: "",
      searchedName: "",
      contacts: [
        {
          name: "Michele",
          avatar: "./img/avatar_1.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Hai portato a spasso il cane?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Ricordati di stendere i panni",
              status: "sent",
            },
            {
              date: "10/01/2020 16:15:22",
              message: "Tutto fatto!",
              status: "received",
            },
          ],
        },
        {
          name: "Fabio",
          avatar: "./img/avatar_2.jpg",
          visible: true,
          messages: [
            {
              date: "20/03/2020 16:30:00",
              message: "Ciao come stai?",
              status: "sent",
            },
            {
              date: "20/03/2020 16:30:55",
              message: "Bene grazie! Stasera ci vediamo?",
              status: "received",
            },
            {
              date: "20/03/2020 16:35:00",
              message: "Mi piacerebbe ma devo andare a fare la spesa.",
              status: "sent",
            },
          ],
        },
        {
          name: "Samuele",
          avatar: "./img/avatar_3.jpg",
          visible: true,
          messages: [
            {
              date: "28/03/2020 10:10:40",
              message: "La Marianna va in campagna",
              status: "received",
            },
            {
              date: "28/03/2020 10:20:10",
              message: "Sicuro di non aver sbagliato chat?",
              status: "sent",
            },
            {
              date: "28/03/2020 16:15:22",
              message: "Ah scusa!",
              status: "received",
            },
          ],
        },
        {
          name: "Alessandro B.",
          avatar: "./img/avatar_4.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Lo sai che ha aperto una nuova pizzeria?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Si, ma preferirei andare al cinema",
              status: "received",
            },
          ],
        },
        {
          name: "Alessandro L.",
          avatar: "./img/avatar_5.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Ricordati di chiamare la nonna",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Va bene, stasera la sento",
              status: "received",
            },
          ],
        },
        {
          name: "Claudia",
          avatar: "./img/avatar_6.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Ciao Claudia, hai novità?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Non ancora",
              status: "received",
            },
            {
              date: "10/01/2020 15:51:00",
              message: "Nessuna nuova, buona nuova",
              status: "sent",
            },
          ],
        },
        {
          name: "Federico",
          avatar: "./img/avatar_7.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Fai gli auguri a Martina che è il suo compleanno!",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Grazie per avermelo ricordato, le scrivo subito!",
              status: "received",
            },
          ],
        },
        {
          name: "Davide",
          avatar: "./img/avatar_8.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Ciao, andiamo a mangiare la pizza stasera?",
              status: "received",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "No, l'ho già mangiata ieri, ordiniamo sushi!",
              status: "sent",
            },
            {
              date: "10/01/2020 15:51:00",
              message: "OK!!",
              status: "received",
            },
          ],
        },
      ],
    };
  },

  computed: {
    activeContact() {
      return this.contacts[this.activeIndex];
    },
  },

  methods: {
    getLastMessage(messages) {
      if (messages.length == 0) {
        return "";
      }
      const lastMessage = messages[messages.length - 1];
      return lastMessage.message;
    },
    getAccessFromLastMessage(messages) {
      const sentMessages = messages.filter(
        (message) => message.status == "sent"
      );
      if (messages.length == 0) {
        return "";
      }
      const lastMessage = sentMessages[sentMessages.length - 1];
      return this.formatDate(lastMessage.date);
    },
    setActiveIndex(newIndex) {
      this.activeIndex = newIndex;
    },
    getCurrentTime() {
      const now = new Date();

      //faccio in modo che il formato sia uguale, aggiungendo gli zeri dove necessario
      const day = now.getDate() < 10 ? "0" + now.getDate() : now.getDate();
      const month =
        now.getMonth() + 1 < 10
          ? "0" + (now.getMonth() + 1)
          : now.getMonth() + 1;
      const year = now.getFullYear();
      const hours = now.getHours() < 10 ? "0" + now.getHours() : now.getHours();
      const minutes =
        now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();
      const seconds =
        now.getSeconds() < 10 ? "0" + now.getSeconds() : now.getSeconds();
      return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
    },
    formatDate(date) {
      //cambio la formattazione delle date
      const messageDate = dt.fromFormat(date, "dd/MM/yyyy HH:mm:ss");
      // trasformo la data in una stringa
      const messageDateText = messageDate.toLocaleString(dt.TIME_24_SIMPLE);
      return messageDateText;
    },
    sendMessage() {
      //interrompo la funzione se l'utente non ha inserito testo nell'input, per evitare che si inviino messaggi vuoti
      if (!this.newMessage.message) return;
      // copio chiò che l'utente inserisce nell'input in una nuova costante che andrà pushata nell'array dei messaggi insieme all'ora dell'invio
      const newMessage = { ...this.newMessage };
      newMessage.date = this.getCurrentTime();
      this.newMessage.message = "";
      this.activeContact.messages.push(newMessage);
      // invio la risposta automatica dopo 1 secondo
      setTimeout(this.sendAutomatedResponse, 1000);
    },
    sendAutomatedResponse() {
      const newMessage = {
        message: "ok",
        date: this.getCurrentTime(),
        status: "received",
      };
      this.activeContact.messages.push(newMessage);
    },
    filterContact() {
      this.searchedContact;
      this.contacts.forEach((contact) => {
        contact.visible = contact.name
          .toLowerCase()
          .includes(this.searchedContact.toLowerCase());
      });
    },
    deleteMessage(i) {
      this.contacts[this.activeIndex].messages.splice(i, 1);
    },
  },

  mounted() {},
});

app.mount("#app");
