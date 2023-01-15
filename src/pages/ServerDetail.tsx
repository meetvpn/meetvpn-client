import {
  // useEffect,
  // useState,
  Suspense
} from "react";

import {
  IonContent,
  IonHeader,
  IonPage,
  IonButtons,
  IonToolbar,
  IonButton,
  IonList,
  IonThumbnail,
  IonText,
  // IonIcon,
  IonBackButton,
  // IonTitle,
} from "@ionic/react";

import { RouteComponentProps } from "react-router-dom";

import { useQuery } from "@tanstack/react-query";

import { useOutline } from "../providers/OutlineProvider";

import ItemServerInfoParam from "../components/ItemServerInfoParam";
// import { IServerInfoDetails } from "../interfaces";

// import EEUUFlag from "../assets/img/countries/eeuu.svg";
// import UploadIcon from "../assets/icon/upload.svg";
// import DownloadIcon from "../assets/icon/download.svg";
// import HeartIcon from "../assets/icon/heart.svg";
import ChartIcon from "../assets/icon/bold-chart.svg";
import HealthIcon from "../assets/icon/health.svg";
import BackIcon from "../assets/icon/arrow-left.svg";

import "./ServerDetail.css";

// const serverDetail: IServerInfoDetails = {
// name: "United State",
// ip: "24.12.001.124",
// premium: false,
// ms: "44 MS",
// photo: EEUUFlag,
// };

interface ServerDetailPageProps
  extends RouteComponentProps<{
    id: string;
  }> {}

const getServer = async (serverId: number) => {
  const res = await fetch(`${process.env.REACT_APP_GETAWAY_BASE64}/api/rpc/getServer`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      params: {
        id: serverId,
      },
      meta: {},
    }),
  });
  const json = await res.json();
  return json;
};

export const Server = ({ id }: any) => {
  const { status, connectToKey } = useOutline();

  const serverId = parseInt(id);

  const { data, isFetching, error } = useQuery({
    queryKey: ["server", serverId],
    queryFn: () => getServer(serverId),
  });

  console.log("status", status);

  return (
    <>
      {isFetching ? (
        <p>Loading...</p>
      ) : error ? (
        <div>Error:</div>
      ) : (
        <>
          <IonHeader className="header-container ion-no-border">
            <IonToolbar className="toolbar-header-container">
              <IonButtons
                slot="start"
                className="back-btn-container"
                style={{ width: "24px" }}
              >
                <IonBackButton
                  defaultHref="/tabs/home"
                  text={""}
                  icon={BackIcon}
                ></IonBackButton>
              </IonButtons>
              {/* <IonTitle color="dark" className="title">
            Favorite
          </IonTitle> */}
              {/* <IonText color="dark" className="title" slot="start">
            Detail Server
          </IonText>

          <IonButtons slot="end">
            <IonButton fill="clear" color="dark" className="btn-done">
              <IonIcon src={HeartIcon}></IonIcon>
            </IonButton>
          </IonButtons> */}
            </IonToolbar>
          </IonHeader>

          <IonContent fullscreen className="server-list-page">
            <div className="screen-content">
              <div className="server-info-container">
                <div className="server-info">
                  <IonThumbnail className="server-flag">
                    <img
                      alt={`${
                        data?.result?.location?.country || "Missing"
                      } Flag`}
                      src={`${process.env.REACT_APP_GETAWAY_BASE64}/flags/4x3/${
                        data?.result.location?.countryCode?.toLowerCase() ||
                        "missing"
                      }.svg`}
                    />
                  </IonThumbnail>

                  <IonText color="dark" className="server-name">
                    Server {data?.result.id}
                    {/* {server?.id} */}
                  </IonText>
                  <IonText color="medium" className="server-ip">
                    {data?.result.location?.country}
                    {/* 10.10.10.10 */}
                    {/* {`IP: ${server?.ip}`} */}
                  </IonText>
                </div>

                <IonList className="details-container">
                  {/* <ItemServerInfoParam
                title="Upload"
                amount="12.99"
                measureType="Mb/s"
                icon={UploadIcon}
              />
              <ItemServerInfoParam
                title="Download"
                amount="12.99"
                measureType="Mb/s"
                icon={DownloadIcon}
              /> */}
                  <ItemServerInfoParam
                    title="Current Ping"
                    amount="400"
                    measureType="MS"
                    icon={ChartIcon}
                  />
                  <ItemServerInfoParam
                    title="Network Accuracy"
                    amount={data?.result?.quality || 0}
                    measureType="%"
                    icon={HealthIcon}
                  />
                </IonList>
              </div>

              <IonButton color="primary" onClick={async () => {
                // console.log("data?.result?.accessKey?.access_url", data?.result?.accessKey[0]?.access_url);
                await connectToKey(data?.result?.accessKey[0]?.access_url);
                // console.log("st", st);
                
              }}>Connect Server</IonButton>
            </div>
          </IonContent>
        </>
      )}
    </>
  );
};

const ServerDetail: React.FC<ServerDetailPageProps> = ({
  match: {
    params: { id },
  },
}: any) => {
  // const { id } = useParams<{ id: string }>();
  // const [server, setServer] = useState<IServerInfoDetails | null>(null);

  // useEffect(() => {
  //   setTimeout(() => setServer(serverDetail), 200);
  // }, [id]);

  if (!id) {
    // console.log("server", id);

    return <div>Speaker not found</div>;
  }

  // console.log("server", id);

  return (
    <IonPage>
      <Suspense fallback={<div>Loading...</div>}>
        <Server id={id} />
      </Suspense>
    </IonPage>
  );
};

export default ServerDetail;
