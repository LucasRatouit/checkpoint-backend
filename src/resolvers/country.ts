import { Country } from "../entities/country";
import { Arg, Mutation, Query, Resolver } from "type-graphql";

@Resolver()
class CountryResolver {
  @Query(() => [Country])
  async Countries() {
    try {
      return await Country.find({
        select: ["name", "code", "emoji"],
      });
    } catch (_error) {
      throw new Error("Erreur lors de la récuperation des pays");
    }
  }

  @Query(() => Country, { nullable: true })
  async CountryByCode(@Arg("code") code: string): Promise<Country | null> {
    try {
      return await Country.findOne({ where: { code } });
    } catch (_error) {
      throw new Error("Erreur lors de la récuperation du pays");
    }
  }

  @Query(() => [Country], { nullable: true })
  async CountriesByContinent(@Arg("continent") continent: string) {
    try {
      return await Country.find({
        where: { continent },
        select: ["name", "code", "emoji", "continent"],
      });
    } catch (_error) {
      throw new Error("Erreur lors de la récuperation des pays");
    }
  }

  @Mutation(() => Country)
  async CreateCountry(
    @Arg("name") name: string,
    @Arg("code") code: string,
    @Arg("emoji") emoji: string,
    @Arg("continent") continent: string
  ) {
    const country = new Country();
    country.name = name;
    country.code = code;
    country.emoji = emoji;
    country.continent = continent;
    try {
      return await country.save();
    } catch (_error) {
      throw new Error("Erreur lors de la création");
    }
  }
}

export default CountryResolver;
