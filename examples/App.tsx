import React, { useState } from "react";
import { ModernModal } from "../src/components/ModernModal";
import "./App.css";

const App = () => {
  const [modalState, setModalState] = useState({
    fullscreen: false,
    fullscreenWithoutContent: false,
    xlarge: false,
    xlargeWithoutContent: false,
    large: false,
    largeWithoutContent: false,
    medium: true,
    mediumWithoutContent: false,
    small: false,
    smallWithoutContent: false,
    xsmall: false,
    xsmallWithoutContent: false,
    noneSize: false,
    noneSizeWithoutContent: false,
  });

  const toggleModal = (size: any) => {
    setModalState((prevState) => ({
      ...prevState,
      [size]: !prevState[size as keyof typeof prevState],
    }));
  };

  const getModalContent = () => {
    return (
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et
        pretium nisl, sed scelerisque turpis. Ut imperdiet neque metus, in
        rhoncus enim efficitur at. Curabitur eu purus elementum, luctus dui
        eget, varius arcu. Proin id cursus nisl, sit amet faucibus odio. Morbi
        suscipit orci eget dui posuere auctor. Ut malesuada eget urna quis
        blandit. Etiam vel pulvinar felis. Sed dignissim mollis augue lacinia
        sollicitudin. Aliquam sed rhoncus leo. Praesent iaculis malesuada sem
        imperdiet accumsan. Vivamus eget facilisis sapien. Aenean eget leo non
        nibh iaculis gravida eget ac magna. Donec malesuada vehicula malesuada.
        Ut euismod at felis eget tristique. Cras interdum ante sed felis dictum
        ultrices. Etiam enim libero, sollicitudin bibendum ipsum id, interdum
        consectetur ipsum. Proin vitae risus et justo sodales ullamcorper quis
        eu erat. Etiam nec porta ex, sed volutpat nibh. Nullam imperdiet
        eleifend elit, et tristique magna faucibus eleifend. Phasellus
        porttitor, ligula a rhoncus semper, nibh eros sollicitudin eros, ut
        tincidunt tortor urna vestibulum sem. Nulla et ligula eget enim maximus
        dapibus vel eget neque. Praesent efficitur fermentum justo eu posuere.
        Donec eu nibh quis risus convallis convallis. Etiam maximus justo eget
        neque porta luctus. Vivamus lectus velit, suscipit in orci ac, consequat
        dictum risus. Pellentesque in tristique augue. Nam elementum vestibulum
        neque, sed vulputate elit viverra quis. Class aptent taciti sociosqu ad
        litora torquent per conubia nostra, per inceptos himenaeos. Aliquam sed
        facilisis eros, vitae efficitur tellus. Maecenas a quam a diam ultrices
        dignissim sed tempor sem. Etiam luctus sapien justo, sed faucibus mi
        gravida non. Donec vel fermentum felis. Sed semper elit ut dui posuere
        condimentum. Phasellus dolor dui, tincidunt quis leo at, euismod
        vestibulum lectus. Nam iaculis in ante vel maximus. Integer vitae est
        pulvinar dolor facilisis laoreet. Quisque eget ipsum vitae ante porta
        aliquet. Sed massa ligula, interdum posuere nibh non, semper sodales
        ligula. Donec eget velit quis purus malesuada interdum. Pellentesque at
        ipsum libero. Nullam semper dignissim libero finibus semper. Sed finibus
        efficitur lobortis. Nam vitae ipsum eros. Maecenas eget quam maximus
        nibh fermentum aliquam id sit amet purus. Pellentesque habitant morbi
        tristique senectus et netus et malesuada fames ac turpis egestas.
        Quisque purus odio, malesuada nec rutrum et, ultricies ac velit. Cras
        non est felis. Proin consectetur erat ut eros fringilla, vel commodo
        dolor suscipit. Duis eu orci elit. Aenean quis arcu dictum, sollicitudin
        tortor eget, finibus risus. Morbi gravida rutrum feugiat. Fusce elit
        sem, ornare ut aliquet nec, condimentum a justo. Aliquam hendrerit
        euismod arcu, quis tempor nulla convallis eget. Vestibulum commodo, diam
        at pellentesque placerat, eros libero lacinia augue, eu congue turpis mi
        ac urna. Interdum et malesuada fames ac ante ipsum primis in faucibus.
        Fusce at faucibus eros. Mauris eget molestie orci, non rutrum tellus. In
        turpis dui, commodo non tempor eu, suscipit ut erat. Donec viverra
        blandit ex, nec fermentum diam volutpat pulvinar. Duis egestas dolor
        turpis, nec porta lectus tincidunt eu. Orci varius natoque penatibus et
        magnis dis parturient montes, nascetur ridiculus mus. Donec iaculis
        bibendum pellentesque. Nunc purus felis, imperdiet at laoreet et,
        eleifend quis odio. Sed scelerisque nulla quis velit volutpat lacinia.
        Curabitur mollis vel urna quis venenatis. Praesent erat nulla, sagittis
        quis tellus accumsan, mollis bibendum dui. Suspendisse potenti.
        Curabitur rhoncus magna vitae erat luctus, eu iaculis mauris dictum.
        Donec pellentesque urna nec tortor mattis, et aliquet odio mattis. Nam
        consequat eros nunc, sit amet dictum dui facilisis interdum. Fusce quis
        erat facilisis, bibendum est sed, dapibus leo. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        Integer dignissim ligula enim, ac sodales sem feugiat nec. Fusce iaculis
        vehicula est. Donec pellentesque hendrerit nibh eu cursus. Nulla
        facilisi. Integer pellentesque iaculis fringilla. Donec vel enim vitae
        leo tempor mattis. Nunc ac mauris vitae diam tempus porttitor a at
        felis. Morbi sed massa nec est posuere maximus id ut metus. Etiam
        sagittis mi eget magna venenatis, vel sollicitudin sem hendrerit.
        Vestibulum feugiat ultricies sem vehicula semper. Nunc id libero at
        velit hendrerit aliquet at eu quam. Fusce sit amet est vulputate,
        facilisis tortor id, gravida velit. Aenean lacinia sem a sapien
        condimentum, ut semper sapien iaculis. Aliquam erat volutpat. Nam tempor
        nunc ipsum, sed aliquam massa porttitor sit amet. Fusce iaculis ac dolor
        vel dignissim. Donec libero justo, ullamcorper ac ultrices vitae, mattis
        ac dui. Nam non aliquam dolor. Proin dignissim justo sed finibus
        hendrerit. Cras sollicitudin tristique nulla, vel blandit ligula
        tincidunt nec. Praesent laoreet molestie justo at pulvinar. Donec
        vulputate cursus arcu. Praesent ac magna suscipit tellus faucibus
        vulputate. Fusce at sem posuere, suscipit sapien consectetur, convallis
        odio. Nullam rutrum diam ac mi porttitor, vulputate imperdiet metus
        lacinia. Nunc a pharetra risus. Nulla aliquet felis ut pretium suscipit.
        Aenean velit metus, elementum in molestie non, fermentum in ligula.
        Curabitur suscipit tellus sit amet nisi ornare ornare. Etiam cursus
        mattis nulla et egestas. Praesent lobortis augue id euismod sodales.
        Pellentesque a lorem eros. Nam consequat nisl lectus, at vulputate diam
        luctus ornare. Phasellus lacus nunc, viverra quis sodales vel, dapibus
        et libero. Quisque eget congue orci. Suspendisse vel lectus ligula.
        Donec tristique in dui eu suscipit. Sed mollis sit amet diam eget
        accumsan. Vestibulum aliquet tincidunt massa eu cursus. Vestibulum
        vehicula lectus ut turpis posuere, vel rutrum leo dapibus. Nullam
        feugiat ac lectus quis vestibulum. Praesent id tempor nisi, eget
        imperdiet erat. Fusce quis ante eu arcu iaculis tincidunt. Donec
        molestie interdum risus, quis tristique est malesuada sit amet. Aenean
        iaculis lobortis orci, nec consectetur erat sagittis ut. Orci varius
        natoque penatibus et magnis dis parturient montes, nascetur ridiculus
        mus. Ut est ex, venenatis at gravida non, accumsan quis libero. Vivamus
        eleifend odio ac turpis vehicula, in consequat dolor vehicula. Morbi
        elementum augue id dolor consequat placerat sit amet et nunc. Cras at
        sem tempus, facilisis ligula ac, tempor turpis. Donec tempor urna id
        imperdiet dictum. Cras pellentesque bibendum interdum. Ut egestas neque
        magna, non ultrices eros vestibulum vitae. Maecenas dolor lectus,
        hendrerit at ultricies vitae, vestibulum ut magna. Phasellus a malesuada
        ex. Vivamus nec ante sem. Sed eleifend nulla a nulla tempus, at sodales
        ligula semper. Integer in ligula nunc. Fusce et feugiat nisi, vitae
        sagittis ipsum. Nullam lacinia lorem id sapien sollicitudin euismod.
        Aenean luctus dignissim libero, non aliquam urna. Aliquam vitae
        ullamcorper lacus. Mauris tellus mi, blandit vitae ex in, feugiat rutrum
        erat. Curabitur quis laoreet odio. Nullam ut aliquam felis. Integer
        ultricies tincidunt viverra. Praesent lorem eros, accumsan vitae nunc
        eu, placerat luctus felis. Nunc in est ut dui pharetra pretium nec sit
        amet massa. Aenean in mauris eget erat volutpat laoreet vitae eu massa.
        Nullam id dolor eu magna pharetra ornare ac in erat. Etiam non semper
        augue, maximus convallis tellus. Maecenas sagittis orci odio, quis
        tempus quam auctor sed. Aenean interdum mattis urna, eu commodo nibh
        suscipit et. In dapibus commodo eros, id feugiat eros consequat in. Ut
        euismod arcu eu dui ultrices, in venenatis nisl pulvinar. Nunc lobortis,
        mauris sed venenatis aliquam, leo tortor ullamcorper lacus, quis blandit
        ex arcu ut tellus. Nullam in massa fermentum, porta felis vitae,
        venenatis tellus. Proin bibendum tellus congue laoreet placerat. Duis
        maximus ultricies ligula quis tincidunt. Quisque maximus bibendum nibh,
        id ultrices diam aliquet ac. Nullam varius leo ut nulla dictum, non
        fringilla ante finibus. Praesent tempus mauris tellus, vel accumsan dui
        accumsan in. Vivamus consequat tristique ante quis pharetra. Vivamus non
        urna eleifend, efficitur velit eget, semper dui. Quisque lacinia, lacus
        quis sollicitudin congue, ex urna interdum tellus, id pharetra ligula
        ante quis sem. Nam pharetra cursus erat in congue. Duis id sem orci.
        Fusce in quam maximus, semper ex in, ullamcorper lorem. Aenean hendrerit
        tellus eget suscipit tincidunt. Etiam venenatis, urna sed viverra
        interdum, dui ligula ullamcorper erat, eu eleifend massa elit sit amet
        purus. Duis egestas mauris et mattis dictum. Pellentesque ac mi aliquet,
        laoreet velit a, pulvinar augue. Sed vel mattis augue, id blandit
        tortor. Quisque nec viverra lectus. Donec sit amet viverra felis. Etiam
        eros lacus, aliquam eu suscipit at, commodo blandit orci. Curabitur
        elementum rutrum tellus, in facilisis tellus porttitor ut. Vestibulum
        semper aliquet neque, a sollicitudin elit pellentesque a. Nullam vel
        ultrices dolor, facilisis hendrerit nunc. Pellentesque eu nisi
        ullamcorper, porta massa nec, convallis elit. Nunc semper sed magna eu
        ornare. Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas. Cras sed ante suscipit, porttitor
        tellus eu, dapibus mi. Phasellus dui lorem, rutrum at sapien id, euismod
        facilisis ante. Cras lacinia pellentesque elit, a pretium eros malesuada
        quis. Praesent justo metus, condimentum vel ipsum non, mollis mollis ex.
        Integer ex lectus, rutrum sit amet rutrum quis, eleifend non ipsum.
        Nulla bibendum ullamcorper nibh nec eleifend. In fermentum justo ut
        metus consequat, quis vehicula dui pellentesque. Pellentesque tempor,
        dolor et iaculis iaculis, neque quam auctor enim, eu dignissim nisi
        justo eu purus. Nam elementum tempor vulputate. Mauris in varius sapien.
        Phasellus eu mollis arcu, a bibendum elit. Duis et libero eget lorem
        congue viverra. Nunc consectetur finibus nisl, vel ultricies augue porta
        in. Fusce laoreet eleifend ex, a venenatis neque placerat at. Praesent
        nec libero vitae sem dignissim cursus nec vitae tortor. Morbi aliquet,
        felis vitae mollis hendrerit, odio sem venenatis orci, sodales blandit
        nunc leo sit amet mi. Phasellus quis turpis tincidunt, finibus nunc
        vitae, bibendum ipsum. Nam vehicula mauris a leo accumsan vulputate.
        Phasellus sed sem arcu. Aliquam eget libero sit amet ligula scelerisque
        euismod sit amet at quam. Fusce purus ante, iaculis sit amet erat nec,
        iaculis malesuada mauris. Etiam ornare sem ut tellus malesuada, porta
        ultricies dui mattis. Interdum et malesuada fames ac ante ipsum primis
        in faucibus. Cras dapibus elementum cursus. Fusce cursus finibus nisl
        commodo porttitor. Aenean condimentum suscipit tempor. Aliquam vehicula,
        mauris a malesuada aliquam, massa elit condimentum leo, pulvinar
        pellentesque felis risus at velit. Morbi sollicitudin molestie odio, at
        cursus tellus pretium eu. Nunc non neque felis. Phasellus gravida
        malesuada massa, eget dignissim mauris accumsan eget. Sed et dui
        sodales, mattis ante sit amet, lobortis risus. Vestibulum at quam
        tincidunt, porta nisi sed, blandit dui. Maecenas sodales eu est vitae
        tempor. Duis condimentum nec diam nec semper. Nulla a posuere sapien.
        Praesent et odio sapien. Morbi ut arcu non libero efficitur cursus
        lobortis pellentesque tellus. Interdum et malesuada fames ac ante ipsum
        primis in faucibus. Quisque vulputate lacus aliquam enim semper, a
        finibus eros vulputate. Quisque vitae diam at lacus egestas placerat.
        Aliquam lorem lacus, vestibulum vitae nulla in, tristique tempor justo.
        Donec ac sollicitudin ex, at bibendum metus. Donec molestie condimentum
        nulla id sollicitudin. Curabitur at malesuada leo, sollicitudin tempor
        enim. Sed id lectus eget lacus hendrerit convallis. Ut rutrum
        scelerisque ante, sit amet hendrerit mi mollis quis. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        Nam pretium elit a scelerisque porttitor. Proin aliquet est quis leo
        pharetra, a pretium erat congue. Maecenas venenatis sed tellus eget
        pharetra. Sed sit amet nunc fringilla lectus tristique sodales. Sed vel
        ipsum sed sem condimentum molestie eleifend in nisi. In magna dolor,
        aliquam sit amet tempus vitae, consectetur a velit. Donec consectetur ac
        risus tincidunt condimentum. Aliquam vitae enim non nisl dictum
        facilisis vitae vel augue. Sed lacinia, risus a cursus lacinia, eros
        neque fringilla ex, non cursus purus orci interdum augue. Sed quis neque
        vel ligula vehicula consectetur. Morbi viverra, quam et ultrices dictum,
        velit diam consectetur orci, sit amet rhoncus nisl mi sed mi. Vestibulum
        ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
        curae; Suspendisse mauris erat, rhoncus sed velit nec, rutrum lacinia
        odio. Proin mollis nec eros eu lobortis. Curabitur ut semper tortor.
        Mauris eget pharetra enim. Donec interdum metus vel nisi convallis
        imperdiet. Morbi eget felis id lectus pellentesque facilisis in a
        mauris. Nulla faucibus leo lorem, quis pulvinar lorem aliquam vitae.
        Maecenas convallis enim a neque sodales gravida. Maecenas eu sem et elit
        malesuada maximus sit amet ac odio. Vestibulum at feugiat diam. Duis
        lacinia vulputate eros, vel ornare libero egestas et. Pellentesque
        tempor feugiat magna ac facilisis. Donec rhoncus ac justo ut molestie.
        Sed vel ligula a diam hendrerit blandit eget in massa. Suspendisse non
        sapien condimentum, finibus odio eu, ultrices diam. Donec vehicula in
        tellus at porttitor. Quisque faucibus dui vitae nulla sagittis, ut
        euismod ligula dapibus. Sed bibendum magna dictum tellus molestie, nec
        dapibus eros rutrum. Donec at orci imperdiet, dictum ante eu, molestie
        ex. Aliquam a arcu convallis neque varius hendrerit. Etiam dapibus lacus
        ex, vel sodales nisl aliquam suscipit. Etiam in pulvinar metus. Vivamus
        tincidunt, mi a pellentesque varius, tellus justo fringilla lectus, eu
        accumsan nulla leo eu ante. Cras non auctor purus. Sed ornare, orci et
        mollis viverra, ligula mi rutrum ex, quis pulvinar erat enim ac ipsum.
        Nulla facilisi. Fusce pellentesque lacinia ex a luctus. Etiam mattis
        lectus odio, varius ultrices ex ultrices sed. Etiam tincidunt ultrices
        efficitur. Nam nec odio mi. Pellentesque habitant morbi tristique
        senectus et netus et malesuada fames ac turpis egestas. Vivamus congue
        varius bibendum. Aenean porta auctor lacus, at tincidunt felis vulputate
        a. Sed eu dui nec purus ultricies vehicula quis a nulla. Fusce semper,
        arcu eu aliquam tempor, nulla ex mollis ex, quis commodo leo sem quis
        justo. Etiam in massa id magna lobortis pellentesque. Ut aliquam erat ut
        felis dignissim maximus. Nulla sollicitudin mauris sed odio euismod,
        eget blandit libero condimentum. Curabitur laoreet id sapien in
        interdum. Aliquam vel velit eu justo luctus pulvinar. Donec at erat
        sollicitudin libero mollis tincidunt. Sed pretium, nibh sit amet
        lobortis cursus, odio sem ornare sem, sed condimentum neque elit et
        odio. Praesent eget condimentum ligula. Sed mattis in nisl vel
        dignissim. Ut malesuada quam massa, sit amet euismod dolor dictum non.
        Integer sit amet elit pellentesque, posuere dolor sagittis, blandit
        nunc. Mauris mauris lorem, commodo non diam vel, suscipit rutrum purus.
      </div>
    );
  };

  return (
    <div>
      {
        // prettier-ignore
        <>
          <div className="button-group">
            <button onClick={() => toggleModal("fullscreen")}>Fullscreen</button>
            <button onClick={() => toggleModal("xlarge")}>XLarge</button>
            <button onClick={() => toggleModal("large")}>Large</button>
            <button onClick={() => toggleModal("medium")}>Medium</button>
            <button onClick={() => toggleModal("small")}>Small</button>
            <button onClick={() => toggleModal("xsmall")}>XSmall</button>
            <button onClick={() => toggleModal("noneSize")}>Without Size</button>
          </div>
          <div className="button-group">
            <button onClick={() => toggleModal("fullscreenWithoutContent")}>Fullscreen Without Content</button>
            <button onClick={() => toggleModal("xlargeWithoutContent")}>XLarge Without Content</button>
            <button onClick={() => toggleModal("largeWithoutContent")}>Large Without Content</button>
            <button onClick={() => toggleModal("mediumWithoutContent")}>Medium Without Content</button>
            <button onClick={() => toggleModal("smallWithoutContent")}>Small Without Content</button>
            <button onClick={() => toggleModal("xsmallWithoutContent")}>XSmall Without Content</button>
            <button onClick={() => toggleModal("noneSizeWithoutContent")}>Without Size Without Content</button>
          </div>
        </>
      }
      {/* with content */}

      <ModernModal
        size="fullscreen"
        isOpen={modalState.fullscreen}
        onClose={() => toggleModal("fullscreen")}
      >
        {getModalContent()}
      </ModernModal>
      <ModernModal
        size="xlarge"
        isOpen={modalState.xlarge}
        onClose={() => toggleModal("xlarge")}
      >
        {getModalContent()}
      </ModernModal>
      <ModernModal
        size="large"
        isOpen={modalState.large}
        onClose={() => toggleModal("large")}
      >
        {getModalContent()}
      </ModernModal>
      <ModernModal
        size="medium"
        isOpen={modalState.medium}
        onClose={() => toggleModal("medium")}
      >
        {getModalContent()}
      </ModernModal>
      <ModernModal
        size="small"
        isOpen={modalState.small}
        onClose={() => toggleModal("small")}
      >
        {getModalContent()}
      </ModernModal>
      <ModernModal
        size="xsmall"
        isOpen={modalState.xsmall}
        onClose={() => toggleModal("xsmall")}
      >
        {getModalContent()}
      </ModernModal>
      <ModernModal
        isOpen={modalState.noneSize}
        onClose={() => toggleModal("noneSize")}
      >
        {getModalContent()}
      </ModernModal>
      {/* without content */}
      <ModernModal
        size="fullscreen"
        isOpen={modalState.fullscreenWithoutContent}
        onClose={() => toggleModal("fullscreenWithoutContent")}
      ></ModernModal>
      <ModernModal
        size="xlarge"
        isOpen={modalState.xlargeWithoutContent}
        onClose={() => toggleModal("xlargeWithoutContent")}
      ></ModernModal>
      <ModernModal
        size="large"
        isOpen={modalState.largeWithoutContent}
        onClose={() => toggleModal("largeWithoutContent")}
      ></ModernModal>
      <ModernModal
        size="medium"
        isOpen={modalState.mediumWithoutContent}
        onClose={() => toggleModal("mediumWithoutContent")}
      ></ModernModal>
      <ModernModal
        size="small"
        isOpen={modalState.smallWithoutContent}
        onClose={() => toggleModal("smallWithoutContent")}
      ></ModernModal>
      <ModernModal
        size="xsmall"
        isOpen={modalState.xsmallWithoutContent}
        onClose={() => toggleModal("xsmallWithoutContent")}
      ></ModernModal>
      <ModernModal
        isOpen={modalState.noneSizeWithoutContent}
        onClose={() => toggleModal("noneSizeWithoutContent")}
      ></ModernModal>
    </div>
  );
};

export default App;
