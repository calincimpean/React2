import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import React, { Component } from 'react';
import {useEffect, useState} from "react"
import { Link } from "react-router-dom";
import { FaSearch,FaPlay,FaInfoCircle } from "react-icons/fa";
import apiClient from './api/apiClient';
import { useParams } from "react-router-dom";
import './App.css';
import apiClientSeries from './api/apiClientSeries';
import Movie from './components/MovieCard/MovieCard';
import Movie2 from './components/MovieCard/MovieCard';
 














