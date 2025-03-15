import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  // Heading

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    gap: 20,
  },
  title: {
    textAlign: 'center',
    color: '#1e72ff',
    fontSize: 30,
    fontWeight: '500',
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: '300',
    marginBottom: 20,
  },

  headContainer:{
    gap:20
  },

  // Input Properties

  input: {
    width: 300,
    height: 50,
    borderRadius: 5,
    backgroundColor: '#f8f9fb',
    fontSize: 16,
    paddingHorizontal: 7,
    marginTop: 10,
    color: '#494F55',
  },
  focused: {
    borderColor: '#1e72ff',
    borderWidth: 2,
  },

  // Button Properties

  buttonContainer: {
    width: 300,
    borderRadius: 8,
    marginTop: 20,
  },
  button: {
    backgroundColor: '#1e72ff',
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
  },

  // Continue With

  continueMainContainer: {
    flexDirection: "column", 
    alignItems: "center",
    gap:30,
    marginTop:30
  },
  continueContainer: {
    flexDirection: "row", 
    alignItems: "center",
    justifyContent: "center",
    gap: 10, 
  },
  continueBox: {
    paddingHorizontal: 30,
    paddingVertical: 20,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
  },

  // Icon Button

  iconContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },


  // logo

  logoImage: {
    width:200, 
    height: 100, 
    resizeMode: "contain",
  },
  
});
