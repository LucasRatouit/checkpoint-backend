import { Country } from "../entities/country";
import dataSource from "./dataSource";

const generateData = async () => {
  try {
    await dataSource.initialize();

    const testCountry1 = await Country.findOne({ where: { name: "France" } });
    if (testCountry1) {
      await Country.delete({ name: "France" });
    }
    const country1 = new Country();
    country1.name = "France";
    country1.code = "FR";
    country1.emoji = "🇫🇷";
    country1.continent = "Europe";
    await country1.save();

    const testCountry2 = await Country.findOne({ where: { name: "Italie" } });
    if (testCountry2) {
      await Country.delete({ name: "Italie" });
    }
    const country2 = new Country();
    country2.name = "Italie";
    country2.code = "IT";
    country2.emoji = "🇮🇹";
    country2.continent = "Europe";
    await country2.save();

    const testCountry3 = await Country.findOne({ where: { name: "Japon" } });
    if (testCountry3) {
      await Country.delete({ name: "Japon" });
    }
    const country3 = new Country();
    country3.name = "Japon";
    country3.code = "JP";
    country3.emoji = "🇯🇵";
    country3.continent = "Asia";
    await country3.save();

    console.log("Base de données générée avec succés");
  } catch (_error) {
    throw new Error("Erreur lors de la création des données");
  } finally {
    await dataSource.destroy();
  }
};

generateData();
