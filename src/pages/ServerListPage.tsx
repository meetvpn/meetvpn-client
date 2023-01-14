import React from // useState // useEffect,
"react";

import {
  IonContent,
  IonHeader,
  IonPage,
  // IonButtons,
  IonText,
  IonToolbar,
  // IonButton,
  // IonIcon,
  // IonList,
  // IonItem,
  // IonAvatar,
  // IonLabel,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonList,
} from "@ionic/react";

import { useInfiniteQuery } from "@tanstack/react-query";

// import UpgradeToProCard from "../components/UpgradeToProCard";
// import ServerInfoCard from "../components/ServerInfoCard";
import ServerList from "../components/ServerList";
// import { IServerInfoDetails } from "../interfaces";

// import ArgentinaImg from "../assets/img/countries/argentina.svg";
// import BelgiumFlag from "../assets/img/countries/belgium.svg";
// import AlbaniaFlag from "../assets/img/countries/belgium.svg";
// import Candle from "../assets/icon/candle.svg";

import "./ServerListPage.css";

const ITEMS_PER_PAGE = 20;

const getServers = async ({ pageParam = 0 }) => {
  const res = await fetch("http://localhost:3000/api/rpc/getServers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      params: {
        orderBy: { id: "desc" },
        skip: ITEMS_PER_PAGE * pageParam,
        take: ITEMS_PER_PAGE,
      },
      meta: {},
    }),
  });
  const json = await res.json();
  return json;
};

const ServerListPage: React.FC = () => {
  const {
    status,
    data,
    // error,
    // isFetching,
    isFetchingNextPage,
    // isFetchingPreviousPage,
    fetchNextPage,
    // fetchPreviousPage,
    hasNextPage,
    // hasPreviousPage,
  } = useInfiniteQuery(["servers"], getServers, {
    getPreviousPageParam: ({
      result: {
        nextPage: { skip, take },
      },
    }) => {
      // console.log("firstPage", skip / take - 1);
      return skip / take - 1;
    },
    getNextPageParam: ({
      result: {
        nextPage: { skip, take },
      },
    }) => {
      // console.log("nextPage", skip / take);
      return skip / take;
    },
  });

  return (
    <IonPage>
      <IonHeader className="ion-no-border" translucent={true}>
        <IonToolbar className="server-list-header">
          <IonText color="dark" className="title">
            Discover server
          </IonText>
          {/* <IonButtons slot="end">
            <IonButton color="light" className="header-icon">
              <IonIcon slot="icon-only" src={Candle} color="dark" />
            </IonButton>
          </IonButtons> */}
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="server-list-page">
        {/* <IonText color="dark">Free Servers</IonText> */}

        {status === "loading" ? (
          <p>Loading...</p>
        ) : status === "error" ? (
          <div>Error:</div>
        ) : (
          <IonList className="server-list-container">
            <div className="server-list">
              {data.pages.map((page: any, index: number) => (
                <>
                  <ServerList
                    title="Free Servers"
                    servers={page.result.servers}
                  />
                  {/* {page.result.servers.map((server: any, index: number) => (
                    <ServerInfoCard key={index} {...server} />
                  ))} */}
                </>
              ))}
            </div>
          </IonList>
        )}

        <IonInfiniteScroll
          disabled={!hasNextPage || isFetchingNextPage}
          onIonInfinite={(ev) => {
            fetchNextPage();
            setTimeout(() => ev.target.complete(), 500);
          }}
        >
          <IonInfiniteScrollContent></IonInfiniteScrollContent>
        </IonInfiniteScroll>
        {/* <UpgradeToProCard /> */}

        {/* <IonList className="server-list-container">
          <IonText color="dark">Free Servers ({servers.length})</IonText>

          <div className="server-list">
            {servers.map((server) => (
              <ServerInfoCard key={server.ip} {...server} />
            ))}
          </div>
        </IonList> */}

        {/* <ServerList
          title="Free Servers"
          servers={serverList.filter((server) => !server.premium)}
        /> */}

        {/* <ServerList
          title="Premium Servers"
          servers={servers.filter((server) => server.premium)}
          premiumServers={true}
        /> */}
      </IonContent>
    </IonPage>
  );
};

export default ServerListPage;
