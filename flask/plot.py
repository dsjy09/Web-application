# %%
import pandas as pd
import numpy as np
import json
import plotly.express as px
# %%
# Fetch or generate data for the map
# List of all the countries I've visited or lived in:
countries_visited = ['Portugal','United States','Scotland', 'England', 'France', 
                    'Spain','Turkey','China','Taiwan','Thailand','Austria',
                    'United Kingdom']

# Turn list into a DataFrame for Plotly Express:
data = pd.DataFrame({'Country': countries_visited})

visited_color = '#9467bd'
unvisited_color = 'white'
border_color = 'darkgray'
ocean_color = 'lightblue'

fig = px.choropleth(data, 
                    width=1000, height=700,
                    locations='Country', 
                    locationmode='country names', 
                    color_discrete_sequence=[visited_color])

# Choose a projection, and select map elements and colors:
fig.update_geos(projection_type="natural earth", 
                showcountries=True, 
                countrycolor=border_color,
                showland=True, landcolor=unvisited_color, 
                showocean=True, oceancolor=ocean_color,
                showlakes=False, 
                showrivers=False, 
                showframe=True)

# Turn off the legend and format the title:
fig.update_layout(showlegend=False)

# %%

# Convert the Plotly figure to JSON format
plot_json = fig.to_json()