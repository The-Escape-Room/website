import { defineVuetifyConfiguration } from "vuetify-nuxt-module/custom-configuration";

export default defineVuetifyConfiguration({
    theme: {
        defaultTheme: 'default',
        themes: {
            default: {
                colors: {
                    // Primary Colors
                    'primary-lighten-5': '#f5f3ff',
                    'primary-lighten-4': '#ede9fe',
                    'primary-lighten-3': '#c7d2fe',
                    'primary-lighten-2': '#a5b4fc',
                    'primary-lighten-1': '#818cf8',
                    primary: '#6366f1',
                    'primary-darken-1': '#4f46e5',
                    'primary-darken-2': '#4338ca',
                    'primary-darken-3': '#3730a3',
                    'primary-darken-4': '#312e81',
                    'primary-darken-5': '#1e1b4b',
                    // Secondary Colors
                    'secondary-lighten-5': '#fefce8',
                    'secondary-lighten-4': '#fef9c3',
                    'secondary-lighten-3': '#fef08a',
                    'secondary-lighten-2': '#fde047',
                    'secondary-lighten-1': '#facc15',
                    secondary: '#eab308',
                    'secondary-darken-1': '#ca8a04',
                    'secondary-darken-2': '#a16207',
                    'secondary-darken-3': '#854d0e',
                    'secondary-darken-4': '#713f12',
                    'secondary-darken-5': '#422006',
                }
            }
        }
    }
});