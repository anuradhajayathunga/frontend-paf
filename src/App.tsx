// import './App.css';
import { Grid, MantineProvider } from '@mantine/core';
// core styles are required for all packages
import '@mantine/core/styles.css';

function App() {
  return (
    <MantineProvider>

      <h1 className="text-3xl text-red-700 font-bold underline">
        Hello world!
      </h1>

      <Grid>
      <Grid.Col span={3}>1</Grid.Col>
      <Grid.Col span={3}>2</Grid.Col>
      <Grid.Col span={3} offset={3}>3</Grid.Col>
    </Grid>

    </MantineProvider>
  );
}

export default App;
