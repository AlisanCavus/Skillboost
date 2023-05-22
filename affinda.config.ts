import { AffindaAPI, AffindaCredential } from "@affinda/affinda";

const credential = new AffindaCredential(
    process.env.NEXT_PUBLIC_AFFINDA_API_KEY as string
);
export const affindaClient = new AffindaAPI(credential, {
  endpoint: "https://api.eu1.affinda.com/",
});