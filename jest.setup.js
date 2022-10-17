import "@testing-library/jest-native/extend-expect";

// surpressing Animated: `useNativeDriver` is not supported warning
jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");
