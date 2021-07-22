export { CommunicationSendEmailProfile } from "./types/communication/send-email";
export declare const SuperfaceClient: new () => import("@superfaceai/one-sdk/dist/client/public/client").TypedSuperfaceClient<{
    "communication/send-email": {
        SendEmail: [import("./types/communication/send-email").CommunicationSendEmailSendEmailInput, import("./types/communication/send-email").CommunicationSendEmailSendEmailResult];
        SendTemplatedEmail: [import("./types/communication/send-email").CommunicationSendEmailSendTemplatedEmailInput, import("./types/communication/send-email").CommunicationSendEmailSendTemplatedEmailResult];
    };
}>;
export declare type SuperfaceClient = InstanceType<typeof SuperfaceClient>;
