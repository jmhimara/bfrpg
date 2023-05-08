from bs4 import BeautifulSoup
import json

f = "./docs/monstersAll.html"

with open(f) as fp:
    soup = BeautifulSoup(fp, 'html.parser')

tables = soup.find_all("table")


# no_header_tables = []
# for table in tables:
#     if not table.find('thead'):
#         no_header_tables.append(table)

tables_with_header = []
for table in tables:
    thead = table.find('thead')
    if thead and any(th.text.strip() for th in thead.find_all('th')):
        tables_with_header.append(table)



num_cols = []
for table in tables_with_header:
    # Find the first row of the table and count the number of columns
    first_row = table.find('tr')
    if first_row:
        num_cols.append(len(first_row.find_all(['td', 'th'])))

columns_more2 = [i for i, x in enumerate(num_cols) if x > 2]

data = []



for it,t in enumerate(tables_with_header):
    for col in range(num_cols[it])[1:]:
        d = {"Name" : t.find("thead").find_all("th")[col].text.strip()}
        for row in t.find_all("tr")[1:]:
            cells = row.find_all("td")
            category = cells[0].text.strip()
            field = cells[col].text.strip()
            d[category] = field
        data.append(d)


 
with open("monsters.json", "w") as f:
    json.dump(data, f, indent=4)
