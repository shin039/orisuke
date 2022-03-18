// -----------------------------------------------------------------------------
// Import from Native
// -----------------------------------------------------------------------------
import React              from 'react';
import { View, Platform } from 'react-native';
import { AdMobBanner }    from 'expo-ads-admob';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Import from Orisuke
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
import {getContainerStyle}  from 'orisuke/src/styles/main_styles';

// -----------------------------------------------------------------------------
// Const
// -----------------------------------------------------------------------------
const styles = getContainerStyle();

// -----------------------------------------------------------------------------
// Common Function
// -----------------------------------------------------------------------------
export function prepareRender(child_content){
  const funcBannerError = (err) => {console.log(err);}

  // Platform Info
  const isDEV = __DEV__;
  const isIOS = ("ios" === Platform.os);

  // Google, DEVで切り分ける。
  const adUnitID = isDEV && "ca-app-pub-3940256099942544/6300978111"  // DEV
                         || "ca-app-pub-6727797435169197/3835348786"; // Google

  return (
    <>
      {/* Content */}
      <View style={styles.container}>
          {child_content}
      </View>

      {/* Banner */}
      {/* NOTE: iOSだとここで落ちる。 */}
      <View>
        <AdMobBanner
          servePersonalizedAds
          adUnitID={adUnitID}
          onDidFailToReceiveAdWithError={funcBannerError}
        />
      </View>
    </>
  );
 ee}
