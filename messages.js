export const DEFAULT_ERROR_MESSAGE =
  "Something went wrong! We are looking into it.";

export const FAQS = [
  {
    id: "1",
    ques: "What are Kool Koalas?",
    ans: `Kool Koalas is a unique NFT collection of 1817 koalas living on the Ethereum blockchain.`,
    tags: ["Technical"],
  },
  {
    id: "2",
    ques: "How much is project membership cost?",
    ans: `
    No FOMO ramps or bonding curves here. All koalas will be sold at 0.01 ETH + gas.`,
    tags: ["Minting"],
  },
  {
    id: "3",
    ques: "What is the total supply?",
    ans: `1817 koalas only`,
    tags: ["Minting"],
  },
  {
    id: "4",
    ques: "Is there any max mint limit?",
    ans: `18/txn. There is no limit on number of transactions.`,
    tags: ["Minting"],
  },
  {
    id: "5",
    ques: "After I mint koalas, how much time would it take to reveal?",
    ans: `Instant reveal.`,
    tags: ["Minting"],
  },
  {
    id: "6",
    ques: "How many koala traits are there in total?",
    ans: `120+ with 17 one offs.`,
    tags: ["Minting", "Technical"],
  },
  {
    id: "7",
    ques: "Where are you guys from?",
    ans: `Our team is spread across the globe. USA, France, India.`,
    tags: ["Team/Devs"],
  },
  {
    id: "8",
    ques: "What about the boring technical details?",
    ans: `
    Koalas are stored as ERC-721 NFT tokens on the Ethereum blockchain within our own verified custom smart contract (0x6F...8A26).
     The artwork itself is stored on IPFS.`,
    tags: ["Technical"],
  },
];

export const ROADMAP = [
  { when: "17%", what: "5plush koalas to our early minters" },
  {
    when: "50%",
    what: "Koalas don't drink much water, but water project could use 1ETH from us",
  },
  {
    when: "75%",
    what: "10 koala raffle for #1-#1363 kool koalas",
  },
  {
    when: "100%",
    what: "Crikey, we got our friend at aus zoo adopt bert & 4 kool koalas win a day out at aus zoo",
  },
];

export const MINT_DATE = new Date(Date.UTC(2021, 8, 31, 18, 0, 0));
export const DATE_OPTIONS = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
