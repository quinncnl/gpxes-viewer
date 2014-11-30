import os

dic = {}

f = open("template.html", "r")
tpl = f.read()
f.close()

fh = open("velo/color", "r")
for line in fh:
    dic[line.split(",")[0]] = line.split(",")[1].strip()

fh.close()

ttt = """omnivore.gpx('velo/{}/{}').addTo(map).on('ready', function() {{
this.setStyle({{color: '{}'}})
}});
"""

js_files = ""
for fd in os.listdir("velo"):
    if fd.isdigit():
        path = os.listdir("velo/{}".format(fd))
        for ff in path:
            if ff[-3:] == "gpx":
                js_files += ttt.format(fd, ff, dic[fd])

tpl = tpl.replace("{}", js_files)

fw = open("run.html", "w")
fw.write(tpl)
fw.close()

