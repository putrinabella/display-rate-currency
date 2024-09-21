import axios from "axios";

const selectedCurrencies = ["CAD", "IDR", "JPY", "CHF", "EUR", "USD"];
const order = ["CAD", "IDR", "JPY", "CHF", "EUR", "USD"]; // Desired order

export const fetchCurrencyData = async () => {
    try {
        const apiUrl = import.meta.env.VITE_API_URL;
        const apiKey = import.meta.env.VITE_API_KEY;

        const response = await axios.get(`${apiUrl}?apikey=${apiKey}`);
        const data = response.data.rates;

        const filteredData = Object.entries(data)
            .filter(([currency]) => selectedCurrencies.includes(currency))
        .map(([currency, rate]) => {
            const numericRate = parseFloat(rate);
            return {
            currency,
            buy: (numericRate * 1.02).toFixed(2),
            sell: (numericRate * 0.98).toFixed(2),
            exchangeRate: numericRate.toFixed(2),
            };
        });

        // Sort the filtered data based on the defined order
        const sortedData = order.map((currency) =>
        filteredData.find((item) => item.currency === currency)
        );

        return sortedData.filter(Boolean); // Filter out any undefined values
    } catch (error) {
        console.error("Error fetching currency data:", error);
        return [];
    }
};
