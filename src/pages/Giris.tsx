import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const Uygulama = () => {
  const [kullaniciAdi, setKullaniciAdi] = useState('');
  const [sifre, setSifre] = useState('');
  const [token, setToken] = useState('');

  const girisYap = async () => {
    try {
      const apiURL = 'https://rentapisinav.ototur.com/api/v1';
      const response = await fetch(apiURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Basic ${btoa(`${kullaniciAdi}:${sifre}`)}`, // Kullanıcı adı ve şifre base64 formatında
        },
      });

      if (response.ok) {
        const data = await response.json();
        setToken(data.token); // Token'i state'e kaydet
        Alert.alert('Başarılı Giriş', `Token: ${data.token}`);
      } else {
        const errorData = await response.json();
        Alert.alert('Hata', `Giriş başarısız: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Hata:', error);
    }
  };

  return (
    <View style={stiller.container}>
      <Text style={stiller.etiket}>Kullanıcı Adı:</Text>
      <TextInput
        style={stiller.input}
        onChangeText={(text) => setKullaniciAdi(text)}
        value={kullaniciAdi}
        placeholder="Kullanıcı Adınız"
      />

      <Text style={stiller.etiket}>Şifre:</Text>
      <TextInput
        style={stiller.input}
        onChangeText={(text) => setSifre(text)}
        value={sifre}
        secureTextEntry={true}
        placeholder="Şifreniz"
      />

      <TouchableOpacity style={stiller.buton} onPress={girisYap}>
        <Text style={stiller.butonMetni}>Giriş Yap</Text>
      </TouchableOpacity>

      {token ? (
        <Text style={stiller.bilgi}>Token: {token}</Text>
      ) : null}
    </View>
  );
};

const stiller = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  etiket: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  buton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  butonMetni: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  bilgi: {
    fontSize: 16,
    marginTop: 16,
  },
});

export default Uygulama;
