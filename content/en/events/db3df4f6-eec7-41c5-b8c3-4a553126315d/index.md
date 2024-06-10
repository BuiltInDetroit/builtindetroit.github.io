+++
title = 'CNC System Internals'
date = 2024-04-23T17:32:44-05:00
lastmod = 2024-04-23T17:32:44-05:00
categories = ['Robotics']
tags = ['robotics', 'industrial-automation', 'plc', 'pac', 'controllers', 'cnc']
series = []
slug = 'db3df4f6-eec7-41c5-b8c3-4a553126315d'
summary = 'A deep dive into the "brain" found in many forms of complex production machinery and robots.'
draft = false
images = ['opengraph.png']
tile_image = 'tile.jpg'
tile_image_alt = 'A person holding a laptop computer in one hand interacts with the HMI of a CNC controller with the other hand.'
videos = []

[event]
type = 'meeting'
date = 2024-05-11
in_person_rsvp_url = 'https://www.meetup.com/builtindetroit/events/299670151/'
in_person_rsvp_url2 = ''
livestream_url = 'https://youtube.com/live/qYficacF-aw?feature=share'

[venue]
name = 'TechTown Detroit'
address1 = '440 Burroughs Street'
address2 = 'Detroit, MI 48202'

[[times]]
range = '12:00 PM - 2:00 PM'
time_zone_abbreviation = 'EDT'

[[times]]
range = '11:00 AM - 1:00 PM'
time_zone_abbreviation = 'CDT'

[[times]]
range = '9:00 AM - 11:00 PM'
time_zone_abbreviation = 'PDT'

[[speakers]]
name = 'Adam Cook'
bio_url = 'https://github.com/motorcityadam'

[[partners]]
image = 'sme_chapter_153.svg'
image_alt = 'The Society of Manufacturing Engineers navy blue and tea green logo with the text, Chapter 153 - LA Country, shown below it.'
url = 'https://connect.sme.org/communities/home/44'
+++

Computer Numerical Controllers or CNC are the "brains" of many forms of production machinery, robots and industrial systems.

These controllers are quite advanced - consisting of many subsystems, components and technologies.

While an operational understanding of these systems is sufficient for most roles in a factory, there is value in diving down deep into these systems if you are interested in advanced machine design and maintenance.

In this presentation, we will touch on the following:

- Brief history of numerical control.
- Overview of major system components and architectures.
- How a program interpreter works in a typical CNC system.
- Hardware and software interpolation and NC kernels.
- Introduction to STEP-NC technology and its underlying data models.
