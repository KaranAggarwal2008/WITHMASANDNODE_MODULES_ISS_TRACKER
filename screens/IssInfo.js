import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Alert
} from "react-native";
import axios from "axios";
import { NativeModules } from 'react-native';
const { Yodo1MASAds } = NativeModules;
function initSdk1(){
Yodo1MASAds.initMasSdk()
}
function showinterstitialAds(){
  Yodo1MASAds.showInterstitialAds();
}
function AutoCallAds(){
  return(
  <View>
  <initSdk1/>
  <showinterstitialAds />
  </View>
  )
}
export default class IssLocationScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: {}
        };
    }

    componentDidMount() {
        this.getIssLocation()
        try {
            setInterval(async () => {
                this.getIssLocation()
            }, 5000);
        } catch (e) {
            console.log(e);
        }
    }

    getIssLocation = () => {
        axios
            .get("https://api.wheretheiss.at/v1/satellites/25544")
            .then(response => {
                this.setState({ location: response.data })
            })
            .catch(error => {
                Alert.alert(error.message)
            })
    }

    render() {
        if (Object.keys(this.state.location).length === 0) {
            return (
                <View
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                    <AutoCallAds />
                </View>
            )
        } else {
            return (
                <View style={styles.infoContainer}>
                    <AutoCallAds />
                    <Text style={styles.infoText}>Latitude: {this.state.location.latitude}</Text>
                    <Text style={styles.infoText}>Longitude: {this.state.location.longitude}</Text>
                    <Text style={styles.infoText}>Altitude (KM): {this.state.location.altitude}</Text>
                    <Text style={styles.infoText}>Velocity (KM/H): {this.state.location.velocity}</Text>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    infoContainer: {
        flex: 0.2,
        backgroundColor: 'white',
        marginTop: -10,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 30
    },
    infoText: {
        fontSize: 15,
        color: "black",
        fontWeight: "bold"
    }
});